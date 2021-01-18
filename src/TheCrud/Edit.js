import { Button } from "antd";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Edit = () => {
  const history = useHistory();
  const [input, setInput] = useState("");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        margin: "auto",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <div>
        <input
          style={{
            width: "400px",
            marginBottom: "20px",
            padding: "5px 10px",
          }}
          placeholder="Enter the Name"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </div>
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
          Submit
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
            history.push("/home");
          }}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default Edit;
