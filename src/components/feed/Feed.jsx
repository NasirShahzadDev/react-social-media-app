import Post from "../post/Post";
import Share from "../share/Share";

function Feed() {
  return (
    <div className="bg-gray-100 w-5/12 p-4 flex flex-col gap-4 overflow-y-auto">
      <Share />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
