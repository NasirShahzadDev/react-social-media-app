import { TbDotsVertical } from "react-icons/tb";
import { FcLike } from "react-icons/fc";
import { SlLike } from "react-icons/sl";
import { BiSolidLike } from "react-icons/bi";
import { Users } from "../../usersData";
import { useState } from "react";

function Post({ post }) {
  /** --------------------------------------------------------------
                            Like Login
   * -------------------------------------------------------------- */
  const [like, setLiked] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLiked(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  //---------------------------------------------------------------

  return (
    <div className="bg-white rounded-lg p-2">
      <div className="flex p-4 bg-white items-center gap-2">
        <img src={Users.filter((user) => user.id === post.id)[0].profilePicture} className="h-10 w-10 rounded-full" />
        <span className="text-xl font-semibold">{Users.filter((user) => user.id === post.id)[0].userName}</span>
        <span className="text-md font-semibold pl-2 text-gray-600">{post.date}</span>

        <TbDotsVertical className="size-6 ml-auto" />
      </div>

      {/** Post Content */}
      <div className="px-4">
        <p className="text-xl">{post.description}</p>
      </div>

      {/** Post Image */}
      <div>
        <img src={post.photo} alt="" className="h-full w-full p-2" />
      </div>

      {/** Post Bottom */}

      <div className="h-12 px-4 items-center flex gap-2">
        <FcLike className="size-8" onClick={likeHandler} />
        <BiSolidLike className="size-8 text-blue-800" onClick={likeHandler} />
        <span>{like} people like it</span>
        <span className="ml-auto">{post.comment} comments</span>
      </div>
    </div>
  );
}

export default Post;
