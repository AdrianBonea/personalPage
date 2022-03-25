import React from "react";
import emailjs from "@emailjs/browser";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Contact() {
  const form = React.useRef();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_unjhlvm",
        "template_v094kiq",
        form.current,
        "aFrlLKuFoGFsCkDrk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <section
      className="bg-[#373e98] w-full h-auto flex justify-center pb-[20vh]"
      id="contact"
    >
      <div className="flex flex-col w-[80ch]">
        <div className="flex flex-col w-auto ">
          <div className=" font-bold">
            <span className="text-4xl font-bold text-[#ceb92c] ">
              ./contact
            </span>
            <div className="flex flex-col my-5">
              <p className="font-thin text-[#ceb92c] text-4xl">
                Where you can find{" "}
                <span className="underline decoration-[#f16775]">me</span>:
              </p>
              <div className="flex flex-row text-5xl text-white mt-4">
                <a
                  href="https://github.com/AdrianBonea"
                  target="_blank"
                  className="mx-4"
                >
                  <AiFillGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/adrian-mirel-bonea/"
                  target="_blank"
                >
                  <AiFillLinkedin />
                </a>
              </div>
            </div>
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col border-4 border-[#ceb92c] text-[#ceb92c]"
          >
            <h1 className="mx-10 mt-10 text-2xl font-bold">Send me an email</h1>
            <label className="mx-10 mt-5 mb-1">Name *</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="mx-10 bg-[#313680] border-transparent focus:border-transparent focus:ring-0"
            />
            <label className="mx-10 mt-5 mb-1">Email *</label>
            <input
              type="email"
              name="email"
              placeholder="youare.the.best@email.com"
              className="mx-10 bg-[#313680] border-transparent focus:border-transparent focus:ring-0"
            />
            <label className="mx-10 mt-5 mb-1">Message *</label>
            <textarea
              name="message"
              placeholder="Write me a message"
              className="mx-10 bg-[#313680] border-transparent focus:border-transparent focus:ring-0"
            />
            <button
              type="submit"
              value="Send"
              className="mx-10 my-10 py-2 text-xl border border-[#ceb92c] hover:border-[#313680] hover:bg-[#ceb92c] hover:text-[#313680]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
