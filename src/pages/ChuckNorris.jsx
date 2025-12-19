import { useEffect, useState } from "react";

function ChuckNorris() {
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then(res => res.json())
      .then(data => setJoke(data));
  }, []);

  if (!joke) {
    return <p>Carregando piada do Chuck Norris...</p>;
  }

  return (
    <div className="card">
      <img src={joke.icon_url} alt="Chuck Norris" />
      <p><b>{joke.value}</b></p>
    </div>
  );
}

export default ChuckNorris;
