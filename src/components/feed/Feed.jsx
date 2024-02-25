import { Users, Posts } from "../../usersData";
import Post from "../post/Post";
import Share from "../share/Share";

function Feed() {
  return (
    <div className="bg-gray-100  p-4 flex flex-col gap-4 overflow-y-auto">
      <Share />
      {Posts.map((p) => (
        <Post key={p.id} post={p} />
      ))}
    </div>
  );
}

export default Feed;
