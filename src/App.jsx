import { Link, Outlet } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <div className="headerWrapper">
        <header data-testid="header-element">
          <Link to="home">Home</Link>
          <Link to="shop">Shop</Link>
          <Link to="cart">Cart</Link>
        </header>
      </div>
      <Outlet />
    </>
  );
}

export default App;
