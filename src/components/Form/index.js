import React, { useState } from "react";
import * as C from "./styles"

const Form = ({ handleAdd }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState("");

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor!");
      return;

    } else if (amount < 1) {
      alert("O valor tem que ser positivo");
      return;
    }
  };

  const transaction = (
    id: generateID(),
      desc: desc,
        amount: amount,
          expense: isExpense,
  );


handleAdd(transaction);

setDesc("");
setAmount("");


return (
  <>
    <C.container>
      <C.InputContent>
        <C.label>Descrição</C.label>
        <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
      </C.InputContent>
      <C.InputContent>
        <C.label>Valor</C.label>
        <C.Input
          value={amount}
          type="number"
          onChange={(e) => setAmount(e.target.value)}
        />
      </C.InputContent>
      <C.RadioGroup>
        <C.Input
          type="radio"
          id="rIncome"
          defaultChecked
          name="group1"
          onchange={() => setExpense(!isExpense)}
        />
        <C.label htmlFor="rIncome">Entrada</C.label>
        <C.Input
          type="radio"
          id="rExpenses "
          defaultChecked
          name="group1"
          onchange={() => setExpense(!isExpense)}
        />
        <C.label htmlFor="rExpenses">Saída</C.label>
      </C.RadioGroup>
      <C.button onCLick={handleSave}>Adicionar</C.button>
    </C.container>

  </>
)
}

export default Form;