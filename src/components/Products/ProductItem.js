import React, { useContext } from "react";
import { useStore } from "../../hooks-store/store";

// import { ProductsContext } from "../../context/products-context";
// import { useDispatch } from 'react-redux';

import Card from "../UI/Card";
import "./ProductItem.css";
// import { toggleFav } from "../../store/actions/products";
// import productsContext from "../../context/products-context";

const ProductItem = React.memo((props) => {
  console.log("rendering");
  // const dispatch = useDispatch();
  // const { toggleFav } = useContext(ProductsContext);
  const dispatch = useStore(false)[1];

  const toggleFavHandler = () => {
    // toggleFav(props.id);
    //find dispatch action TOGGLE_FAVE with was initialied in intiStore(actions, produsct
    //it MERGED to global actions
    //arguemtns are the ACTIO IDENTIFIER and the PAYLOAD productId
    dispatch("TOGGLE_FAV", props.id);
  };

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="product-item">
        <h2 className={props.isFav ? "is-fav" : ""}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? "button-outline" : ""}
          onClick={toggleFavHandler}
        >
          {props.isFav ? "Un-Favorite" : "Favorite"}
        </button>
      </div>
    </Card>
  );
});

export default ProductItem;
