import Container from "../Container/Container";
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";
import LeftSiteNavbar from "../LeftSiteNavbar/LeftSiteNavbar";
import RightSiteNabvar from "../RightSiteNabvar/RightSiteNabvar";
import moment from "moment/moment";
// import Marquee from 'react-fast-marquee';

const Banner = () => {

      const stringValue = ["I build Things for wait", "Fontend Developer"]

      return (

            <div>
                  <LeftSiteNavbar></LeftSiteNavbar>
                  <Container id="home" className="py-10 md:py-32 flex flex-col gap-4 lg:gap-4 lg:px-20">


                        <h1 className="text-2xl">{moment().format('MMMM D , YYYY / h:mm A')}</h1>

                        <motion.h1
                              initial={{ y: 10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ duration: 0.5, delay: 0.7 }}
                              className="lg:text-2xl text-[18px] font-bodyFont text-designColor">Hi, My Name is
                        </motion.h1>




                        <motion.h1
                              initial={{ y: 10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ duration: 0.5, delay: 0.7 }}
                              className="lg:text-6xl text-3xl font-bold mt-2">Shahin Alom.

                        </motion.h1>
                        <div className="lg:text-6xl text-3xl font-semibold text-darkText">
                              <Typewriter
                                    options={{
                                          autoStart: true,
                                          loop: true,
                                          cursor: "|",
                                          strings: stringValue,
                                    }}
                              />
                        </div>
                        <p className="text-[18px] text-darkText md:max-w-[850px]">I am a web developer with 4+ years of experience in React. I have a strong foundation in <br /> front-end & back-end development and am skilled in creating user-friendly and responsive <br /> web applications using React and its ecosystem. <span className="text-designColor underline"> Learn more</span></p>
                        <button className="text-[16px] h-12 lg:w-[200px] w-52 border-2 hover:bg-hovarColor duration-500 border-designColor p-2 mt-8 rounded-lg text-designColor" >Click out my Projects!</button>


{/* 
                        <div className="text-white text-center p-10 rounded-lg mt-6">
                              <Marquee gradient={false}>
                                    <div className="lg:text-3xl mx-8 cursor-pointer">
                                          <ul>
                                                {[
                                                      "HTML-CSS",
                                                      "JavaScript",
                                                      "React",
                                                      "TailwindCSS",
                                                      "Bootstrap",
                                                      "MaterialUI",
                                                      "NodeJS",
                                                      "ExpressJS",
                                                      "MongoDB",
                                                      "Firebase",
                                                      "Vercel",
                                                ].map((skill, index) => (
                                                      <li
                                                            key={index}
                                                            className="inline-block px-6 py-3 mx-4 my-2 border-2 border-purple-700 rounded-lg text-text-1 font-medium hover:text-purple-700 transition-colors duration-500"
                                                      >
                                                            {skill}
                                                      </li>
                                                ))}
                                          </ul>
                                    </div>
                              </Marquee>
                        </div> */}


                  </Container>

                  <RightSiteNabvar></RightSiteNabvar>

            </div>



      );
};

export default Banner;




