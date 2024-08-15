import { cn } from "@/lib/utils";
import { IoCall, IoLocation } from "react-icons/io5";
import { FaClock, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export const StoreDetails = ({
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <ul className={cn(
      "text-xl flex flex-col gap-2 ",
      className
    )}>
      <li className="label">
        <FaLocationDot />
        รังสิด
      </li>
      <li className="label">
        <FaPhoneAlt />
        location
      </li>
      <li className="label">
        <FaClock />
        location
      </li>
    </ul>
  );
};
