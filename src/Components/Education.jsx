import React from 'react';

const Education = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-5xl text-white italic font-bold mb-8">
        <h1>EDUCATION</h1>
        <h1>BACKGROUND</h1>
      <div className="mt-5 w-32 h-1 bg-yellow-200 rounded mx-auto"></div>
      </div>
      
      <div className="flex flex-wrap justify-center gap-16 mb-10">
      <div className="border border-yellow-300 mt-3 p-4 rounded-full hover:bg-blue-300/50">
          <p className="text-white italic text-center mt-1">Junior High School 2 Pemalang</p>
        </div>
      <div className="border border-yellow-300 mt-3 p-4 rounded-full hover:bg-blue-300/50">
          <p className="text-white italic text-center mt-1">Senior High School 2 Pemalang</p>
        </div>
      <div className="border border-yellow-300 mt-3 p-4 rounded-full hover:bg-blue-300/50">
          <p className="text-white italic text-center mt-1">Dian Nuswantoro University</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
