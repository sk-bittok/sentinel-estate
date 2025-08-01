import React from "react";
import { toast } from "react-toastify";
import { motion } from "motion/react";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e3ebbf29-c466-483f-b284-4d5deae730d2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success('Form submitted successfully', {
        position: 'top-center'
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message, {
        position: 'top-center',
      });
      setResult("");
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      id="Contact"
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
    >

      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact&nbsp;
        <span className="underline underline-offset-4 decoration-1 under font-light">Us</span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8 capitalize mx-auto">
        Ready to make a move? Let's build your future together.
      </p>

      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto text-gray-600 pt-8"
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your name
            <input
              type="text"
              placeholder="John Doe"
              name="Name"
              required
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              type="email"
              placeholder="johndoe@example.com"
              name="Email"
              required
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
            />
          </div>
        </div>
        <div className="my-6 text-left">
          Message
          <textarea
            name="Message"
            placeholder="Your message"
            required
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
          >
          </textarea>
        </div>
        <input type="hidden" name="access_key" value="e3ebbf29-c466-483f-b284-4d5deae730d2" />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded px-12 py-2 mb-10 disabled:bg-gray-500 hover:scale-105 transition-transform duration-500"
        >
          {result ? result : "Send Message"}
        </button>
      </form>
    </motion.div>
  )
}

export default Contact
