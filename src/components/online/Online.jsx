import { FaCircle } from "react-icons/fa";
function Online({ user }) {
  return (
    <div>
      <ul className="flex flex-col gap-2">
        <li className="flex gap-4 items-center">
          <div className="relative">
            <img src={user.profilePicture} alt="" className="h-10 w-10 rounded-full" />
            <div className="h-5 w-5 border-solid border-2 rounded-full bg-green-600 absolute left-6 right-0 top-0 bottom-1"></div>
          </div>
          <span className="text-xl">{user.userName}</span>
        </li>
      </ul>
    </div>
  );
}

export default Online;
