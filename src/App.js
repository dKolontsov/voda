import React from "react";
import './App.scss';
import Header from "./components/Header/Header";
import Main from "./components/main/Main";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <Main/>
        </div>
    );
}
export default App;
