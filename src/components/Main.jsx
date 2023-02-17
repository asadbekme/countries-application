import { useEffect, useState } from "react";
import { apiURL } from "../utils/api";

const Main = () => {
  const [countries, setCountries] = useState([]);

  const getAllCountries = async () => {
    try {
      const response = await fetch(`${apiURL}/all`);
      const data = await response.json();
      console.log(data);
      setCountries(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <main className="main w-full mt-5">
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
        <div className="grid grid-cols-4 gap-8 countries my-10">
          {countries.map((country, idx) => {
            return (
              <div className="country" key={idx}>
                <div className="country__image w-[280px] h-[200px]">
                  <img
                    src={country.flags.png}
                    alt={country.flags.alt}
                    className="w-[100%] h-[100%] object-cover"
                  />
                </div>
                <div className="country__info">
                  <h1 className="country__name">{country.name.official}</h1>
                  <h4 className="country__population">{country.population}</h4>
                  <h4 className="country__region">{country.region}</h4>
                  <h4 className="country__capital">{country.capital}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Main;
