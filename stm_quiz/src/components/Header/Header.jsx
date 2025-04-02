import classes from "./Header.module.scss";

import Inputs from "../smallComponents/Inputs";
import Logo from "../../assets/images/logoUMC.png";

const Header = () => {
  return (
    <header>
      <img style={{ width: "20%" }} src={Logo} />
      <Inputs />
    </header>
  );
};

export default Header;
