import { FaPhoneAlt, FaRegCalendarTimes } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ContactInfo = () => {
  return (
    <div className="px-3 md:px-14 flex flex-col items-start gap-8 ">
      <div className="flex gap-8 items-start w-1/3">
        <div>
          <FaLocationDot className="text-2xl" />
        </div>
        <div>
          <h3 className="font-primary font-medium text-2xl">Address</h3>
          <p className="detail ">
            236 5th SE Avenue, New York NY10000, United States
          </p>
        </div>
      </div>
      <div className="flex gap-8 items-start w-1/3">
        <div>
          <FaPhoneAlt className="text-2xl" />
        </div>
        <div>
          <h3 className="font-primary font-medium text-2xl">Phone</h3>
          <p className="detail">Mobile: +(84) 546-6789</p>
          <p className="detail">Hotline: +(84) 456-6789</p>
        </div>
      </div>
      <div className="flex gap-8 items-start w-1/3">
        <div>
          <FaRegCalendarTimes className="text-2xl" />
        </div>
        <div>
          <h3 className="font-primary font-medium text-2xl">Working Time</h3>
          <p className="detail ">Monday-Friday: 9:00 - 22:00</p>
          <p className="detail ">Saturday-Sunday: 9:00 - 21:00</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
