

import { TiSocialYoutube } from "react-icons/ti";
import Container from "../Container/Container";
import SectionTitle from "../SectionTitle/SectionTitle";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";

const Projects = () => {
      return (
            <Container id={"projects"} className={"py-28"}>


                  <div className="w-full flex justify-center lg:justify-start lg:ml-32">
                        <SectionTitle title={"Some Things I have Built"} titleNo={"03 ."} className="ml-4 lg:ml-32" />
                  </div>


                  {/* Project One */}
                  <div className="flex flex-col lg:flex-row gap-10 mt-10 lg:ml-32 px-4 lg:px-0">
                        {/* image */}
                        <a href="https://shahin-alom82.github.io/Assignment-5/" className="w-full lg:w-1/2 h-auto relative group overflow-hidden ">
                              <img className="h-80 w-full lg:w-[500px] rounded-lg duration-300" src="https://i.ibb.co/RjrnGSv/screencapture-shahin-alom82-github-io-Assignment-5-2024-07-16-16-56-39.png" alt="Summer-Sale image" />
                              <div className="absolute h-80 w-full lg:w-[500px] bg-designColor/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300" />
                        </a>
                        <div className="text-end lg:-ml-36 z-50">
                              <h1 className="text-designColor">Featured Project</h1>
                              <h1 className="lg:text-[27px] text-xl font-semibold mt-2">Summer Sale</h1>
                              <div className="">
                                    <p className="bg-[#112240] h-full px-8 p-6 mt-6 rounded-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Nesciunt et impedit veniam at animi similique recusandae ex <br />exercitationem qui facere.</p>
                              </div>
                              <div className="flex flex-wrap justify-end lg:justify-between mt-6 gap-2 lg:gap-0 ml-0 lg:ml-40 items-center">
                                    <h1>HTML</h1>
                                    <h1>CSS</h1>
                                    <h1>Javascript</h1>
                                    <h1>Tailwind CSS</h1>
                              </div>
                              <div className="flex justify-end gap-4 lg:gap-8 mt-6 items-center">
                                    <a href="https://github.com/shahin-alom82/Assignment-5"><BsGithub size={25} /></a>
                                    <TiSocialYoutube size={30} />
                                    <FaArrowUpRightFromSquare size={25} />
                              </div>
                        </div>
                  </div>



                  {/* Project Two */}
                  <div className="flex flex-col lg:flex-row gap-10 mt-32 lg:ml-32 px-4 lg:px-0">
                        <div className="lg:-mr-48 z-50 order-2 lg:order-1">
                              <h1 className="text-designColor lg:ml-[310px]">Featured Project</h1>
                              <h1 className="lg:text-[27px] text-xl font-semibold mt-2 lg:ml-[290px]">Match Box</h1>
                              <div className="">
                                    <p className="bg-[#112240] h-full px-8 p-6 mt-6 rounded-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Nesciunt et impedit veniam at animi similique recusandae ex <br />exercitationem qui facere.</p>
                              </div>
                              <div className="flex items-center gap-5 lg:ml-32 mt-6">
                                    <h1>HTML</h1>
                                    <h1>CSS</h1>
                                    <h1>Javascript</h1>
                                    <h1>TailwindCSS</h1>
                              </div>
                              <div className="flex gap-8 mt-6 items-center lg:ml-[280px]">
                                    <a href="https://github.com/shahin-alom82/MatchBox"><BsGithub size={25} /></a>
                                    <TiSocialYoutube size={30} />
                                    <FaArrowUpRightFromSquare size={25} />

                              </div>
                        </div>
                        {/* image */}
                        <a href="https://fancy-cassata-c6fd63.netlify.app/" className="w-full lg:w-1/2 lg:ml-[120px] h-auto relative group overflow-hidden order-1 lg:order-2">
                              <img className="h-80 w-full lg:w-[500px] rounded-lg duration-300" src="https://i.ibb.co/fp1Q8rG/screencapture-fancy-cassata-c6fd63-netlify-app-2024-07-11-01-28-19.png" alt="Match-Box image" />
                              <div className="absolute h-80 w-full lg:w-[500px] bg-designColor/5 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300" />
                        </a>
                  </div>



                  {/* Project Three */}
                  <div className="flex flex-col lg:flex-row gap-10 mt-32  lg:ml-28 px-4 lg:px-0">
                        {/* image */}
                        <a href="https://abcdremarkable-weather.surge.sh/" className="w-full lg:w-1/2 h-auto relative group overflow-hidden ">
                              <img className="h-80 w-full lg:w-[500px] rounded-lg duration-300" src="https://i.ibb.co/S7nz5f2/screencapture-abcdremarkable-weather-surge-sh-2024-07-11-01-30-40.png" alt="Online-Merket-Place" />
                              <div className="absolute h-80 w-full lg:w-[500px] bg-designColor/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300" />
                        </a>
                        <div className="text-end lg:-ml-40 z-50">
                              <h1 className="text-designColor">Featured Project</h1>
                              <h1 className="lg:text-[27px] text-xl font-semibold mt-2">Online Market Place</h1>
                              <div className="">
                                    <p className="bg-[#112240] h-full px-8 p-6 mt-6 rounded-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Nesciunt et impedit veniam at animi similique recusandae ex <br />exercitationem qui facere.</p>
                              </div>
                              <div className="flex flex-wrap justify-end lg:justify-between mt-6 gap-2 lg:gap-4 ml-0 lg:ml-40 items-center">
                                    <h1>HTML</h1>
                                    <h1>CSS</h1>
                                    <h1>Tailwind CSS</h1>
                                    <h1>MongoDB</h1>
                                    <h1>Javascript</h1>
                              </div>
                              <div className="flex justify-end gap-4 lg:gap-8 mt-6 items-center">
                                    <a href="https://github.com/shahin-alom82/Assignment-11"><BsGithub size={25} /></a>
                                    <TiSocialYoutube size={30} />
                                    <FaArrowUpRightFromSquare size={25} />

                              </div>
                        </div>
                  </div>



            </Container>
      );
};

export default Projects;
