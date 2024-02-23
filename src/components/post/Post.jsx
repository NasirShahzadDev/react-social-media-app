import { TbDotsVertical } from "react-icons/tb";
import { FcLike } from "react-icons/fc";
import { SlLike } from "react-icons/sl";
import { BiSolidLike } from "react-icons/bi";

function Post() {
  return (
    <div className="bg-white rounded-lg p-2">
      {/** User Info */}

      <div className="flex p-4 bg-white items-center gap-2">
        <img src="/post.webp" alt="" className="h-10 w-10 rounded-full" />
        <span className="text-xl font-semibold">Nasir Shahzad</span>
        <span className="text-md font-semibold pl-2 text-gray-600">5 min ago</span>

        <TbDotsVertical className="size-6 ml-auto" />
      </div>

      {/** Post Content */}
      <div className="px-4">
        <p className="text-xl">
          {" "}
          the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
          survived not only five centu
        </p>
      </div>

      {/** Post Image */}
      <div>
        <img src="/post.webp" alt="" className="h-full w-full p-2" />
      </div>

      {/** Post Bottom */}

      <div className="h-12 px-4 items-center flex gap-2">
        <FcLike className="size-8" />
        <BiSolidLike className="size-8 text-blue-800" />
        <span>12 people like it</span>
        <span className="ml-auto">2 comments</span>
      </div>
    </div>
  );
}

export default Post;
