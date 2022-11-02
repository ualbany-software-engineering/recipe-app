import React from 'react';
import ReactDOM from 'react-dom/client'; 
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import Navigator from './scripts/navbar';
import App from "./App";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Routes,
    Router,
    BrowserRouter,
} from "react-router-dom";
import Root from "./routes/root";
import Search from "./routes/search";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
    <React.StrictMode>
        <BrowserRouter>
        <App/>
        </BrowserRouter>
    </React.StrictMode>
    </>
);
