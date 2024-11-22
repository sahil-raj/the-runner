//@ts-ignore
import Trex from "./components/TRunner.js";
import sprite100 from "./assets/default_100_percent/100-offline-sprite.png";
import sprite200 from "./assets/default_200_percent/200-offline-sprite.png";

function App() {
  return (
    <>
      <Trex sprite100={sprite100} sprite200={sprite200}></Trex>
    </>
  );
}

export default App;
