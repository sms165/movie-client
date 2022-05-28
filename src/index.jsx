import React from "react";
import  ReactDOM  from "react-dom";
import { createRoot } from "react-dom/client";


import { MainView } from "./components/main-view/main-view";

// Import statement to indicate that you need to bundle `./index.scss`
import './index.scss';

// Main component 
class MovieApplication extends React.Component {
  render() {
    return (
      <MainView />
    );
  }
}

// Finds the root of the app
const rootElement = document.getElementsByClassName('app-container')[0];

const root = createRoot(rootElement);

// Tells React to render  app in the root DOM element
root.render(React.createElement(MovieApplication));