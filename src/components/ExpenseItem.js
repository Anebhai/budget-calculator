import React from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';

export const ExpenseItem = ({ expense, handleEdit, handleDelete }) => {
  const { charge, amount, id } = expense;

  return (
    <li className="item">
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount">${amount}</span>
      </div>
      <button
        className="edit-btn"
        aria-label="Edit button"
        onClick={() => handleEdit(id)}
      >
        <MdEdit />
      </button>
      <button
        className="clear-btn"
        aria-label="delete button"
        onClick={() => handleDelete(id)}
      >
        <MdDelete />
      </button>
    </li>
  );
};

export default ExpenseItem;
