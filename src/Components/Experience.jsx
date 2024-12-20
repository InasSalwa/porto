const Experience = () => {
    return (
        <div className="h-screen flex flex-col justify-start ml-14 mt-20">
            <div className="text-5xl text-white italic font-bold text-blue-300 mb-8">
                <h1>EXPERIENCE</h1>
                <div className="mt-5 w-32 h-1 bg-yellow-200 justify-start rounded"></div>
                <div className="flex justify-around mt-10">
                    <div
                        className="w-72 h-96 bg-blue-300 rounded-xl flex flex-col justify-end" 
                        style={{ backgroundImage: "url('src/assets/Image/exp01.jpg')" }}>
                        <h1 className="bg-white w-72 rounded-xl p-10 text-black text-2l italic self-end">
                            Hallo
                        </h1>
                    </div>
                    <div
                        className="w-72 h-96 rounded-xl flex flex-col justify-end" 
                        style={{ backgroundImage: "url('src/assets/Image/exp02.jpg')" }}>
                        <h1 className="bg-white w-72 rounded-xl p-10 text-black text-2l italic self-end">
                            Hallo
                        </h1>
                    </div>
                    <div
                        className="w-72 h-96 rounded-xl flex flex-col justify-end" 
                        style={{ backgroundImage: "url('src/assets/Image/exp02.jpg')" }}>
                        <h1 className="bg-white w-72 rounded-xl p-10 text-black text-2l italic self-end">
                            Hallo
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
