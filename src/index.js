import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Main } from 'components/Main';

const root = document.getElementById("root");

//  const main = React.createElement("div", {id:"main_id", className:"test_class"}, "hello world")

// ReactDOM.createRoot(root).render(<Main/>);
ReactDOM.createRoot(root).render(<App />);
