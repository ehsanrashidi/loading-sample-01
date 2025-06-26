import React from "react";
import { Loading } from "./components/loading";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
    return (
        <div className="container">
            <Header title="Loading Sample 01" />
            <div className="content">
                <Loading />
            </div>
            <Footer />
        </div>
    );
}

export default App;
