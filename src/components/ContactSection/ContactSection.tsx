import React from "react";
import { MdEmail, MdLocationPin, MdOutlineSmartphone } from "react-icons/md";
import ContactForm from "./ContactForm";

// type Props = {}

const ContactSection = ({}: any) => {
  return (
    <section id="contactSection" className="pt-14 pb-24">
      <div className="max-w-[1000px] mx-auto h-full p-4 md:p-8">
        <h2 className="text-center text-2xl md:text-3xl font-bold headerGradColor">
          Contact Me
        </h2>

        <div className="max-w-[600px] md:max-w-none mx-auto md:w-full mt-10 md:mt-14 flex flex-col md:flex-row gap-6 md:gap-2 items-start md:items-center justify-between">
          <div className="flex items-center">
            <div className="min-w-[50px] flex justify-center text-dark-1">
              <MdEmail size={26} />
            </div>
            <div className="">
              <p className="text-xs text-dark-3">Email Address</p>
              <p className="text-sm font-semibold text-dark-2">
                ckeandev@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="min-w-[50px] flex justify-center text-dark-1">
              <MdOutlineSmartphone size={26} />
            </div>
            <div className="">
              <p className="text-xs text-dark-3">Phone Number</p>
              <p className="text-sm font-semibold text-dark-2">+639552101316</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="min-w-[50px] flex justify-center text-dark-1">
              <MdLocationPin size={26} />
            </div>
            <div className="">
              <p className="text-xs text-dark-3">Home Address</p>
              <p className="text-sm font-semibold text-dark-2">
                Zamboanga City, Philippines
              </p>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
