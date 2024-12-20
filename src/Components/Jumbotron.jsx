import React from "react";

const Jumbotron = () => {
    return (
        <div
            className="h-screen bg-cover bg-center flex flex-col justify-center items-center relative"
            style={{
                backgroundImage: "url('src/assets/Image/Jumbotron.jpg')",
            }}
            id="home"
        >
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center">
                <h1 className="text-3xl text-white text-center mt-24 italic">I'm Inas Salwa</h1>
                <h2 className="text-xl text-sky-300 text-center mt-3 font-thin font-mono">System Information Student</h2>
            </div>
        </div>
    );
};

export default Jumbotron;
