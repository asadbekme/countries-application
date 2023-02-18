import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiURL } from "../utils/api";

const CountryDetail = () => {
  const { slug } = useParams();
  console.log(slug);

  const getCountryDetail = async () => {
    try {
      const response = await fetch(`${apiURL}/name/${slug}`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCountryDetail();
  }, [slug]);

  return <div>CountryDetail</div>;
};

export default CountryDetail;
