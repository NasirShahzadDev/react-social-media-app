import { FaPhotoVideo } from "react-icons/fa";
import { AiFillTag } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { FaRegSmile } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { BiSolidTagAlt } from "react-icons/bi";
import { MdAddAPhoto } from "react-icons/md";
import { FaSmile } from "react-icons/fa";

function Share() {
  return (
    <div className="p-4 bg-white rounded-lg">
      {/** Upper of Share */}
      <div className="flex p-2 bg-white">
        <img src="/1.jpg" alt="" className="h-12 w-12 rounded-full" />
        <input type="text" className="w-full pl-3 border-none outline-none" placeholder="What's in your mind?" />
      </div>

      <hr className="h-[2px] bg-gray-300 mt-4" />

      {/** Below of Share */}
      <div className="flex p-2 mt-2 bg-white gap-3">
        <div className="flex items-center gap-1">
          <MdAddAPhoto className="text-red-600 size-7" />
          <span className="text-md font-semibold">Photo or Video</span>
        </div>

        <div className="flex items-center gap-1">
          <BiSolidTagAlt className="text-blue-600 size-7" />
          <span className="text-md font-semibold">Tag</span>
        </div>

        <div className="flex items-center gap-1">
          <ImLocation2 className="text-green-600 size-7" />
          <span className="text-md font-semibold">Location</span>
        </div>

        <div className="flex items-center gap-1">
          <FaSmile className="text-yellow-400 size-7" />
          <span className="text-md font-semibold">Feelings</span>
        </div>
        <div className="pl-12 ml-auto">
          <button className="bg-green-500 px-2 h-8 rounded-md text-white">Share</button>
        </div>
      </div>
    </div>
  );
}

export default Share;
