import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="lg:flex lg:flex-row flex flex-col justify-between align-center mx-12 mt-24">
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default Contact;
