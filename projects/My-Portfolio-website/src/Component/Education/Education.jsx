import Container from "../Container/Container";

const Education = () => {
      return (
            <Container id={"education"}  className="lg:p-0 p-5 lg:mx-[430px] mt-28 lg:px-0 md:px-32 ">
                  <div>
                        <div className="text-center">
                              <h1 className="lg:text-5xl text-3xl font-semibold">Education</h1>
                              <p className="text-xl text-darkText mt-6">My education has been a journey of self-discovery and growth. My <br /> educational details are as follows.</p>
                              {/* Collage Cart */}
                              <div
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                          minWidth: "18rem",
                                          maxWidth: "100%",
                                          textDecoration: "none",
                                          color: "inherit",
                                    }}
                                    className="py-4 px-4 mt-10 cursor-pointer block rounded-lg bg-[#112240] border border-designColor duration-700 text-white shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
                                    <div className="flex flex-col md:flex-row gap-5">
                                          <img className="lg:h-20 w-full md:w-auto rounded-sm" src="https://i.ibb.co/0c6tDNX/download.jpg" alt="" />
                                          <div className="text-start">
                                                <h1 className="text-[22px] font-semibold text-gray-300">Habiganj Polytechnic Institute</h1>
                                                <h1 className="text-darkText">Diploma in Engineering - Computer Science and Technology</h1>
                                                <p className="text-darkText">Sep 2020 - Oct 2024</p>
                                          </div>
                                    </div>
                                    <div className="text-start mt-3 text-darkText">
                                          <h1>Grade : Not Published Yet</h1>
                                          <p className="mt-3">I have completed the Diploma in Computer Science & Engineering at Habiganj Polytechnic <br /> Institute.I have taken courses in Data Structures Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others.</p>
                                    </div>
                              </div>
                              {/* School Cart */}
                              <div
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                          minWidth: "18rem",
                                          maxWidth: "100%",
                                          textDecoration: "none",
                                          color: "inherit",
                                    }}
                                    className="py-4 px-4 mt-10 cursor-pointer block rounded-lg bg-[#112240] text-white shadow-xl duration-700 transition-transform transform hover:scale-105 hover:shadow-2xl border border-designColor">
                                    <div className="flex flex-col md:flex-row gap-5">
                                          <img className="lg:h-20 w-full md:w-auto rounded-sm" src="https://i.ibb.co/R7xfFm2/450441890-1025728021781977-5809504526320617517-n.jpg" alt="" />
                                          <div className="text-start">
                                                <h1 className="text-[22px] font-semibold text-gray-300">Assim High School</h1>
                                                <h1 className="text-darkText">SSC - General Electrical</h1>
                                                <p className="text-darkText">Jan 2015 - March 2020</p>
                                          </div>
                                    </div>
                                    <div className="text-start mt-3 text-darkText">
                                          <h1>Grade : 4.68 out of 5</h1>
                                          <p className="mt-3">I completed my class 10 high school education at Assim High School, where I studied technical with Electrical.</p>
                                    </div>
                              </div>



                        </div>
                  </div>
            </Container>
      );
};

export default Education;