import TopBar from "../TopBar/TopBar";
import LeftBar from "../leftBar/LeftBar";
import Feed from "../feed/Feed";
import RightBar from "../rightBar/RightBar";

function Home() {
  return (
    <>
      <TopBar />
      <div className="flex pt-16">
        <div className="w-3/12">
          <LeftBar />
        </div>

        <div className="w-5/12">
          <Feed />
        </div>

        <div className="w-4/12">
          <RightBar />
        </div>
      </div>
    </>
  );
}

export default Home;
