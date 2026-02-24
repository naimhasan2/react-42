import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="ingredient">
        <div className="ingredient-image">
          <figure>
            <img src={product.image} alt={product.title} />
          </figure>
        </div>
        <div className="ingredient-content">
          <h3>{product.title}</h3>
        </div>
        <div className="ingredient-content">
          <p>
            <span>${product.price}</span>
          </p>
        </div>
        <div className="ingredient-btn">
          <button
            onClick={(e) => {
              dispatch(addToCart(product));
            }}
            className="btn-white"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
