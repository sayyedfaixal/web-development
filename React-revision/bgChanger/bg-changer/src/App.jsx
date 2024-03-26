import { useState } from "react";
import colors from "./Colors";
function App() {
  const [color, setColor] = useState("olive");
  // console.log("Color imported ", colors.length);
  return (
    <div
      className="w-full h-screen duration-300"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl overflow-x-auto whitespace-nowrap">
          {/* {colors.map((color, index) => (
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              {color}
            </button>
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default App;
