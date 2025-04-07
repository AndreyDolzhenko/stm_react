import { useState } from "react";

import { arrProductSTM, name } from "../../assets/jsFiles/stmDescription.jsx";

const randomNumber = (min, max) => {
    min = Math.ceil(min); // округляем до ближайшего большего целого
    max = Math.floor(max); // округляем до ближайшего меньшего целого
    return Math.floor(Math.random() * (max - min + 1)) + min; // генерируем случайное целое число
}

const nextChoice = (arrProductSTM) => {
    let nextChoice = arrProductSTM[randomNumber(0, arrProductSTM.length-1)].status;
    if (nextChoice.status) {
        
    }
    console.log(arrProductSTM[randomNumber(0, arrProductSTM.length-1)].status);    
}

const GameField = () => {
  const [productItem, setProductItem] = useState("Старт!");
  const [productList, setProductList] = useState();

  return (
    <>
      <h1
        onClick={() =>
            nextChoice(arrProductSTM)
        //   setProductItem(
        //     arrProductSTM.map((el, index) => <li key={index}>{el.brand}</li>)
        //   )
        }
      >
        {productItem}
      </h1>
      
    </>
  );
};

export default GameField;
