import { useEffect, useState } from "react";
import { apiURL } from "../utils/api";
import { CountryItem } from "./";

const Main = () => {
  const [countries, setCountries] = useState([]);

  const getAllCountries = async () => {
    try {
      const response = await fetch(`${apiURL}/all`);
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <main className="main w-full mt-5 min-h-[100vh]">
      <div className="container mx-auto p-7">
        <div className="flex flex-col md:flex-row md:justify-between">
          <input
            type="search"
            id="search"
            className="md:w-[34%] w-full p-3 text-[16px] border rounded-[5px] outline-none dark:bg-darkBlue border-white dark:border-darkModeBg shadow-md"
            placeholder="Search for a country"
          />
          <select
            id="countries"
            className="md:w-[18%] w-[35%] md:mt-0 mt-5 border text-[16px] rounded-md p-3 border-white dark:border-darkModeBg dark:bg-darkBlue shadow-md"
          >
            <option selected>Filter by Region</option>
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
        <div className="countries grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-10">
          {countries.map((country, index) => {
            return <CountryItem key={index} country={country} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default Main;
