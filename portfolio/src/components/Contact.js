import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="h-screen w-full flex items-center justify-center p-4 bg-[#0a192f]"
    >
        /* this is the form*/
      <form
        method="POST"
        action="https://getform.io/f/pbmqxnqb"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-b-blue-400 mx-auto text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the Form below or shoot me an
            email-faizankhansnn322@gmail.com
          </p>
        </div>
        <input
          placeholder="Name"
          className="py-2 my-2 px-2"
          type="text"
          name="name"
        />
        <input
          placeholder="Email"
          className="py-2 my-2 px-2"
          type="email"
          name="email"
        />
        <textarea
          rows="10"
          name="message"
          placeholder="Message"
          className="px-2 py-2"
        ></textarea>

        <button className="text-white py-4 my-4 border-2 hover:bg-white hover:text-black">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
