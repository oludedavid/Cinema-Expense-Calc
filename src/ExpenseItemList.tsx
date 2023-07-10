import { type } from "os";
import React from "react";
import { ExpenseItemProps } from "./App";

// prop type
type ExpenseItemListProps = {
  handlUpdateItem: (id: string) => void;
  expenseItems: ExpenseItemProps[];
  handleDeleteExpenseItem: (id: string) => void;
};

const ExpenseItemList: React.FC<ExpenseItemListProps> = ({
  handlUpdateItem,
  expenseItems,
  handleDeleteExpenseItem,
}) => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10">
          <ul className="list-group list-group-flush">
            {
              /* expense item */
              expenseItems.map((expenseItem) => {
                return (
                  <li key={expenseItem.id} className="list-group-item">
                    <div className="row align-items-center">
                      <div className="col-6 col-md-2 text-center text-md-start">
                        <h3 className="mb-0">{expenseItem.expenseName}</h3>
                      </div>
                      <div className="col-6 col-md-2 text-center text-md-start">
                        <h3 className="mb-0">{expenseItem.expenseAmount}</h3>
                      </div>
                      <div className="col-6 col-md-2 text-center text-md-start">
                        <h3 className="mb-0">
                          {expenseItem.extraAmountPercentageValue}
                        </h3>
                      </div>
                      <div className="col-6 col-md-2 text-center text-md-start">
                        <h3 className="mb-0">{expenseItem.totalExpense}</h3>
                      </div>
                      <div className="col-12 col-md-4 text-center text-md-end mt-2 mt-md-0">
                        <button
                          className="btn me-2"
                          type="button"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-custom-class="custom-tooltip"
                          title="Delete Expense Item."
                          onClick={() => {
                            handleDeleteExpenseItem(expenseItem.id);
                          }}
                        >
                          <img
                            src="../img/delete.png"
                            alt="Delete"
                            width="30"
                            height="30"
                          />
                        </button>
                        <button
                          className="btn"
                          type="button"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-custom-class="custom-tooltip"
                          title="Update Expense Item."
                          onClick={() => {
                            handlUpdateItem(expenseItem.id);
                          }}
                        >
                          <img
                            src="../img/pencil.png"
                            alt="Edit"
                            width="30"
                            height="30"
                          />
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItemList;
