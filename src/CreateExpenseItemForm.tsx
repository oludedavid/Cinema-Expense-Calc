import React from "react";

type CreateExpenseItemFormProps = {
  handleShowCreateExpenseItemForm: () => void;
  handleCreateExpenseItemChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleAddExpenseItem: () => void;
};

const CreateExpenseItemForm: React.FC<CreateExpenseItemFormProps> = ({
  handleShowCreateExpenseItemForm,
  handleCreateExpenseItemChange,
  handleAddExpenseItem,
}) => {
  return (
    <div className="add-expense-item-container overlay-modal">
      <img
        src="../img/close.png"
        alt="Close"
        className="close-button"
        onClick={handleShowCreateExpenseItemForm}
      />
      <form className="expense-form">
        <div className="form-group">
          <label htmlFor="expense-name" className="form-label">
            Expense Name
          </label>
          <input
            id="expense-name"
            type="text"
            placeholder="Expense name"
            name="expenseName"
            className="form-control"
            onChange={handleCreateExpenseItemChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="expense-amount" className="form-label">
            Expense Amount
          </label>
          <input
            id="expense-amount"
            type="number"
            placeholder="0"
            name="expenseAmount"
            className="form-control"
            onChange={handleCreateExpenseItemChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="extra-amount-expense" className="form-label">
            Extra Percentage
          </label>
          <input
            id="extra-amount-expense"
            type="number"
            placeholder="0"
            name="extraAmountPercentageValue"
            className="form-control"
            onChange={handleCreateExpenseItemChange}
          />
        </div>

        <div className="form-group d-flex justify-content-center add-btn">
          <button
            type="button"
            className="btn btn-primary add-btn"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Add Expense Item"
            onClick={handleAddExpenseItem}
          >
            <img src="../img/plus.png" alt="Add" width="30" height="30" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateExpenseItemForm;
