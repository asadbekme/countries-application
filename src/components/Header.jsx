import { Link } from "react-router-dom";
import { options } from "../utils/options";
import { styles } from "../utils/styles";

const Header = () => {
  return (
    <header className="header sticky top-0 z-[99]">
      <div className="container mx-auto p-4">
        <div className={`${styles.flexBetween}`}>
          <Link to={"/"}>Where in the world?</Link>
          <div>
            {options?.map((option) => (
              <button
                key={option.text}
                className="w-8 h-8 leading-9 text-xl rounded-full m-1 text-sky-700"
              >
                <ion-icon name={option.icon}></ion-icon>
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
