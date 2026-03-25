import Banner from "./components/Banner";
import FleetSection from "./components/FleetSection";
import LeadForm from "./components/LeadForm";
import Midlle from "./components/Midlle";
import SlideBar from "./components/SlideBar";
import SlideBar2 from "./components/SlideBar2"
export default function Home() {
  
  return (
    <>
   <Banner/>
   <Midlle/>
   <div className = "StyleSlider">
   <SlideBar/>
   <SlideBar2/>
   </div>
   </>
  )
} 
