import TopBar from "../TopBar/TopBar";
import LeftBar from "../leftBar/LeftBar";
import Feed from "../feed/Feed";
import RightBar from "../rightBar/RightBar";
function Profile() {
  return (
    <>
      <TopBar />
      <div className="flex pt-16">
        <div className="w-3/12">
          <LeftBar />
        </div>

        <div className="flex flex-col">
          {/** ===================== User Cover,Profile, Info ===================== */}

          <div className="ml-32 h-full">
            <div className="relative h-96 w-full">
              <img src="/post1.jpg" alt="" className="w-full h-[300px]" />
              <img
                src="/post1.jpg"
                alt=""
                className="absolute m-auto left-0 right-0 top-48 border-4 border-white border-solid  h-48 w-48 rounded-full"
              />
            </div>

            {/** ===================== User Info ===================== */}

            <div className="text-center my-4">
              <h1 className="font-bold text-3xl">Nasir Shahzad</h1>
              <span className="text-xl text-gray-600">This is description related to user</span>
            </div>
          </div>

          {/** ===================== Feed, RightBar ===================== */}

          <div className="flex pl-32">
            <div className="w-4/7">
              <Feed />
            </div>

            <div className="w-3/7">
              <RightBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
