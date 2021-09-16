import React from "react";
import { useStateValue } from "../stateProvider/StateProvider";
import styled from "styled-components";
function ProductDetails() {
const [{ cart, detail }, dispatch] = useStateValue();


  const addToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };
  return (
    <div>
      {detail.map((product) => (  // I map detail array
        <ProductDetail>
          <img className="details_image" src={product.image} alt={product.title}/>

          <ProductDetailInfo>
            <h3>{product.title}</h3>
            <p className="details_price">     / I render img, price, description..
              <small>$</small>
              <strong>{product.price}</strong>
            </p>
            <h3>{product.category}</h3>
            <p className="details_title">{product.description}</p>

            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </ProductDetailInfo>
        </ProductDetail>
      ))}                   // I used on click even to run add to cart function.
    </div>
  );
}

const ProductDetail = styled.div`
  background-color: #fff;
  display: flex;
  margin-top: 20px;
  margin-left: 40px;

  h3 {
    margin: 20px 0;
  }

  img {
    object-fit: contain;
    width: 400px;
    height: 500px;
  }
`;
const ProductDetailInfo = styled.div`
  padding-left: 20px;
  .details_image {
    object-fit: contain;
    width: 300px;
    height: 500px;
  }

  .details_title {
    font-size: 17px;
    font-weight: 400;
    margin: 20px 0;
    width: 600px;
  }
  button {
    background: #09817b;
    width: 200px;
    height: 30px;
    font-weight: 800;
    font-size: 15px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #09817b;
    color: #fff;
    cursor: pointer;
  }
`;

export default ProductDetails;
