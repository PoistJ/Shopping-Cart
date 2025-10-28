import { Link, Outlet } from "react-router";

function App() {
  return (
    <header data-testid="header-element">
      <Link to="home">Home</Link>
      <Link to="shop">Shop</Link>
      <Link to="cart">Cart</Link>
      <Outlet />
    </header>
  );
}

export default App;
