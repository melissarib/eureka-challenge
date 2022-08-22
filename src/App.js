import "./App.css";
import logo from "./images/logo.png";
import Card from "./components/dataCard";

import { useEffect, useContext } from "react";

import TokenContext from "./utils/TokenProvider";

import { Users } from "./services/usersService";
import { Programs } from "./services/programsServices";

function App() {
  const { token } = useContext(TokenContext);

  const { getUsers, getUsersById, getActivitiesUsersById } = Users;
  const { getProgramsById } = Programs;

  useEffect(() => {
    loadDataUsers();
  }, [token]);

  const loadDataUsers = async () => {
    if (token) {
      try {
        const user = await getUsers(token);

        if (user) {
          console.log(user.data);

          loadDataUserById(user.data[0]);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const loadDataUserById = async (user) => {
    if (user) {
      try {
        const userById = await getUsersById(token, user.id);

        if (userById) {
          console.log(userById.data);

          loadDataGetActivitiesUsersById(user);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const loadDataGetActivitiesUsersById = async (user) => {
    if (user) {
      try {
        const userActivitiesById = await getActivitiesUsersById(token, user.id);

        if (userActivitiesById) {
          console.log(userActivitiesById.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="App">
      <header>
        <nav>
          <img src={logo} alt="logo"></img>
        </nav>
      </header>
      <section>
        <Card></Card>
        <Card></Card>
      </section>
    </div>
  );
}

export default App;
