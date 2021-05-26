import React from "react"
import Welcome from "./pages/welcome"
import Equity from "./pages/equity"
import LearnEquity from "./pages/learnequity"
import "./App.css"
import { useSelector } from "react-redux"
import { Container } from "shards-react"

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
    case "equity":
      main = <Equity />;
      break;
    default:
      main = <Welcome />;
      break;
  }
  return (
    <Container style={{margin: 0, padding: 0, maxWidth: '100%'}}>
      <div className="background"></div>
      <div className="App nomargin">
        {/* {view} */}
        {main}
      </div>
    </Container>
  );
}
