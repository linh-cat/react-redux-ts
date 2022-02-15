import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator, State } from "./state";

function App() {
  const dispatch = useDispatch();

  const { depositMoney, withDrawMoney, bankCrupt } = bindActionCreators(
    actionCreator,
    dispatch
  );

  const amount = useSelector((state: State) => state.bank);

  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={() => depositMoney(100)}>Debosit</button>
      <button onClick={() => withDrawMoney(100)}>With Draw</button>
      <button onClick={() => bankCrupt()}>Bankrupt</button>
    </div>
  );
}

export default App;
