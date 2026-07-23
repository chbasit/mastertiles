import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrendingItems from "./components/TrendingItems";
import SurfaceCollections from "./components/SurfaceCollections";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact";
import Categoty from "./components/Category";
import ShowroomSection from "./components/ShowroomSection";
import Testimonials from "./components/Testimonial";
import Faqs from "./components/Faqs";
import WhyMaster from "./components/WhyMaster"
import VideoSection from "./components/Video";
function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TrendingItems />
      <WhyMaster/>
      {/* <Categoty /> */}

<ShowroomSection />
      

      <SurfaceCollections />
      <VideoSection />
      <Testimonials />
      <Faqs />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;