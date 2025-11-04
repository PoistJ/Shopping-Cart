import { useState, useEffect } from "react";

function CartItem({ item, quantity }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${item}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [item]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  const price = (Math.round(data.price * 100) / 100).toFixed(2);

  return (
    <div>
      <img src={data.image}></img>
      <p>{data.title}</p>
      <p>Quantity: {quantity}</p>
      <p>${price}</p>
    </div>
  );
}

export { CartItem };
