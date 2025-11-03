import { Link, Outlet } from "react-router";
import { useState } from "react";
import "./App.css";

function App() {
  const [total, setTotal] = useState(() => {
    let total = 0;
    for (let i = 0; i < localStorage.length; i++) {
      total += JSON.parse(localStorage.getItem(localStorage.key(i)));
    }
    return total;
  });

  return (
    <>
      <div className="headerWrapper">
        <header data-testid="header-element">
          <Link to="home">Home</Link>
          <Link to="shop">Shop</Link>
          <Link to="cart">
            Cart
            <div>{total}</div>
          </Link>
        </header>
      </div>
      <Outlet context={[total, setTotal]} />
    </>
  );
}

export default App;
