"use client";
import { useState } from "react";

export default function PredictorPage() {
  const [formData, setFormData] = useState({
    city: "",
    area: "",
    bedrooms: "",
    bathrooms: "",
    location_type: "",
    year_built: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          city: formData.city,
          area: parseFloat(formData.area),
          bedrooms: parseInt(formData.bedrooms),
          bathrooms: parseInt(formData.bathrooms),
          location_type: formData.location_type,
          year_built: parseInt(formData.year_built),
        }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.detail || "Something went wrong");
      }

      const data = await res.json();
      console.log("Prediction Response:", data);
      setResult(data.predicted_price);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-red-600 mb-8">
          🏠 House Price Predictor
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* City */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">City</label>
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            >
              <option value="">Select City</option>
              <option value="Lahore">Lahore</option>
              <option value="Karachi">Karachi</option>
              <option value="Islamabad">Islamabad</option>
              <option value="Faisalabad">Faisalabad</option>
              <option value="Multan">Multan</option>
              {/* Add more cities from your dataset */}
            </select>
          </div>

          {/* Area */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Area (Marla)
            </label>
            <input
              type="number"
              name="area"
              value={formData.area}
              onChange={handleChange}
              placeholder="Enter house area in Marla"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Bedrooms */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Bedrooms</label>
            <input
              type="number"
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleChange}
              placeholder="Enter number of bedrooms"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Bathrooms */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Bathrooms</label>
            <input
              type="number"
              name="bathrooms"
              value={formData.bathrooms}
              onChange={handleChange}
              placeholder="Enter number of bathrooms"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Location Type */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Location Type</label>
            <select
              name="location_type"
              value={formData.location_type}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            >
              <option value="">Select Location Type</option>
              <option value="Urban">Urban</option>
              <option value="Suburban">Suburban</option>
              <option value="Rural">Rural</option>
            </select>
          </div>

          {/* Year Built */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Year Built</label>
            <input
              type="number"
              name="year_built"
              value={formData.year_built}
              onChange={handleChange}
              placeholder="Enter construction year"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-red-700 transition"
          >
            {loading ? "Predicting..." : "Predict Price"}
          </button>
        </form>

        {/* Result / Error */}
        {result !== null && (
          <p className="mt-6 text-green-600 font-bold text-center text-xl">
            Predicted Price: {result.toLocaleString()} PKR
          </p>
        )}
        {error && (
          <p className="mt-6 text-red-600 font-bold text-center">{error}</p>
        )}
      </div>
    </main>
  );
}
