import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact_body = () => {
  return (
    <section className="pt-24 pb-16">
      <div className="container">
        <div className="pb-28 flex flex-col justify-center items-center">
          <h2 className="font-semibold font-primary text-4xl">
            Get In Touch With Us
          </h2>
          <p className="font-primary font-semibold text-base text-[#9F9F9F] text-center pt-2 w-[644px]">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        <div className="flex gap-8">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact_body;
