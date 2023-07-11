import React from "react";
import CreateExpenseItemForm from "./CreateExpenseItemForm";
import ExpenseItemList from "./ExpenseItemList";
import UpdateExpenseItemForm from "./UpdateExpenseItemForm";
import BigNumber from "bignumber.js";
import { v4 as uuidv4 } from "uuid";

// Define types outside the component
export type ExpenseItemChangeValues = {
  id: string;
  expenseName: string;
  expenseAmount: string;
  extraAmountPercentageValue: string;
};

type PercentageOfNumberVariables = {
  percentageAbsoluteNumber: number | string;
  expenseAmount: number | string;
};

type PercentageOperationVariable = {
  percentageValue: number | string;
};

type ExpenseItem = {
  expenseAmount: number;
  extraAmountPercentageValue: number;
};

export type ExpenseItemProps = {
  id: string;
  expenseName: string;
  expenseAmount: number | string;
  extraAmountPercentageValue: number | string;
  totalExpense: number;
};

const App: React.FC = () => {
  // State variables and handlers
  const [showCreateExpenseItemForm, setShowCreateExpenseItemForm] =
    React.useState<boolean>(false);
  const [showUpdateExpenseItemForm, setShowUpdateExpenseItemForm] =
    React.useState<boolean>(false);

  const [createExpenseItem, setCreateExpenseItem] =
    React.useState<ExpenseItemChangeValues>({
      id: uuidv4(),
      expenseName: "",
      expenseAmount: "",
      extraAmountPercentageValue: "",
    });

  const [updateExpenseItem, setUpdateExpenseItem] =
    React.useState<ExpenseItemChangeValues>({
      id: uuidv4(),
      expenseName: "",
      expenseAmount: "",
      extraAmountPercentageValue: "",
    });

  const [expenseItemToBeUpdated, setExpenseItemToBeUpdated] =
    React.useState<ExpenseItemProps>({
      id: uuidv4(),
      expenseName: "",
      expenseAmount: "",
      extraAmountPercentageValue: "",
      totalExpense: 0,
    });

  const [expenseItems, setExpenseItems] = React.useState<ExpenseItemProps[]>(
    []
  );

  const [overallTotalExpense, setOverallTotalExpense] =
    React.useState<number>(0);

  // Basic function to calculate a percentage arit.op using bignumber.js
  const convertPercentageToAbsoluteValue = ({
    percentageValue,
  }: PercentageOperationVariable): number => {
    const percentage_big = new BigNumber(percentageValue);
    const absoluteValue = percentage_big.dividedBy(100);
    return absoluteValue.toNumber();
  };

  const calculateExtraExpensePercentageAmount = ({
    percentageAbsoluteNumber,
    expenseAmount,
  }: PercentageOfNumberVariables) => {
    const percentageAbsoluteValue = new BigNumber(percentageAbsoluteNumber);
    const expense = new BigNumber(expenseAmount);
    const extraExpensePercentageAmount =
      percentageAbsoluteValue.multipliedBy(expense);
    return extraExpensePercentageAmount.toNumber();
  };

  // Calculate the total expense
  const calculateTotalExpense = ({
    expenseAmount,
    extraAmountPercentageValue,
  }: ExpenseItem): number => {
    // convert the percentage value to absolute value
    const absoluteValue = convertPercentageToAbsoluteValue({
      percentageValue: extraAmountPercentageValue,
    });

    // calculate the extra expense amount
    const extraExpenseAmount = calculateExtraExpensePercentageAmount({
      percentageAbsoluteNumber: absoluteValue,
      expenseAmount,
    });

    // calculate and return the total expense
    const expenseAmountBig = new BigNumber(expenseAmount);
    const totalExpense = expenseAmountBig.plus(extraExpenseAmount);

    return totalExpense.toNumber();
  };

  // Create an item form change handler
  const handleCreateExpenseItemChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setCreateExpenseItem((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //1. Create an expense item function
  const handleAddExpenseItem = () => {
    // Calculate the total expense for the item
    const totalExpense = calculateTotalExpense({
      expenseAmount: parseFloat(createExpenseItem.expenseAmount as string),
      extraAmountPercentageValue: parseFloat(
        createExpenseItem.extraAmountPercentageValue as string
      ),
    });

    // update the overall total expense
    setOverallTotalExpense((prevState) => prevState + totalExpense);

    // create a new expense item with the total expense
    const newExpenseItem = {
      id: createExpenseItem.id,
      expenseName: createExpenseItem.expenseName,
      expenseAmount: createExpenseItem.expenseAmount,
      extraAmountPercentageValue: createExpenseItem.extraAmountPercentageValue,
      totalExpense,
    };

    // add the new expense item to the expense items container
    setExpenseItems((prevState) => [...prevState, newExpenseItem]);

    // reset the create expense item state
    setCreateExpenseItem({
      id: uuidv4(),
      expenseName: "",
      expenseAmount: "",
      extraAmountPercentageValue: "",
    });
    alert("Expense Added Successfully");
    // close the create expense item form
    handleShowCreateExpenseItemForm();
  };
  //2. Delete an expense item function
  const handleDeleteExpenseItem = (id: string) => {
    // find the expense item to be deleted
    const expenseItemToBeDeleted = expenseItems.find(
      (expenseItem) => expenseItem.id === id
    );

    if (expenseItemToBeDeleted) {
      // update the overall total expense
      setOverallTotalExpense(
        (prevState) => prevState - expenseItemToBeDeleted.totalExpense
      );
      // delete the expense item
      const updatedExpenseItems = expenseItems.filter(
        (expenseItem) => expenseItem.id !== id
      );
      setExpenseItems(updatedExpenseItems);
      alert("Expense Deleted Successfully");
    }
  };

  // Toogle state handlers
  const handleShowCreateExpenseItemForm = () => {
    setShowCreateExpenseItemForm(!showCreateExpenseItemForm);
  };

  const handleCancleEvent = () => {
    setShowUpdateExpenseItemForm(!showUpdateExpenseItemForm);
  };
  //3. Update an expense item function
  // 3a. Update an expense item form change handler
  const handleUpdateExpenseItemChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setUpdateExpenseItem((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // 3b. Update an expense item function
  const handlUpdateItem = (id: string) => {
    const expenseItemToBeUpdated = expenseItems.find(
      (expenseItem) => expenseItem.id === id
    );
    if (expenseItemToBeUpdated) {
      setExpenseItemToBeUpdated(expenseItemToBeUpdated);
    }
    handleCancleEvent();
  };

  //3c. Update save function
  const handleUpdateSave = () => {
    // Calculate the total expense for the item
    const totalExpense = calculateTotalExpense({
      expenseAmount: parseFloat(updateExpenseItem.expenseAmount as string),
      extraAmountPercentageValue: parseFloat(
        updateExpenseItem.extraAmountPercentageValue as string
      ),
    });

    // Create a new expense item with the total expense
    const updatedExpenseItem = {
      id: expenseItemToBeUpdated.id,
      expenseName: updateExpenseItem.expenseName,
      expenseAmount: updateExpenseItem.expenseAmount,
      extraAmountPercentageValue: updateExpenseItem.extraAmountPercentageValue,
      totalExpense,
    };

    // Update the overall total expense
    // Subtract the previous total expense then add the new total expense
    setOverallTotalExpense(
      (prevState) =>
        prevState - expenseItemToBeUpdated.totalExpense + totalExpense
    );

    // Add the new expense item to the expense items container
    const updatedExpenseItems = expenseItems.map((expenseItem) => {
      if (expenseItem.id === expenseItemToBeUpdated.id) {
        return updatedExpenseItem;
      }
      return expenseItem;
    });

    setExpenseItems(updatedExpenseItems);
    alert("Expense Updated Successfully");

    // Close the update expense item form
    handleCancleEvent();
  };

  return (
    <div className="App container-fluid d-flex flex-column justify-content-center align-items-center py-5">
      <nav className="navbar d-flex justify-content-center row mb-4">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src="../img/money-bag.png"
            alt="money-logo"
            width="50"
            height="44"
            className="d-inline-block align-text-top me-2"
          />
          <h1 className="mb-0 fs-5 fw-bold">Expense Tracker</h1>
        </a>
      </nav>
      <div className="d-flex justify-content-center mb-4">
        <button
          type="submit"
          className="btn btn-primary add-btn-toggler"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Add New Item"
          onClick={handleShowCreateExpenseItemForm}
        >
          Add New Expense
        </button>
      </div>
      {/* create expense item form */}
      {showCreateExpenseItemForm && (
        <CreateExpenseItemForm
          handleShowCreateExpenseItemForm={handleShowCreateExpenseItemForm}
          handleCreateExpenseItemChange={handleCreateExpenseItemChange}
          handleAddExpenseItem={handleAddExpenseItem}
        />
      )}

      {/* expense list */}
      <ExpenseItemList
        handlUpdateItem={handlUpdateItem}
        expenseItems={expenseItems}
        handleDeleteExpenseItem={handleDeleteExpenseItem}
      />

      {/* update expense item form */}
      {showUpdateExpenseItemForm && (
        <UpdateExpenseItemForm
          handleCancleEvent={handleCancleEvent}
          handleUpdateExpenseItemChange={handleUpdateExpenseItemChange}
          expenseItemToBeUpdated={expenseItemToBeUpdated}
          updateExpenseItem={updateExpenseItem}
          handleUpdateSave={handleUpdateSave}
        />
      )}

      {/* overall expense */}
      <div className="d-flex justify-content-center mt-4">
        <h1 className="mb-0 fs-5 fw-bold">
          Overall Expense: {overallTotalExpense}
        </h1>
      </div>
    </div>
  );
};

export default App;
