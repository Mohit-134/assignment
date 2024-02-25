import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import { FiInfo } from "react-icons/fi";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { IoTrophyOutline } from "react-icons/io5";
import image1 from "./images/img1.jpg";
import { FaChevronDown } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import SecondHalf from "./SecondHalf";


const Body = () => {
  return (
    <div className=" flex justify-around items-center bg-gray-50">
      <div className=" w-6/12  ">
        <h1 className="text-6xl mt-0 pb-8 border-b-2">
          Best Website builders in the US
        </h1>

        <p className="flex items-center">
          <span className="flex items-center gap-5 text-gray-500">
            <BsCheckCircle className="h-10" /> Last Updated - February 20,2022{" "}
            <FiInfo className="h-12 text-gray-500" /> Advertising Disclosure{" "}
          </span>
        </p>
        <ul className="flex justify-between items-center gap-10 text-gray-500">
          <li className="flex justify-center bg-white rounded-lg min-w-32 ">
            Tools
          </li>
          <li className="flex justify-center bg-white rounded-lg min-w-32">
            Aws Builder
          </li>
          <li className="flex justify-center bg-white rounded-lg min-w-32">
            Start Build
          </li>
          <li className="flex justify-center bg-white rounded-lg min-w-32">
            Build Supplies
          </li>
          <li className="flex justify-center bg-white rounded-lg min-w-32">
            Tooling
          </li>
          <li className="flex justify-center bg-white rounded-lg min-w-32">
            Blue Hosting
          </li>
        </ul>
        <p className="text-gray-500 flex items-center gap-5 py-5">
          Home <LiaGreaterThanSolid /> Hosting For All <LiaGreaterThanSolid />{" "}
          Hosting6 <LiaGreaterThanSolid /> Hosting 5
        </p>
        <div className="bg-white mb-5 h-auto w-auto flex flex-col justify-center py-5">
          <span className="w-[15%] flex rounded-tr-lg rounded-br-lg text-white items-center gap-2 bg-orange-600">
            <IoTrophyOutline /> Best Choice
          </span>

          <div className=" flex pb-7 ">
            <div className=" flex-col h-40 items-centers w-56">
              <div className="ml-[-7px] rounded-full w-7 p-1 bg-white  ">
                1
              </div>
              <div className="flex flex-col justify-center items-center">
              <img
                src={image1}
                alt="image 1"
               
              />
              <p className="text-gray-500">Builder 1</p>
              </div>
            </div>
            <div className="w-6/12">
              <p>
                <span className="font-bold">
                  WixPro 72-Inch Website Builder
                </span>{" "}
                - Comprehensive Digital Platfrom Creation tool, Streamlined
                Design Interface for Professional Websites and online
                Stores(Black/Blue)
              </p>
              <h2 className="font-bold my-3">Main HighLights</h2>
              <p className="ml-5">
                [What You Get]: Receive the WixPro website builder suite, access
                to premium design templates, an extensive library of widgets and
                apps, and detailed step-by-step guides.
              </p>
              <p className=" flex items-center gap-2 my-3 text-blue-400  h-2 my-2">
                {" "}
                Show More <FaChevronDown />
              </p>
            </div>

            <div className="bg-blue-50 h-[100px] w-2/12 mt-[-45px] rounded-b-lg flex flex-col items-center  ">
              <h1 className="text-4xl">9.8</h1>
              <p>Exceptional</p>
              <p>⭐⭐⭐⭐⭐</p>
              <button className="bg-blue-500  py-2 px-16 text-white  justify-between items-center mt-36 rounded-lg">
                View
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white mb-5 h-auto w-auto flex flex-col justify-center py-5">
          <span className="w-[15%] flex rounded-tr-lg rounded-br-lg text-white items-center gap-2 bg-orange-600">
            <IoTrophyOutline /> Best Value
          </span>

          <div className=" flex pb-7 ">
            <div className=" flex-col h-40 items-centers w-56">
              <div className="ml-[-7px] rounded-full w-7 p-1 bg-white  ">
                2
              </div>
              <div className="flex flex-col justify-center items-center">
              <img
                src={image1}
                alt="image 1"
               
              />
              <p className="text-gray-500">Builder 1</p>
              </div>
            </div>
            <div className="w-6/12">
              <p>
                <span className="font-bold">
                  SiteCraft 68-Inch Ultimate Web Design Studio
                </span>{" "}
                - Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor
                for Dynamic Websites and E-commerce Platforms (Green/White)
              </p>
              <h2 className="font-bold my-3">Main HighLights</h2>
              <p className="ml-5">
                [What You Get]: Gain access to the SiteCraft design studio,
                featuring a robust selection of design elements, SEO
                optimization tools, and e-commerce integrations.
              </p>
              <p className=" flex items-center gap-2 my-3 text-blue-400  h-2 my-2">
                {" "}
                Show More <FaChevronDown />
              </p>
            </div>

            <div className="bg-blue-50 h-[100px] w-2/12 mt-[-45px] rounded-b-lg flex flex-col items-center  ">
              <h1 className="text-4xl">9.5</h1>
              <p>Excellent</p>
              <p>⭐⭐⭐⭐⭐</p>
              <button className="bg-blue-500  py-2 px-16 text-white  justify-between items-center mt-36 rounded-lg">
                View
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white mb-5 h-auto w-auto flex flex-col justify-center py-5">
          
          <div className=" flex pb-7 ">
            <div className=" flex-col h-40 items-centers w-56">
              <div className="ml-[-7px] rounded-full w-7 p-1 bg-white  ">
                3
              </div>
              <div className="flex flex-col justify-center items-center">
              <img
                src={image1}
                alt="image 1"
               
              />
              <p className="text-gray-500">Builder 1</p>
              </div>
            </div>
            <div className="w-6/12">
              <p>
                <span className="font-bold">
                  SiteCraft 68-Inch Ultimate Web Design Studio
                </span>{" "}
                - Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor
                for Dynamic Websites and E-commerce Platforms (Green/White)
              </p>
              <h2 className="font-bold my-3">Main HighLights</h2>
              <p className="ml-5">
                [What You Get]: Receive the WixPro website builder suite, access
                to premium design templates, an extensive library of widgets and
                apps, and detailed step-by-step guides.
              </p>
              <p className=" flex items-center gap-2 my-3 text-blue-400  h-2 my-2">
                {" "}
                Show More <FaChevronDown />
              </p>
            </div>

            <div className="bg-blue-50 h-[100px] w-2/12 mt-[-45px] rounded-b-lg flex flex-col items-center  ">
              <h1 className="text-4xl">9.3</h1>
              <p>Exceptional</p>
              <p>⭐⭐⭐⭐⭐</p>
              <button className="bg-blue-500  py-2 px-16 text-white  justify-between items-center mt-36 rounded-lg">
                View
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white mb-5 h-auto w-auto flex flex-col justify-center py-5">

        <div className=" flex pb-7 ">
            <div className=" flex-col h-40 items-centers w-56">
              <div className="ml-[-7px] rounded-full w-7 p-1 bg-white  ">
                4
              </div>
              <div className="flex flex-col justify-center items-center">
              <img
                src={image1}
                alt="image 1"
               
              />
              <p className="text-gray-500">Builder 1</p>
              </div>
            </div>
            <div className="w-6/12">
              <p>
                <span className="font-bold">CDK Resposive Builder:</span> - An
                extensive library of widgets and apps, and detailed step-by-step
                guides
              </p>
              <h2 className="font-bold my-3">Main HighLights</h2>
              <div className="bg-orange-50">
                <ul>
                  <li>
                    {" "}
                    <span className="text-blue-600 m-2">9.9</span>Build
                    Responsive
                  </li>
                  <li>
                    <span className="text-blue-600 m-2">8.9</span> cool
                  </li>
                  <li>
                    <span className="text-blue-600 m-2">8.9</span> Docs
                  </li>
                </ul>
              </div>

              <div className="">
                <h1 className="m-2">Why we Love it</h1>
                <ul className="flex flex-col ">
                  <li className="flex items-center m-2 px-2">
                    {" "}
                    <span className="text-blue-400">
                      <FaRegCheckCircle />
                    </span>{" "}
                    Documentation{" "}
                  </li>
                  <li className="flex items-center m-2 px-2">
                    {" "}
                    <span className="text-blue-400">
                      <FaRegCheckCircle />
                    </span>{" "}
                    Easy Use
                  </li>
                  <li className="flex items-center m-2 px-2">
                    {" "}
                    <span className="text-blue-400">
                      <FaRegCheckCircle />
                    </span>{" "}
                    Out Of Box
                  </li>
                </ul>
              </div>
              <p className=" flex items-center gap-2 my-3 text-blue-400  h-2 my-2">
                {" "}
                Show More <FaChevronDown />
              </p>
            </div>

            <div className="bg-blue-50 h-[100px] w-2/12 mt-[-15px] rounded-b-lg flex flex-col items-center  justify-center">
              <h1 className="text-4xl mt-[155px]">9.1</h1>
              <p>Very Good</p>
              <p>⭐⭐⭐⭐⭐</p>
              <button className="bg-blue-500  py-2 px-16 text-white  justify-between items-center mt-36 rounded-lg">
                View
              </button>
            </div>
          </div>


        
        </div>
        <div className="my-5 mx-auto ">
          <h1 className="text-4xl pb-10">Related deals you might like for</h1>
        </div>
        <SecondHalf/>
      </div>
    </div>
  );
};

export default Body;
