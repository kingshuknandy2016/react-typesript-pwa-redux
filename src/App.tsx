import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./store";
import { State } from "./store/reducers";
import Button from "./components/UI/Button";
import Input from "./components/UI/Input";
import InputWithButton from "./components/Feature/InputWithButton";

function App() {
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const amount = useSelector((state: State) => state.bank);

  const onDepositHandler = (enteredValue: number) => {
    depositMoney(enteredValue);
  };
  const onWithdrawHandler = (enteredValue: number) => {
    withdrawMoney(enteredValue);
  };

  const onBankrupt = () => {
    bankrupt();
  };

  return (
    <div className="App">
      <h1>{amount}</h1>
      <InputWithButton
        label="Deposit Amount "
        btnName="Deposit"
        handleClick={onDepositHandler}
      ></InputWithButton>
      <InputWithButton
        label="Withdraw Amount "
        btnName="WithDraw"
        handleClick={onWithdrawHandler}
      ></InputWithButton>
      <Button name="Bankrupt" handleClick={onBankrupt}></Button>
    </div>
  );
}

export default App;
