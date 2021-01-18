import { Header } from "antd/lib/layout/layout";
import React from "react";
import { Link } from "react-router-dom";
// import { Layout } from "antd";

//  const Header = Layout;
const ContextHeader = () => {
  return (
    <div>
      <div>
        <Header
          style={{
            color: "white",
            display: "flex",
            justifyContent: "space-around",
            // backgroundColor: "red",
            fontFamily: "Poppins",
            textTransform: "uppercase",
            fontSize: "20px",
          }}
        >
          <div>
            <Link
              to="/"
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "white",
              }}
            >
              Home{" "}
            </Link>
          </div>
          <div>
            <Link
              to="/content"
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "white",
              }}
            >
              Content{" "}
            </Link>
          </div>
        </Header>
      </div>
    </div>
  );
};

export default ContextHeader;
