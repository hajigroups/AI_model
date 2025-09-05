from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import numpy as np
import os

# ------------------------
# Load Model + Encoders
# ------------------------
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

try:
    model = joblib.load(os.path.join(BASE_DIR, "house_price_model.pkl"))
    le_city = joblib.load(os.path.join(BASE_DIR, "le_city.pkl"))
    le_location = joblib.load(os.path.join(BASE_DIR, "le_location.pkl"))
    print("✅ Model and encoders loaded successfully!")
except Exception as e:
    raise RuntimeError(f"❌ Error loading model files: {e}")

# ------------------------
# FastAPI App
# ------------------------
app = FastAPI()

# Enable CORS so frontend (localhost:3000) can call backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ------------------------
# Request Schema
# ------------------------
class HouseFeatures(BaseModel):
    city: str
    area: float
    bedrooms: int
    bathrooms: int
    location_type: str
    year_built: int

# ------------------------
# Prediction Endpoint
# ------------------------
@app.post("/predict")
def predict_price(features: HouseFeatures):
    try:
        print("📩 Incoming request:", features.dict())  # log request

        # Validate city + location_type
        if features.city not in le_city.classes_:
            raise HTTPException(
                status_code=400,
                detail=f"Unknown city: {features.city}"
            )
        if features.location_type not in le_location.classes_:
            raise HTTPException(
                status_code=400,
                detail=f"Unknown location_type: {features.location_type}"
            )

        # Encode categorical values
        city_encoded = le_city.transform([features.city])[0]
        location_encoded = le_location.transform([features.location_type])[0]

        # Prepare input
        X = np.array([[
            city_encoded,
            features.area,
            features.bedrooms,
            features.bathrooms,
            location_encoded,
            features.year_built
        ]])

        # Predict
        prediction = model.predict(X)[0]
        print("✅ Prediction:", prediction)

        return {"predicted_price": round(float(prediction), 2)}

    except HTTPException as e:
        print("❌ Validation Error:", e.detail)
        raise e
    except Exception as e:
        print("❌ Server Error:", e)
        raise HTTPException(status_code=500, detail=str(e))

# ------------------------
# Root Endpoint (optional)
# ------------------------
@app.get("/")
def root():
    return {"message": "🏠 House Price Predictor API is running!"}
