import React from "react"
import Welcome from "./pages/welcome"
import Equity from "./pages/equity"
import "./App.css"
import { connect, useSelector } from "react-redux"

import { store } from "./states/global";

export default function App() {
  const selectView = state => state.view;
  let view = useSelector(selectView);
  let main;
  console.log(view == "second");
  switch (view) {
    case "welcome":
      main = <Welcome />;
      break;
    case "second":
      main = <Equity />;
      break;
    default:
      main = <Welcome />;
      break;
  }
  return (
    <div className="App nomargin">
      <div>
        {view}
      </div>
      {main}
    </div>
  );
}


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { "view": "welcome" };
//   }

//   render() {

//     let main;


//     switch (store.getState().view) {
//       case "welcome":
//         main = <Welcome />;
//       case "second": 
//         main = <Equity />;
//       default:
//         main = <Welcome />;
//         break;
//     }
//     return (
//       <div className="App nomargin">
//         <div>
//           {this.state.view}
//           {this.props.view}
//         </div>
//         {main}
//       </div>
//     );
//   }
// }


// const mapStateToProps = state => {
//   return {
//     view: state.view
//   }
// }


// // We normally do both in one step, like this:

// export default connect(mapStateToProps, null)(App);

// export default App;
