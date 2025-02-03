import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { data } from "react-router";

function App() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const address = form.get("address");
    const user = { name, address };
    console.log(name, address);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newUser = [...datas, data];
        setDatas(newUser);
        e.target.reset();
      });
  };

  return (
    <>
      <div>
        <form onSubmit={handleForm} action="">
          <input name="name" type="text" />
          <input name="address" type="text" />
          <button>Submit</button>
        </form>
        <h1>length: {datas.length}</h1>
        {datas.map((data) => (
          <li key={data.id}>
            {data.name}: {data.address}
          </li>
        ))}
      </div>
    </>
  );
}

export default App;
