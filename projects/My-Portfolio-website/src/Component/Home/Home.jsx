import About from "../About/About";
import Banner from "../Banner/Banner";
import Client from "../Client/Client";
import Education from "../Education/Education";
import Email from "../Email/Email";
import Experience from "../Experience/Experience";
import Header from "../Header/Header";
import OtherSection from "../Other/Other";
import Projects from "../Projects/Projects";
import ScrollBar from "../ScrollBar/ScrollBar";
import Skils from "../Skils/Skils";

const Home = () => {
      return (
            <main className="font-fontFamily min-h-screen  text-lightText" >
                  <Header />
                  <Banner />
                  <About />
                  <Experience />
                  <Projects />
                  <Client/>
                  <ScrollBar />
                  <OtherSection />
                  <Skils/>
                  <Education />
                  <Email />
                  {/* Archive */}
                  {/* Contact */}
                  {/* Leftsite */}
                  {/* Rightsite */}
                  {/* Scrollbtn */}
            </main >
      );
};

export default Home; 