import Container from "../Container/Container";

const Email = () => {
      return (
            <Container id={"email"}>
                  <div className="text-center mt-36 lg:p-0 p-5">
                  <h1 className="lg:text-2xl text-xl text-designColor">04. What’s Next?</h1>
                  <h1 className="lg:text-5xl text-3xl font-bold mt-2">Get In Touch</h1>
                  <p className="lg:text-xl mt-5 text-darkText">Although I’m not currently looking for any new opportunities, my <br /> inbox is always open. Whether you have a question or just <br />  want to say hi, I’ll try my best to get back to you!</p>
                  <a href="mailto:shahinalom3511371@gmail.com">
                  <button className="border-2 text-[18px] border-designColor py-3 px-12 mt-6 rounded-md">Say Hello</button>

                  </a>
            </div>
            </Container>
      );
};

export default Email;