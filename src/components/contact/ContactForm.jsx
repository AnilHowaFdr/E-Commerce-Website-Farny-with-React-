import InputBox from "../utilities/InputBox";

const ContactForm = () => {
  return (
    <div className="px-14 w-1/2 flex flex-col items-start ">
      <InputBox title="Your name" placeholder="Abc" />
      <InputBox title="Email address" placeholder="Abc@def.com" type="email" />
      <InputBox title="Subject" placeholder="This is an optional" />
      <InputBox title="Message" placeholder="Hi! i’d like to ask about" />
      <button className="py-4 px-12 lg:px-20 bg-brand rounded-lg font-primary font-normal text-base w-fit text-white">
        Submit
      </button>
    </div>
  );
};

export default ContactForm;
