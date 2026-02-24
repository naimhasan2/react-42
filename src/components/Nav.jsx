import { Link } from "react-router";

const Nav = () => {
  return (
    <>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/cart"}>Cart</Link>
        </li>
        <li>
          <Link to={"/addproduct"}>Add Product</Link>
        </li>
        <li>
          <Link to={"/singup"}>Sing Up</Link>
        </li>
      </ul>
    </>
  );
};

export default Nav;
