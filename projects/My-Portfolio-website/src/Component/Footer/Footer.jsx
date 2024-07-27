import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import Container from '../Container/Container';

const Fotter = () => {
      return (
            <Container><footer className="mt-20 bg-opacity-5 bg-[#0a192f] rounded-full">
                  <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                        <div className="sm:flex sm:items-center sm:justify-between">
                              <div>
                                    <span className="self-center text-4xl font-semibold whitespace-nowrap uppercase text-designColor lg:text-start lg:ml-0 ml-6">Sha<span className='text-designColor'>hin</span> Alom</span>
                                    <h1 className='text-xl  mt-3 lg:ml-0 ml-6 text-darkText'>Web Developer & Designer</h1>
                              </div>


                              <ul className="items-center mb-6 text-lg font-medium lg:ml-0 ml-6 text-darkText">
                                    <h1>Contact ME :-</h1>
                                    <h1>Email : shahinalom3511371@gmail.com</h1>
                                    <h1>Phone : 01682247291</h1>
                                    <div className='mt-4 flex gap-5'>
                                          <a href="https://github.com/shahin-alom82">
                                                <img className='h-8 ' src="https://i.ibb.co/PCB43Nm/Github-desktop-logo-symbol-svg.png" alt="" />
                                          </a>
                                          <img className='h-8 ' src="https://i.ibb.co/NLN5mBs/facebook-logo-icon-257007.webp" alt="" />
                                          <img className='h-8 ' src="https://i.ibb.co/3057zJY/circle-linkedin-512.webp" alt="" />
                                          <img className='h-8 ' src="https://i.ibb.co/f1vcdd6/Instagram-logo-2016-svg.webp" alt="" />
                                          <img className='h-8 ' src="https://i.ibb.co/85gRDx1/twitter-logo-icon-186891.webp" alt="" />
                                    </div>
                              </ul>
                        </div>


                        <hr className="my-6 border-designColor sm:mx-auto lg:my-8" />
                        <span className="block lg:text-xl text-[13px]  sm:text-center lg:ml-0 ml-6 text-darkText" >© 2024 <a href="#">Your Name™</a>. All Rights Reserved.</span>


                  </div>
            </footer></Container>
      );
};

export default Fotter;