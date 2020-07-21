import React from 'react';
import Item from './ExpenseItem';
import { MdDelete } from 'react-icons/md';

const ExpenseList = ({ expenses, handleDelete, handleEdit, clearItem }) => {
  return (
    <React.Fragment>
      <ul className="list">
        {expenses.map((expense) => {
          return (
            <Item
              key={expense.id}
              expense={expense}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </ul>
      {expenses.length > 0 && (
        <button className="btn" onClick={clearItem}>
          clear expenses
          <MdDelete className="btn-icon" />
        </button>
      )}
    </React.Fragment>
  );
};

export default ExpenseList;
