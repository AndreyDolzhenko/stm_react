import { useState } from "react";

import { arrProductSTM, name } from "../../assets/jsFiles/stmDescription.jsx";

// 
const randomNumber = (min, max) => {
  min = Math.ceil(min); // округляем до ближайшего большего целого
  max = Math.floor(max); // округляем до ближайшего меньшего целого
  return Math.floor(Math.random() * (max - min + 1)) + min; // генерируем случайное целое число
};

// Функция выводит очередной элемент и проверяет, чтобы он ранее не предъявлялся
const nextChoice = (arrProductSTM) => {
  let nextChoice = randomNumber(0, arrProductSTM.length - 1);

  // Функция summ считает количество неотработанных элементов массива с СТМ
  const summ = () => {
    let accum = 0;
    arrProductSTM.map((el) => {
      el.status == "false" ? (accum += 1) : true;
      return accum;
    });

    return accum;
  };

  // Проверяем элементы на то, чтобы они не предъявлялись ранее

  if (summ() == 0) {
    alert("Все варианты предъявлены!");
  } else {
    switch (arrProductSTM[nextChoice].status) {
      case "true":
        arrProductSTM.map((el, index) => {
          el.status == "false" ? (nextChoice = index) : true;
        });
        arrProductSTM[nextChoice].status = "true";
        console.log(arrProductSTM[nextChoice]);
        break;

      case "false":
        arrProductSTM[nextChoice].status = "true";
        console.log(arrProductSTM[nextChoice]);
        break;

      default:
        break;
    }
  }

  return summ();
};

const GameField = () => {
  const [productItem, setProductItem] = useState("Старт!");
  const [productList, setProductList] = useState();

  return (
    <>
      <h1
        onClick={
          () => setProductItem(nextChoice(arrProductSTM))          
        }
      >
        {productItem}
      </h1>
    </>
  );
};

export default GameField;
