import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../utils/styles";

const Header = () => {
  const [theme, setTheme] = useState("light");

  // * if local storage is empty save theme as light
  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "light");
    }
  }, []);

  useEffect(() => {
    // * select html element
    const html = document.querySelector("html");
    if (localStorage.getItem("theme") === "dark") {
      html.classList.add("dark");
      setTheme("dark");
    } else {
      html.classList.remove("dark");
      setTheme("light");
    }
  }, [theme]);

  // * handle switch theme
  const handleThemeSwitch = () => {
    if (localStorage.getItem("theme") === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="header w-full sticky top-0 z-[99] dark:bg-darkBlue shadow-md">
      <div className="container mx-auto p-7">
        <div className={`${styles.flexBetween}`}>
          <Link to={"/"} className="font-nunitoSans font-bold text-2xl">
            Where in the world?
          </Link>
          <button
            onClick={handleThemeSwitch}
            className="text-xl w-8 h-8 rounded-full leading-9"
          >
            {theme === "light" ? (
              <ion-icon name="moon"></ion-icon>
            ) : (
              <ion-icon name="sunny"></ion-icon>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
