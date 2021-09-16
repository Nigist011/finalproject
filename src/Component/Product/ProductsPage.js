import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import { useStateValue } from '../stateProvider/StateProvider';
import './productPage.css'

function ProductsPage() {

        const [{cart, detail},dispatch] = useStateValue()
        const [products, setProducts] = useState([]);
        useEffect(() => {
           
            fetch("https://fakestoreapi.com/products")
                .then((res) => res.json()) // changed to json
                .then((json) => setProducts(json));  //using set producted I updated product
    
        }, []);
  const addToDetail = (product)=> {
    dispatch({
      type: 'ADD_TO_DETAIL',        // I used add to detail to add product to product detail.
      payload: product

    })
  }
    

  return (
    <div>
      <Link to="/productdetail" className="link">
        <div className="product__row">
          {products.map((product, id) => (    // I wrape product with link
            <div className="product" key={id}>
              <div className="product__info">
                <p>{product.title}</p>
                <p className="product__price">
                  <small>$</small>
                  <strong>{product.price}</strong>
                </p>
              </div>
              <img
                src={product.image}
                alt=""
                onClick={() => addToDetail(product)}  // I used on click event to pass add to detail function
              />
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
}

export default ProductsPage;

