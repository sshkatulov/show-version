import React from "react";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {`Version: ${process.env.REACT_APP_VERSION ?? "0.0.0"}`}
            </header>
        </div>
    );
}

export default App;
