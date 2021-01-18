import React, { useReducer, useState } from "react";
import { Carousel, Button } from "antd";
import ContextState from "./ContextState";
import { useContext } from "react";

const initialState = {
  counter: 0,
};

const functionState = (state, action) => {
  switch (action.type) {
    case "A":
      return {
        ...state,
        counter: state.counter + 1,
      };

    case "B":
      return {
        ...state,
        counter: state.counter - 1,
      };

    case "C":
      return {
        ...state,
        counter: action.payload,
      };

    default:
      return state;
  }
};

const ContextHome = () => {
  const [input, setInput] = useState(0);
  const [state, dispatch] = useReducer(functionState, initialState);
  const value = useContext(ContextState);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
          marginRight: "20px",
        }}
      >
        <input
          placeholder="Enter a Value"
          type="Number"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <Button
          onClick={(e) => {
            dispatch({
              type: "C",
              payload: input,
            });
          }}
        >
          Init Count
        </Button>
        <div></div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        {" "}
        <Button
          onClick={() => {
            setInput("");
            dispatch({
              type: "C",
              payload: 0,
            });
          }}
        >
          Reset
        </Button>
      </div>{" "}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
          fontWeight: "bold",
          fontSize: "40px",
        }}
      >
        {state.counter}{" "}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <Button
          style={{
            marginRight: "30px",
            backgroundColor: "red",
            color: "white",
          }}
          onClick={(e) => {
            dispatch({
              type: "B",
            });
          }}
        >
          Decrease
        </Button>
        <Button
          style={{
            // marginRight: "50px",
            backgroundColor: "green",
            color: "white",
          }}
          onClick={(e) => {
            dispatch({
              type: "A",
            });
          }}
        >
          Increase
        </Button>
      </div>
      <div>{value}</div>
    </div>
  );
};

export default ContextHome;
