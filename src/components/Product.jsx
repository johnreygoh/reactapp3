import { useContext } from "react";
import { cartContext } from "../App";

function Product() {

    const { addCart } = useContext(cartContext);

    return (
        <div>
            <h3>Shoes</h3>
            <button onClick={addCart}>Add to Cart</button>
        </div>
    );
}

export default Product;