import React, { useState, useEffect } from "react";
import GlobalStyle from './styles/global';
import Header from './components/header'
import Resume from "./components/resume";
import Form from "./components/Form";




const App = () => {
    const data = localStorage.getItem("Transactions");
    const [transactionsList, setTransactionsList] = useState(
        data ? JSON.parse(data) : []
    );

    //formulas para entradas, saídas, total
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const amountExpense = transactionsList
            .filter((item) => item.expense)
            .map((transaction) => Number(transaction.amount));

        const amountIncome = transactionsList
            .filter((item) => !item.expense)
            .map((transaction) => Number(transaction.Amount));

        const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
        const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

        const total = Math.abs(income - expense).toFixed(2);

        setIncome(`R$ ${income}`);
        setExpense(`R$ ${expense}`);

        //função para que o sinal de menos fique antes do cifrão, caso o valor seja negativo 
        setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);

        const handleAdd = (transaction) => {
            const newArrayTransactions = [...transactionsList, transaction];

            setTransactionsList(newArrayTransactions);

            localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
        }

    }, [transactionsList]);

    return (
        <>
            <Header />
            <Resume income={expense} expense={expense} total={total} />
            <Form handleAdd={handleAdd} />
            <GlobalStyle />

        </>
    )
}

export default App