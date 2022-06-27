import React from "react";
import { Container } from "react-bootstrap";
import  ReactDOM  from "react-dom";
import { createRoot } from "react-dom/client";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import moviesApp from './reducers/reducers';



import { MainView } from "./components/main-view/main-view";

// Import statement to indicate that you need to bundle `./index.scss`
import './index.scss';

const store = createStore(moviesApp);

// Main component 
class MovieApplication extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <MainView />
      </Provider>
    );
  }
}

// Finds the root of the app
const rootElement = document.getElementsByClassName('app-container')[0];

const root = createRoot(rootElement);

// Tells React to render  app in the root DOM element
root.render(React.createElement(MovieApplication));