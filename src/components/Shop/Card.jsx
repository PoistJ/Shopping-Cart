import { useState, useEffect } from "react";

function Card({ cardID }) {
  const [value, setValue] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${cardID}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [cardID]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <img src={data.image}></img>
      <p>{data.title}</p>
      <input value={value} onChange={handleChange}></input>
    </div>
  );
}

export { Card };
