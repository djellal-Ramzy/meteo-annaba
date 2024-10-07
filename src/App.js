import "./App.css";
import SimpleContainer from "./components/container";
import { ModeProvider } from "./contexts/ThemeContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "./features/weither/weitherSlice";
function App() {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather.weather);

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  console.log("rendering");
  return (
    <div className="App">
      <ModeProvider>
        <SimpleContainer weather={weather} />
      </ModeProvider>
    </div>
  );
}

export default App;
