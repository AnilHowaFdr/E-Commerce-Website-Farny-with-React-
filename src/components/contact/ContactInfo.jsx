import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";

const ContactInfo = () => {
  return (
    <div className="px-14 w-1/2 flex flex-col gap-8">
      <div className="flex gap-8 ">
        <FaLocationDot className="text-2xl mt-1" />
        <div>
          <h3 className="font-primary font-medium text-2xl">Address</h3>
          <p className="detail w-[180px]">
            236 5th SE Avenue, New York NY10000, United States
          </p>
        </div>
      </div>
      <div className="flex gap-8 ">
        <FaPhoneAlt className="text-2xl mt-1" />
        <div>
          <h3 className="font-primary font-medium text-2xl">Phone</h3>
          <p className="detail">Mobile: +(84) 546-6789</p>
          <p className="detail">Hotline: +(84) 456-6789</p>
        </div>
      </div>
      <div className="flex gap-8 ">
        <IoTime className="text-2xl mt-1" />
        <div>
          <h3 className="font-primary font-medium text-2xl">Working Time</h3>
          <p className="detail w-[180px]">Monday-Friday: 9:00 - 22:00</p>
          <p className="detail w-[180px]">Saturday-Sunday: 9:00 - 21:00</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;