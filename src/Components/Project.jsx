import gambar1 from "../assets/Image/idc.png";
import gambar2 from "../assets/Image/poster.png";

const Project = () => {
    return (
        <div className="h-screen flex flex-col justify-start ml-14 mt-20">
            <div className="text-5xl text-white italic font-bold mb-8">
                <h1 className="text-left ml-14">PROJECT</h1>
                <div className="mt-5 w-32 h-1 bg-yellow-200 justify-start rounded mr-auto ml-14"></div>
                <div className="flex justify-around mt-10 gap-5">
                    
                    {/* Gambar 1 */}
                    <div className="w-72">
                        <div className="relative w-72 h-96 rounded-xl overflow-hidden">
                            <img src={gambar1} alt="" className="object-cover w-full h-full" />
                            <div
                                style={{
                                    background: "linear-gradient(to top, rgb(23, 37, 84), transparent, transparent)",
                                }}
                                className="absolute inset-0"
                            ></div>
                        </div>
                        <h1 className="text-white text-2xl italic text-center">
                            ID Card
                        </h1>
                    </div>

                    {/* Gambar 2 */}
                    <div className="w-72">
                        <div className="relative w-72 h-96 rounded-xl overflow-hidden">
                            <img src={gambar2} alt="" className="object-cover w-full h-full" />
                            <div
                                style={{
                                    background: "linear-gradient(to top, rgb(23, 37, 84), transparent, transparent)",
                                }}
                                className="absolute inset-0"
                            ></div>
                        </div>
                        <h1 className="text-white text-2xl italic text-center">
                            Poster
                        </h1>
                    </div>

                    {/* Gambar 3 */}
                    <div className="w-72">
                        <div className="relative w-72 h-96 rounded-xl overflow-hidden">
                            <img src={gambar1} alt="" className="object-cover w-full h-full" />
                            <div
                                style={{
                                    background: "linear-gradient(to top, rgb(23, 37, 84), transparent, transparent)",
                                }}
                                className="absolute inset-0"
                            ></div>
                        </div>
                        <h1 className="text-white text-2xl italic text-center">
                            Banner
                        </h1>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Project;
