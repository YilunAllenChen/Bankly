import React from "react"
import "./App.css"
import { useSelector } from "react-redux"
import { Container } from "shards-react"
import FloatingMenu from "./components/universal/floating_menu"


import Welcome from "./pages/welcome"
import PlayEquity from "./pages/playequity"
import LearnEquity from "./pages/learnequity"
import InDev from "./pages/indev"

export default function App() {
  const selectView = state => state.view;
  let view = useSelector(selectView);
  let main;
  switch (view) {
    case "welcome":
      main = <Welcome />;
      break;
    case "learnEquity":
      main = <LearnEquity />;
      break;
    case "playEquity":
      main = <PlayEquity />;
      break;
    case "learnBonds":
    case "playBonds":
    case "learnSwaps":
    case "playSwaps":
    case "learnFX":
    case "playFX":
    case "learnOptions":
    case "playOptions":
      main = <InDev />;
      break;
    
    default:
      main = <Welcome />;
      break;
  }
  return (
    <Container style={{ margin: 0, padding: 0, maxWidth: '100%' }}>
      <FloatingMenu />
      <div className="background"></div>
      <div className="App nomargin">
        {/* {view} */}
        {main}
      </div>
    </Container>
  );
}