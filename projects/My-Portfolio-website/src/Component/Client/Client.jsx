import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import Container from "../Container/Container";

const Client = () => {
  const reviewVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };







  const reviews = [
    {
      name: "John Doe",
      review: "Excellent course! I learned a lot.",
      img: "https://i.ibb.co/K0tz6z0/client6.webp",
      rating: 5,
    },
    {
      name: "Jane Smith",
      review: "Very well structured and easy to follow.",
      img: "https://i.ibb.co/6ybYjxR/client4.webp",
      rating: 4,
    },
    {
      name: "Alice Johnson",
      review: "Great explanations and examples.",
      img: "https://i.ibb.co/ncRR3PZ/client-3avif.jpg",
      rating: 4,
    },
    {
      name: "Michael Brown",
      review: "Highly recommend to everyone!",
      img: "https://i.ibb.co/7S94Sf3/client.jpg",
      rating: 5,
    },
  ];

  return (
    <Container>
      <div
        id="Reviews"
        className="text-center mt-9 font-medium rounded-lg lg:px-20 md:px-32"
      >
        <h2 className="lg:text-4xl font-bold mb-4">
          What Our Client Say
        </h2>
        <Marquee gradient={false}>
          <div className="flex items-center mt-4">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                className="inline-block w-72 h-52 px-6 py-4 mx-4 my-2 border-2 border-designColor rounded-lg bg-slate-950 bg-opacity-45 text-designColor"
                variants={reviewVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={review.img}
                  alt={`${review.name}'s profile`}
                  className="w-16 h-16 rounded-full mx-auto"
                />
                <p className="mt-2 font-bold">{review.name}</p>
                <p className="italic">{review.review}</p>
                <div className="flex justify-center mt-2">
                  {Array.from({ length: review.rating }, (_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Marquee>
      </div>
    </Container>
  );
};

export default Client;