import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 bg-gradient-to-r from-blue-50 via-white to-blue-50">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-4">
          🏡 Welcome to <span className="text-blue-600">AI House Price Predictor</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
          Predict the value of your home with the power of{" "}
          <span className="font-semibold text-blue-700">Artificial Intelligence</span>.  
          Our smart model makes property buying and selling{" "}
          <span className="font-semibold text-green-600">simpler, faster,</span> and{" "}
          <span className="font-semibold text-green-600">more accurate</span>.
        </p>

        <a
          href="/Predictor"
          className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          🚀 Get Started
        </a>
      </section>
      <Footer/>
    </div>
  );
}
