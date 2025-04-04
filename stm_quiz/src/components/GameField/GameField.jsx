
import { useState } from "react";

import { arrProductSTM, name } from "../../assets/jsFiles/stmDescription.jsx";

const GameField = () => {

    const [productItem, setProductItem] = useState();
    const [productList, setProductList] = useState();

    return (
        <>
        <h1>Hi</h1>
            <h1 onClick = {() => arrProductSTM.map((el, index) => setProductItem(<li id={index}>{el.brand}</li>))}>Hello</h1>
            <ol onClick={() => console.log(productItem)}>{productItem}</ol>
        </>
    )
}

export default GameField;
