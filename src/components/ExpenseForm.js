import React from 'react';
import { MdSend } from 'react-icons/md';

const ExpenseForm = ({
  amount,
  charge,
  handleSubmit,
  handleCharge,
  handleAmount,
  edit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">charge</label>
          <input
            value={charge}
            onChange={handleCharge}
            type="text"
            id="charge"
            name="charge"
            className="form-control"
            placeholder="eg rent"
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            className="form-control"
            placeholder="eg 100"
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <button type="submit" className="btn">
        {edit ? 'edit' : 'submit'}
        <MdSend className="btn-icon" />
      </button>
    </form>
  );
};

export default ExpenseForm;
