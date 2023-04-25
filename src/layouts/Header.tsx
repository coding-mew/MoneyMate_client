import axios from "axios";
import React, { useEffect, useState } from "react";

function Header() {
  const [username, setUsername] = useState("");

  const BE_URL = import.meta.env.VITE_BE_PORT;

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`${BE_URL}/user/getUserData`, {withCredentials: true});
        setUsername(res.data.username);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();

  }, []);
        

  return (
    <>
      <header>
        {" "}

        <div className="mx-5 relative bg-gray-900 border rounded text-gray-50 p-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-1 ">
            {username && `Willkommen zurück ${username}! 👋`}

          </h1>
          <p>Willkommen auf deinem Dashboard, Money Mate!</p>
        </div>
      </header>
    </>
  );
}

export default Header;