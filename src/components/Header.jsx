import React, { useEffect, useState } from "react";
import axios from "axios";

export const Header = ({ email }) => {
  const [user, setUser] = useState({
    name: {
      title: "",
      first: "",
      last: "",
    },
  });

  const { title, first, last } = user.name;

  const getUserInformation = async () => {
    try {
      const response = await axios.get(`https://randomuser.me/api/`);

      const userInfo = response.data.results[0];
      setUser(userInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserInformation();
  }, []);

  return (
    <div>
      <div className="encabezado">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9pXqAOh-wjOMDbNweQ4QMcxIsy_KnBU_PPd28Ac_hhg&s"
          alt="Imagen perfil"
        />
      </div>
      <div className="encabezado-texto">
        <p>My email Adress is:</p>
        <h2> {user.email}</h2>
        <p>My name is: </p>
        <h2>
          {title} {first} {last}
        </h2>
      </div>
    </div>
  );
};
