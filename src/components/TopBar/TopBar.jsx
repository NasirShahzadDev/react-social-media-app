// import "./topBar.css";

import { MdOutlinePerson3 } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiChat } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";

function TopBar() {
  return (
    <div className="bg-blue-500 h-[70px] w-full m-0 flex items-center justify-center fixed">
      {/** Top Bar Left */}
      <div className="w-3/12 pl-12">
        <span className="text-3xl font-bold text-white cursor-pointer">Social Media</span>
      </div>

      {/** Top Bar Center */}
      <div className="w-5/12 flex gap-2 p-5">
        {/* <div className="bg-red-300 flex items-center gap-2 h-12 mt-4 w-full my-12"> */}
        {/* <IoSearchOutline className="searchIcon" /> */}
        <input
          placeholder="Search for friend, post or video"
          className="h-10 w-full px-4 rounded-3xl border-none outline-none"
        />
        {/* </div> */}
      </div>

      {/** Top Bar Right */}
      <div className="w-4/12 flex gap-3 text-center items-center pl-6">
        <div className="flex gap-2 text-white">
          <span className="cursor-pointer text-lg font-semibold">HomePage</span>
          <span className="cursor-pointer text-lg font-semibold">Timeline</span>
        </div>

        <div className="flex gap-3 pl-12">
          <div className="text-white pt-2">
            <GoPerson className="size-9" />
            <span className="bg-red-500 rounded-3xl absolute top-3 h-6 w-6">1</span>
          </div>

          <div className="text-white pt-2">
            <BiChat className="size-9" />
            <span className="bg-red-500 rounded-3xl absolute top-3 h-6 w-6">2</span>
          </div>

          <div className="text-white pt-2">
            <IoNotificationsOutline className="size-9" />
            <span className="bg-red-500 rounded-3xl absolute top-3 h-6 w-6">4</span>
          </div>

          {/* <div className="topBarItem">
            <BiChat />
            <span className="topBarIconBadge">2</span>
          </div>
          <div className="topBarItem">
            <IoNotificationsOutline />
            <span className="topBarIconBadge">3</span>
          </div> */}
          <div className="pl-6">
            <img src="/1.jpg" alt="" className="h-12 w-12 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;

// <div className="bg-blue-400 h-20 w-full m-0 flex ">
//       {/** Top Bar Left */}
//       <div className="topBarLeft">
//         <span className="logo">Social Media</span>
//       </div>

//       {/** Top Bar Center */}
//       <div className="topBarCenter">
//         <div className="searchBar">
//           <IoSearchOutline className="searchIcon" />
//           <input placeholder="Search for friend, post or video" className="searchInput" />
//         </div>
//       </div>

//       {/** Top Bar Right */}
//       <div className="topBarRight">
//         <div className="topBarLinks">
//           <span className="topBarLink">HomePage</span>
//           <span className="topBarLink">TimeLine</span>
//         </div>

//         <div className="topBarIcons">
//           <div className="topBarItem">
//             <MdOutlinePerson3 />
//             <span className="topBarIconBadge">1</span>
//           </div>
//           <div className="topBarItem">
//             <BiChat />
//             <span className="topBarIconBadge">2</span>
//           </div>
//           <div className="topBarItem">
//             <IoNotificationsOutline />
//             <span className="topBarIconBadge">3</span>
//           </div>

//           <img src="/1.jpg" alt="" className="profilePicture" />
//         </div>
//       </div>
//     </div>
