import React from "react";
import  ReactDOM  from "react-dom";

import { MainView } from "./components/main-view/main-view";

// Import statement to indicate that you need to bundle `./index.scss`
import './index.scss';

// Main component 
class MovieApplication extends React.Component {
  render() {
    return (
      <div className="my-flix">
        <div>Good morning</div>
      </div>
    );
  }
}

// Finds the root of the app
const container = document.getElementsByClassName('app-container')[0];

// Tells React to render  app in the root DOM element
ReactDOM.render(React.createElement(MovieApplication), container);