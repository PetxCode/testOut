import { Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../ContextFile/GlobalState";

const Home = () => {
  const { users, removeUser } = useContext(GlobalContext);
  return (
    <div>
      The Home
      <Header
        style={{
          display: "flex",
          justifyContent: "space-around",
          color: "white",
          alignItems: "center",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        <div>My Team</div>
        <Button>
          <Link to="/add">Add User</Link>
        </Button>
      </Header>
      {users.map(({ id, name }) => (
        <div>
          <div
            style={{
              width: "70%",
              height: "60px",
              display: "flex",
              justifyContent: "space-between",
              margin: "auto",
              marginTop: "30px",
              border: "1px solid lightgray",
              alignItems: "center",
              padding: "0 20px",
              fontWeight: "bold",
              fontFamily: "Poppins",
            }}
          >
            <div>{name}</div>
            <div>
              <Button
                style={{
                  marginRight: "10px",
                  backgroundColor: "yellow",
                  color: "black",
                  fontWeight: "bold",
                  fontFamily: "Poppins",
                }}
              >
                <Link to={`/edit/${id}`}>Edit</Link>
              </Button>
              <Button
                style={{
                  // marginRight: "10px",
                  backgroundColor: "red",
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "Poppins",
                }}
                onClick={() => {
                  removeUser(id);
                  console.log(id);
                }}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
