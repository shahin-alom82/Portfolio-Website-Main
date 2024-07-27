import { FaArrowAltCircleRight } from "react-icons/fa";
import Container from "../Container/Container";
import SectionTitle from "../SectionTitle/SectionTitle";


const About = () => {
      return (
            <div>
                  <Container id="about" className="py-20 lg:px-20">
                        <SectionTitle titleNo={"01 ."} title={"About me"}></SectionTitle>
                        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
                              <div className="lg:w-2/3 w-full">
                                    <h1 className="mt-6 text-[18px] text-darkText">
                                          Hello! My name is Noor Mohammad and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about <br /> HTML & CSS!
                                    </h1>
                                    <h1 className="mt-5 text-[18px] text-darkText">
                                          Fast-forward to today, and I had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rem accusantium fugiat veritatis, quidem repellat ab <br /> natus possimus? Sint, accusamus!
                                    </h1>
                                    <h1 className="mt-5 text-[18px] text-darkText">
                                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem ullam eligendi dolorum nostrum possimus quos iusto magnam ut esse recusandae.
                                    </h1>
                                    <h1 className="mt-5 text-[18px] text-darkText">
                                          Here are a few technologies I have been working with recently:
                                    </h1>

                                    <div className="mt-10 flex flex-col lg:flex-row gap-24 text-[18px]">
                                          <div className="space-y-2">
                                                <div className="flex gap-2 items-center">
                                                      <FaArrowAltCircleRight className="text-designColor" />
                                                      <a href="" className="hover:text-lightText text-darkText">JavaScript (ES6+)</a>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                      <FaArrowAltCircleRight className="text-designColor" />
                                                      <a href="" className="hover:text-lightText text-darkText">React js</a>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                      <FaArrowAltCircleRight className="text-designColor" />
                                                      <a href="" className="hover:text-lightText text-darkText">JavaScript (ES6+)</a>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                      <FaArrowAltCircleRight className="text-designColor" />
                                                      <a href="" className="hover:text-lightText text-darkText">MongoDB</a>
                                                </div>
                                          </div>

                                          <div className="space-y-3">
                                                <div className="flex gap-2 items-center">
                                                      <FaArrowAltCircleRight className="text-designColor" />
                                                      <a href="" className="hover:text-lightText text-darkText">Next js</a>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                      <FaArrowAltCircleRight className="text-designColor" />
                                                      <a href="" className="hover:text-lightText text-darkText">Node js</a>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                      <FaArrowAltCircleRight className="text-designColor" />
                                                      <a href="" className="hover:text-lightText text-darkText">Express js</a>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                      <FaArrowAltCircleRight className="text-designColor" />
                                                      <a href="" className="hover:text-lightText text-darkText">TailwindCSS</a>
                                                </div>
                                          </div>
                                    </div>
                              </div>

                              <div className="mt-10 lg:mt-0">
                                    <img className="lg:h-[500px] border-4 hover:bg-cyan-300 w-[350px] hover:backdrop-hue-rotate-30 duration-300 hover:border-8 hover:shadow-xl hover:shadow-designColor border-designColor rounded-full" src="https://i.ibb.co/y5hLCHT/448803900-991780162595052-2271124324976378812-n-removebg-preview.png" alt="" />
                              </div>
                        </div>
                  </Container>
            </div>
      );
};

export default About;
