import React from "react";
import { ExpenseItemProps } from "./App";
import { ExpenseItemChangeValues } from "./App";

type UpdateExpenseItemFormProps = {
  handleCancleEvent: () => void;
  handleUpdateExpenseItemChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  expenseItemToBeUpdated: ExpenseItemProps;
  handleUpdateSave: () => void;
  updateExpenseItem: ExpenseItemChangeValues;
};

const UpdateExpenseItemForm: React.FC<UpdateExpenseItemFormProps> = ({
  handleCancleEvent,
  handleUpdateExpenseItemChange,
  expenseItemToBeUpdated,
  handleUpdateSave,
  updateExpenseItem,
}) => {
  return (
    <div className="update-form-container overlay-modal">
      <div className="update-form-content">
        <form className="d-flex flex-column">
          <div className="mb-3">
            <label htmlFor="edit__expense-name" className="form-label">
              Expense Name
            </label>
            <input
              id="edit__expense-name"
              type="text"
              className="form-control"
              name="expenseName"
              placeholder="Expense Name"
              value={updateExpenseItem.expenseName}
              onChange={handleUpdateExpenseItemChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="edit__expense-price" className="form-label">
              Expense Amount
            </label>
            <input
              id="edit__expense-price"
              type="number"
              min="0"
              max="1000000"
              step="1"
              name="expenseAmount"
              className="form-control"
              placeholder="0"
              value={updateExpenseItem.expenseAmount}
              onChange={handleUpdateExpenseItemChange}
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="edit__extra-expense-percentage"
              className="form-label"
            >
              Extra Expense Percentage
            </label>
            <input
              id="edit__extra-expense-percentage"
              type="number"
              min="0"
              max="100"
              step="1"
              name="extraAmountPercentageValue"
              className="form-control"
              placeholder="0"
              value={updateExpenseItem.extraAmountPercentageValue}
              onChange={handleUpdateExpenseItemChange}
            />
          </div>

          <div className="d-flex justify-content-center">
            <button
              className="btn btn-primary me-2 save-btn"
              type="button"
              onClick={handleUpdateSave}
            >
              Save
            </button>
            <button
              className="btn btn-danger cancel-btn"
              type="button"
              onClick={handleCancleEvent}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateExpenseItemForm;
