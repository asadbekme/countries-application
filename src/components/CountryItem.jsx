import { Link } from "react-router-dom";

const CountryItem = ({ country }) => {
  return (
    <Link to={`country/${country.name.common}`}>
      <div className="country bg-white dark:bg-darkBlue rounded-md shadow-md">
        <div className="country__image w-full h-[200px] rounded-md">
          <img
            src={country.flags.png}
            alt={country.flags.alt}
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
        <div className="country__info p-5">
          <h1 className="country__name font-bold text-[18px] mb-3">
            {country.name.common}
          </h1>
          <h4 className="country__population">
            <span className="text-[16px] font-semibold">Population:</span>{" "}
            {country.population}
          </h4>
          <h4 className="country__region">
            <span className="text-[16px] font-semibold">Region:</span>{" "}
            {country.region}
          </h4>
          <h4 className="country__capital">
            <span className="text-[16px] font-semibold">Capital:</span>{" "}
            {country.capital}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default CountryItem;
