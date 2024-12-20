import gambar1 from "../assets/Image/exp2.jpg"


const Experience = () => {
    return (
        <div className="h-screen flex flex-col justify-start ml-14 mt-20">
            <div className="text-5xl text-white italic font-bold mb-8">
                <h1 className="text-right mr-14">EXPERIENCE</h1>
                <div className="mt-5 w-32 h-1 bg-yellow-200 justify-start rounded ml-auto mr-14"></div>
                <div className="flex justify-around mt-10">
                <div
                        className=" w-72 h-96 rounded-xl flex flex-col " >
                            <img src= {gambar1} alt="" className="object-cover h-72 rounded-t-xl"/>
                        <h1 className="bg-white w-72 rounded-b-xl p-8 text-black text-xs italic self-end mx-auto">
                            Vice Chairman 'MPK' Senior High School 2 Pemalang
                        </h1>
                    </div>
                    <div
                        className=" w-72 h-96 rounded-xl flex flex-col " >
                            <img src= {gambar1} alt="" className="object-cover h-72 rounded-t-xl"/>
                        <h1 className="bg-white w-72 rounded-b-xl p-8 text-black text-xs italic self-end mx-auto">
                            Vice Chairman 'MPK' Senior High School 2 Pemalang
                        </h1>
                    </div>
                    <div
                        className=" w-72 h-96 rounded-xl flex flex-col " >
                            <img src= {gambar1} alt="" className="object-cover h-72 rounded-t-xl"/>
                        <h1 className="bg-white w-72 rounded-b-xl p-8 text-black text-xs italic self-end mx-auto">
                            Vice Chairman 'MPK' Senior High School 2 Pemalang
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
