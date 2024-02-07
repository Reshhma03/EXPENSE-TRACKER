import React, { useState } from 'react';
import ExpenseList from './ExpenseList';
import AddExpenseForm from './ExpenseForm';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
    setTotalExpense(totalExpense + newExpense.amount);
  };

  const deleteExpense = (id, amount) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
    setTotalExpense(totalExpense - amount);
  };

  return (
    <div className="App">
      <h1>Family Expense Tracker</h1>
      <AddExpenseForm addExpense={addExpense} />
      <p>Total Expense: {totalExpense}</p>
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
    </div>
  );
}

export default App;
