import { SlFeed } from "react-icons/sl";
import { HiMiniChatBubbleLeftRight } from "react-icons/hi2";
import { MdSlowMotionVideo } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { MdBookmarks } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { TbBriefcaseFilled } from "react-icons/tb";
import { MdOutlineEventRepeat } from "react-icons/md";
import { SiReadme } from "react-icons/si";

function LeftBar() {
  return (
    <div className="w-3/12 h-full pl-8 overflow-y-auto">
      {/** Feed Section */}
      <div className="flex flex-col gap-7 pt-8">
        <div className="flex items-center gap-4">
          <SlFeed className="size-8" />
          <span className="text-xl font-semibold">Feed</span>
        </div>

        <div className="flex items-center gap-4">
          <HiMiniChatBubbleLeftRight className="size-8" />
          <span className="text-xl font-semibold">Chat</span>
        </div>

        <div className="flex items-center gap-4">
          <MdSlowMotionVideo className="size-8" />
          <span className="text-xl font-semibold">Videos</span>
        </div>

        <div className="flex items-center gap-4">
          <MdGroups className="size-8" />
          <span className="text-xl font-semibold">Groups</span>
        </div>

        <div className="flex items-center gap-4">
          <MdBookmarks className="size-8" />
          <span className="text-xl font-semibold">Bookmarks</span>
        </div>

        <div className="flex items-center gap-4">
          <FaRegQuestionCircle className="size-8" />
          <span className="text-xl font-semibold">Questions</span>
        </div>

        <div className="flex items-center gap-4">
          <TbBriefcaseFilled className="size-8" />
          <span className="text-xl font-semibold">Jobs</span>
        </div>

        <div className="flex items-center gap-4">
          <MdOutlineEventRepeat className="size-8" />
          <span className="text-xl font-semibold">Events</span>
        </div>

        <div className="flex items-center gap-4">
          <SiReadme className="size-8" />
          <span className="text-xl font-semibold">Courses</span>
        </div>
      </div>

      {/** Button */}
      <div className="pt-8 pb-4">
        <button type="button" className="border border-solid bg-gray-300 h-10 w-40 rounded-xl">
          Show More
        </button>
      </div>

      <hr className="mt-3 mb-3" />

      {/** Online Friends */}
      <div className="pt-4">
        <ul className="flex flex-col gap-2">
          <li className="flex gap-4 items-center">
            <img src="/1.jpg" alt="" className="h-10 w-10 rounded-full" />

            <span className="text-xl">John Deo</span>
          </li>

          <li className="flex gap-4 items-center">
            <img src="/1.jpg" alt="" className="h-10 w-10 rounded-full" />
            <span className="text-xl">John Deo</span>
          </li>

          <li className="flex gap-4 items-center">
            <img src="/1.jpg" alt="" className="h-10 w-10 rounded-full" />
            <span className="text-xl">John Deo</span>
          </li>

          <li className="flex gap-4 items-center">
            <img src="/1.jpg" alt="" className="h-10 w-10 rounded-full" />
            <span className="text-xl">John Deo</span>
          </li>

          <li className="flex gap-4 items-center">
            <img src="/1.jpg" alt="" className="h-10 w-10 rounded-full" />
            <span className="text-xl">John Deo</span>
          </li>

          <li className="flex gap-4 items-center">
            <img src="/1.jpg" alt="" className="h-10 w-10 rounded-full" />
            <span className="text-xl">John Deo</span>
          </li>

          <li className="flex gap-4 items-center">
            <img src="/1.jpg" alt="" className="h-10 w-10 rounded-full" />
            <span className="text-xl">John Deo</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LeftBar;
