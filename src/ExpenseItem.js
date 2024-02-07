import React from 'react';

function ExpenseItem({ expense, deleteExpense }) {
  return (
    <li>
      <div>{expense.description}</div>
      <div>{expense.amount}</div>
      <button onClick={() => deleteExpense(expense.id)}>Delete</button>
    </li>
  );
}

export default ExpenseItem;
