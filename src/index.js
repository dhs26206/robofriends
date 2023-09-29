import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Card from'./Card'
import reportWebVitals from './reportWebVitals';
// import Search from './Search';
import App from './Containers/App';
// import 'tachyons';
const root = ReactDOM.createRoot(document.getElementById('root'));
// const toor =ReactDOM.createRoot(document.getElementById('toor'));

root.render(
  <React.StrictMode>
    {/* <Search/>
    <Card name={"Dhruv"} />
    <Card name={"Manpreet"} />
    <Card name={"Ayush"} />
    <Card name={"Pranay"} />
    <Card name={"Gaurav"} />
    <Card name={"Jatin"} />
    <Card name={"Rajesh"} />
    <Card name={"Lakshman"} />
    <Card name={"Dayanand"} /> */}
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
