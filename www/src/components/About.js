import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import HotLink3Img from './portImages/hotlink3.jpg';
import QuiltedImageList from "./Aboutimages";

const About = () => {
  return (
    <>
      <div className="text-center sm:text-start sm:ml-[6px]">
        <h1 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-montserrat font-medium text-[black] mt-6">
          About Us
        </h1>
        <div className="bg-[#0B3D2C] h-[8px] mt-[-3px] rounded w-[30%] sm:w-[15%] md:w-[13%] mx-auto sm:ml-0"></div>

      </div>


      <div className="w-full flex mt-8 justify-center items-center flex-col md:flex-row">
        {/* Hidden on small and medium screens */}
        <div className="hidden lg:block w-2/2 mr-[70px] sm:hidden md:hidden">
          <QuiltedImageList />
        </div>
        <div className="w-full md:w-1.5/2 text-start px-4 ">
          <p className="leading-7 font-sans text-[14px] text-justify">
            Our Saviour Community Garden (OSCG) is a ministry of The Episcopal Church of Our
            Saviour, 1616 N. Jim Miller Rd, Dallas, TX 75217. First planted in 2003 with the help of
            Gardeners in Community Development (GICD), it started as a way for the church to give
            back to the community, addressing food security needs and by giving families a place to
            organically grow vegetables and by growing an urban farm and orchards for food pantry
            donations. Our Pleasant Grove Food Pantry serves 350 to 400 families each week.
          </p>
          <p className="leading-7 font-sans text-[14px] text-justify">
            Our clients: 40% of families living within 1 mile of the church have an annual household income of less than $25,000.
          </p>
          <p className="leading-7 font-montssanserrat text-[14px] text-justify">
            1 in 4 children in Pleasant Grove go hungry each day.
          </p>
          <p className="leading-7 font-sans text-[14px] text-justify">
            40% of the seniors in the neighborhood must choose between paying for food or paying for medical bills (statistics from the Pleasant Grove Food Pantry).
          </p>
          <p className="leading-7 font-sans text-[14px] text-justify">
            OSCG provides an outlet for the community to be good stewards of the earth, to pass along these gifts, and to plant seeds of hope and faith.
          </p>
          <p className="leading-7 font-sans text-[14px] text-justify">
            With the help of volunteers and volunteer groups, over the last 20 years the garden has impacted thousands of lives, produced tons of vegetables, donating over 100,000 pounds (50 tons) to feed the hungry, and has taught gardening techniques to hundreds of interested individuals and organizations.
          </p>
          <p className="leading-7 font-sans text-[14px] text-justify">
            The garden is designated by the National Episcopal Church as a Jubilee Ministry for Domestic Poverty.
          </p>
          <p className="leading-7 font-sans text-[14px] text-justify">
            OSCG is a North Texas Food Bank Partner Garden. Our Saviour Garden has blossomed into a GICD teaching garden, The Center for Growing People.
          </p>
          <p className="leading-7 font-sans text-[14px] text-justify">
            School children, Science Clubs, Home Schoolers, and Vacation Bible Schools have extended their classrooms to the garden. Boy and Girl Scouts have helped harvest, built beds and a water catchment system as a part of their service badge requirements.
          </p>
          <p className="leading-7 font-sans text-[14px] text-justify">
            Special Needs classes from DISD High Schools and the Multiple Careers Magnet Charter help in the garden or greenhouse each week as part of their Workplace Learning Experiences.
          </p>
          <p className="leading-7 font-sans text-[14px] text-justify">
            OSCG is an Alternative College Break destination and source for required volunteer hours for students and staff in the field of health care. We are humbled and honored to be currently a Community Partner with the SMU Boaz Commons Students through the Engage Dallas program 2022-2023, 2023-2024 and 2024-2025. These students volunteer to do urban farm chores to help grow vegetables and have currently been helping plant more fruit orchards for pantry donations.
          </p>
          <p className="leading-7 font-sans text-[14px] text-justify">
            Corporations' staffs, church groups, and organizations have volunteered their time while learning sustainable organic growing techniques. Classes are also held on canning, seed saving, composting, vermiculture, starting a community garden, etc.
          </p>
          <p className="leading-7 font-sans text-[14px] text-justify ">
            <strong>Our Saviour Community Gardens “Plots Against Hunger” and “Grows Just Greens".</strong>
          </p>
        </div>
      </div>

      <div className="w-full mt-[80px]">
        <div className="text-center sm:text-start sm:ml-[6px]">
          <h1 className="text-[40px] font-montserrat font-medium text-[black]">HotLink</h1>
          <div className="bg-[#0B3D2C] h-[8px] mt-[-3px] rounded w-[30%] sm:w-[11%] mx-auto sm:ml-0"></div>
        </div>
        <div className="flex flex-col sm:flex-row justify-around items-center mt-[30px] mb-[40px] ">
          <div className="relative w-full h-[300px] mr-0 sm:mr-5 mb-5 sm:mb-0 rounded-md overflow-hidden group">
            <img
              alt="12"
              src="https://static.vecteezy.com/system/resources/thumbnails/004/754/003/small/how-to-grow-vegetables-plant-agriculture-dig-into-soil-the-vegetable-garden-cultivation-and-separate-the-early-growth-chinese-cabbage-photo.jpg"
              className="w-full h-full object-cover"
            />
            <a
              href="https://faithandleadership.com/growing-relevance"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-0 left-0 right-0 top-[15px] bg-[#0B3D2C] bg-opacity-90 flex justify-center items-center text-white text-[15px] font-bold font-montserrat transition-transform duration-500 transform translate-y-full group-hover:translate-y-0 rounded"
            >
              <span className="flex justify-center items-center"><FaPaperPlane className="mr-2" /> Visit Link</span>
            </a>
          </div>
          <div className="relative w-full h-[300px] mb-5 sm:mr-5 sm:mb-0 rounded-md overflow-hidden group">
            <img
              alt="34"
              src="https://greengoddess.com/wp-content/uploads/2017/05/vegetablegarden.jpg"
              className="w-full h-full object-cover"
            />
            <a
              href="https://ntfb.org/blog-partner-garden-oscg/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-0 left-0 right-0 top-[15px] bg-[#0B3D2C] bg-opacity-90 flex justify-center items-center text-white text-[15px] font-bold font-montserrat transition-transform duration-500 transform translate-y-full group-hover:translate-y-0 rounded"
            >
              <span className="flex justify-center items-center"><FaPaperPlane className="mr-2" /> Visit Link</span>
            </a>
          </div>
          <div className="relative w-full h-[300px] mb-5 sm:mb-0 rounded-md overflow-hidden group">
            <img
              alt="56"
              src={HotLink3Img}
              className="w-full h-full object-cover"
            />
            <a
              href="https://www.baylor.edu/content/services/document.php/105269.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-0 left-0 right-0 top-[15px] bg-[#0B3D2C] bg-opacity-90 flex justify-center items-center text-white text-[15px] font-bold font-montserrat transition-transform duration-500 transform translate-y-full group-hover:translate-y-0 rounded"
            >
              <span className="flex justify-center items-center"><FaPaperPlane className="mr-2" /> Visit Link</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;