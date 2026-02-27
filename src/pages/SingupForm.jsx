import { useState } from "react";
import classes from "../Form.module.css";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";

const SingupForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    // setUser(e.target)
    console.log(e.target.name);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, user.email, user.password);
      await setDoc(doc(db, "users", auth.currentUser.uid), {
        email: user.email,
        role: "user",
      });
      setIsLoading(false);
      setErrorMessage("");
      navigate("/login");
    } catch (error) {
      setErrorMessage(error.message);
      setIsLoading(false);
    }
  };

  return (
    <>
      <main>
        <section className={classes.auth}>
          <h1>Please Register</h1>
          <form onSubmit={submitHandler}>
            <div className={classes.control}>
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                name="email"
                required
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Your Password</label>
              <input
                type="password"
                name="password"
                required
                value={user.password}
                onChange={handleChange}
              />
            </div>
            <div className={classes.actions}>
              {!isLoading && <button type="submit">Register</button>}
              {!isLoading && <p>Creating New User</p>}
              {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default SingupForm;
