import { Link, Outlet } from "react-router";
import { useState } from "react";
import "./App.css";

function App() {
  const [total, setTotal] = useState(() => {
    let total = 0;
    for (let i = 0; i < localStorage.length; i++) {
      total += JSON.parse(localStorage.getItem(localStorage.key(i))).quantity;
    }
    return total;
  });

  return (
    <>
      <header data-testid="header-element">
        <Link to="home">C T R L + F I T</Link>
        <Link className="shop" to="shop">SHOP</Link>
        <Link className="cart" to="cart">
          CART
          <div className="cartTotal">{total}</div>
        </Link>
      </header>
      <Outlet context={[total, setTotal]} />
    </>
  );
}

export default App;
