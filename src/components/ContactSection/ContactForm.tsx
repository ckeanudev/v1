"use client";
import React from "react";
import { memo, useRef } from "react";
import emailjs from "@emailjs/browser";

// type Props = {}

const ContactForm = ({}: any) => {
  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1feuv5m",
        "template_mx11ddg",
        form.current,
        "qrcqwR2PqyHYt08yL"
      )
      .then(
        (result) => {
          alert(`Message has been sent to Ckeanu, Thank you!`);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="grid gap-2 max-w-[600px] mx-auto mt-8 md:mt-14 p-1 sm:p-5">
      <input
        type="text"
        name="user_name"
        placeholder="Full Name"
        required
        className="px-3 py-2 rounded-lg border border-light-4 text-sm md:text-base"
      />
      <input
        type="email"
        name="user_email"
        placeholder="Email Address"
        required
        className="px-3 py-2 rounded-lg border border-light-4 text-sm md:text-base"
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        required
        className="px-3 py-2 rounded-lg border border-light-4 text-sm md:text-base"
      />
      <textarea
        name="message"
        cols={30}
        rows={8}
        placeholder="Message"
        className="px-3 py-2 rounded-lg border min-h-[100px] border-light-4 text-sm md:text-base"
      />
      <button className="px-3 py-3 mt-3 rounded-lg bg-dark-1 text-light-2 font-medium text-sm md:text-base">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
