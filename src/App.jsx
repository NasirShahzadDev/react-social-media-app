import { useState } from "react";
import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import LeftBar from "./components/leftBar/LeftBar";
import Feed from "./components/feed/Feed";
import RightBar from "./components/rightBar/RightBar";

function App() {
  const [count, setCount] = useState(0);

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

export default App;
