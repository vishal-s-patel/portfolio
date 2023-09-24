import * as React from "react";
import LinkButton from "../shared/ui/LinkButton";

const Contact = () => {
  return (
    <section className="max-w-[600px] mt-0 mx-auto my-24 text-center">
      <h2 className="block mb-5 text-green font-bodyFont text-base font-normal">
        <span className="text-green text-sm font-bodyFont mr-2.5 font-normal text-header-clamp">
          04.
        </span>
        What's Next?
      </h2>
      <h2 className="capitalize text-contact-title">Get in touch</h2>
      <p>
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <LinkButton
        btnText="Say Hello"
        link="mailto:vishalpatel7543@gmail.com"
        classes="mt-12 text-sm"
      />
    </section>
  );
};

export default Contact;
