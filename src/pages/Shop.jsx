import { useEffect, useState } from "react";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(db, "products");

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      // console.log(data);

      const filtereData = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(filtereData);
      setProducts(filtereData);
    };
    getProducts();
  }, []);

  return (
    <>
      <div className="page-banner">
        <div className="page-banner-details">
          <div className="page-banner-details-title">
            <h1>Our E-commerce Website</h1>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="section-head">
            <div className="products-details-title">
              <h2>All Products</h2>
            </div>
          </div>
          {products?.length > 0 && (
            <div className="section-content">
              <div className="grid three">
                {products?.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Shop;
