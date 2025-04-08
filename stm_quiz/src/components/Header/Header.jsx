import { useState } from "react";

import classes from "./Header.module.scss";

import Inputs from "../smallComponents/Inputs";
import Logo from "../../assets/images/logoUMC.png";

function timer(timeTest) {
  timeScroll.style.display = "block"; // Показывем таймер.
  timeScroll.innerHTML = `${Math.trunc(timeTest / 3600)} ч. ${Math.trunc(
    timeTest / 60
  )} м. ${timeTest > 59 ? timeTest % 60 : timeTest} сек.`;
  intervalId = setInterval(() => {
    timeTest -= 1;
    timeSpent = timeTest;
    if (timeTest > 0) {
      timeScroll.innerHTML = `${Math.trunc(timeTest / 3600)} ч. ${Math.trunc(
        timeTest / 60
      )} м. ${timeTest > 59 ? timeTest % 60 : timeTest} сек.`;
    } else {
      clearInterval(intervalId); // Останавливаем таймер.
      itog("Время вышло!");
      // choiseResult.price ? document.getElementById("counterAnswer").innerText = 100: false;
    }
  }, 1000);
}

const timeCount = (timeValue) => {
  
  return (
  `${Math.trunc(timeValue / 3600)} ч. ${Math.trunc(
    timeValue / 60
  )} м. ${timeValue > 59 ? timeValue % 60 : timeValue} сек.`)
}



const Header = () => {

  const [timeShow, setTimeShow] = useState(<Inputs props = {{value : 20}}/>);

  return (
    <header>
      <img style={{ width: "20%" }} src={Logo} onClick={() => setTimeShow(timeCount(timeShow.value))}/>
      <Inputs />
      <div>{timeShow}</div>
    </header>
  );
};

export default Header;
