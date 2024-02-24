function Online({ user }) {
  return (
    <div>
      <ul className="flex flex-col gap-2">
        <li className="flex gap-4 items-center">
          <img src={user.profilePicture} alt="" className="h-10 w-10 rounded-full" />
          <span className="text-xl">{user.userName}</span>
        </li>
      </ul>
    </div>
  );
}

export default Online;
