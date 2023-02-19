import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { apiURL } from "../utils/api";
import { styles } from "../utils/styles";

const CountryDetail = () => {
  const [countryDetail, setCountryDetail] = useState(null);
  const { slug } = useParams();
  console.log(slug);

  const getCountryDetail = async () => {
    try {
      const response = await fetch(`${apiURL}/name/${slug}`);
      const data = await response.json();
      setCountryDetail(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountryDetail();
  }, [slug]);

  console.log(countryDetail);

  return (
    <section className="country__detail min-h-[100vh] mt-3">
      <div className="container mx-auto p-7">
        <Link to={"/"}>
          <button
            type="button"
            className="focus:outline-none dark:bg-darkBlue border-white dark:border-darkModeBg font-medium rounded-md text-sm px-6 py-3 mb-8 shadow-md"
          >
            <span className="mr-2">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </span>
            Back
          </button>
        </Link>
        <div className="flex items-center justify-between gap-5">
          <div className="country__flag flex-1">
            <img
              src={countryDetail?.flags?.svg}
              alt={countryDetail?.flags?.alt}
            />
          </div>
          <div className="country__informatin flex-1">
            <h2>{countryDetail?.name?.common}</h2>
            <div className={`${styles.flexBetween}`}>
              <div>
                <h5>
                  <b>Native Name: </b>
                  {countryDetail?.name?.official}
                </h5>
                <h5>
                  <b>Population: </b>
                  {countryDetail?.population}
                </h5>
                <h5>
                  <b>Region: </b>
                  {countryDetail?.region}
                </h5>
                <h5>
                  <b>Sub Region: </b>
                  {countryDetail?.subregion}
                </h5>
                <h5>
                  <b>Capital: </b>
                  {countryDetail?.capital}
                </h5>
              </div>
              <div>
                <div>
                  <b>Top Level Domain: </b>
                  {countryDetail?.tld?.map((d) => (
                    <span key={d}>{d}</span>
                  ))}
                </div>
                <div>
                  <b>Currencies: </b>
                  {/* {countryDetail?.currencies.map((c) => (
                    <span key={c.code}>
                      {c.name} {c.symbol}
                    </span>
                  ))} */}
                </div>
                <div>
                  <b>Languages: </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryDetail;
