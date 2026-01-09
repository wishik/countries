import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Countries from "./Components/Countries";

function App() {
  // const [state, setState] = useState({
  //   Japan: {
  //     capital: "Tokyo",
  //     flagUrl:
  //       "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1280px-Flag_of_Japan.svg.png",
  //     population: 123_360_000,
  //   },
  //   Canada: {
  //     capital: "Ottawa",
  //     flagUrl:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/2560px-Flag_of_Canada_%28Pantone%29.svg.png",
  //     population: 41_575_585,
  //   },
  //   Netherlands: {
  //     capital: "Amsterdam",
  //     flagUrl:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1280px-Flag_of_the_Netherlands.svg.png",
  //     population: 18_044_027,
  //   },
  // });

  const [state, setState] = useState([
    {
      name: "Japan",
      capital: "Tokyo",
      flagUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1280px-Flag_of_Japan.svg.png",
      population: 123_360_000,
    },
    {
      name: "Canada",
      capital: "Ottawa",
      flagUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/2560px-Flag_of_Canada_%28Pantone%29.svg.png",
      population: 41_575_585,
    },
    {
      name: "Netherlands",
      capital: "Amsterdam",
      flagUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1280px-Flag_of_the_Netherlands.svg.png",
      population: 18_044_027,
    },
  ]);

  useEffect(() => {
    // console.log(state);
  }, []);

  return (
    <div className="App">
      <Countries state={state} />
    </div>
  );
}

export default App;
