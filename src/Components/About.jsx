const About = () => {
    return (
        <>
        <div className="h-screen bg-rgb(21, 21, 82) flex items-start justify-center mt-14" id="about">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 px-8">

                <img
                    src="src/assets/Image/About.jpg" 
                    alt="Profile"
                    className="w-40 h-40 md:w-64 md:h-64 rounded-full object-cover shadow-lg mt-10"
                />
                <div className="text-white">
                    <h1 className="text-blue-300 text-5xl italic font-medium text-center md:text-left mb-4">
                        About Me!
                    </h1>
                    <div className="w-24 h-1 bg-yellow-200 mb-4"></div>
                    <p className="italic font-thin text-ms text-justify">
                        Hi! My Name is Inas Salwa. I am a first-year student in the Information Systems program 
                        at Universitas Dian Nuswantoro. I am a graduate of senior high school 2 Pemalang.
                    </p>
                    <p className="italic font-thin text-ms text-justify mt-4">
                        I have basic computing skills that I learned self-taught since the age of 7, which have given me
                        expertise in content editing and poster design. I also have an interest in the fields of computing 
                        and business.
                    </p>

                <div className="border mt-5 p-4 rounded-md">
                    <div className="flex flex-col items-start">
                    <p className="text-white text-lg font-thin">Name : Inas Salwa Nuraini</p>
                    <p className="text-white text-lg font-thin">Age : 19</p>
                    <p className="text-white text-lg font-thin">Phone: +6282328665788</p>
                    <p className="text-white text-lg font-thin">Address: Semarang, Central Java</p>
                    <p className="text-white text-lg font-thin">Instagram: @inassalwaa</p>
                    <p className="text-white text-lg font-thin">Education : Dian Nuswantoro University</p>
                </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About;
