import TopBar from "../TopBar/TopBar";
import LeftBar from "../leftBar/LeftBar";
import Feed from "../feed/Feed";
import RightBar from "../rightBar/RightBar";

function Home() {
  return (
    <>
      <TopBar />
      <div className="flex pt-16">
        <LeftBar />
        <Feed />
        <RightBar />
      </div>
    </>
  );
}

export default Home;
