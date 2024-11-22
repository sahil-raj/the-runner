import { useEffect } from "react";
import "../TRunner.css";
//@ts-ignore
import Runner from "./trex.js";

const Trex = ({
  sprite100,
  sprite200,
}: {
  sprite100: string;
  sprite200: string;
}) => {
  useEffect(() => {
    new Runner(".game-container");
  }, []);

  return (
    <>
      <div id="main-content">
        <div className="icon icon-offline"></div>
      </div>
      <div id="offline-resources">
        <img id="offline-resources-1x" src={sprite100} />
        <img id="offline-resources-2x" src={sprite200} />
      </div>
      <div
        className="game-container"
        style={{ width: "100%", height: "150px" }}
      ></div>
    </>
  );
};

export default Trex;
