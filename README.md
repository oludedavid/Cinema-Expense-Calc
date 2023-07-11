#Cinema Calc Coding Challenge
This is a simple application made with React and Typescript to calculate the expenses incurred in a cinema.

1. How to run the project **locally**:
- NodeJS or npm is needed to run the project locally. So Node must be installed to run the application
- After making sure that NodeJs is installed, I used the npx create-react-app --template typescript command to create the project.
- Afterwards, I ran the command: npm start.  It automatically selects a local host, typically 3000, to run the project locally.
- After installing all the dependencies using the above command. To run the project I used the npm start to start the server locally. The project ran on http://localhost:3000/. 
- To run the project locally:
  a. Ensure NodeJS is installed
  b. Navigate to the GitHub repository and clone the repository: **git clone https://github.com/your_username/your_project_name.git**
  c. Change into the directory using: **cd your_project_name**
  d. Ensure project dependencies are installed using: **npm install**
  e. Start or run the project locally using: **npm start**

2. What is the overall **structure** of your code?
 The structure of the project follows the conventional hierarchy and best practices recommended for a React application, making the components highly reusable and maintainable. Here's a basic outline:

- src folder: This is the source directory containing all the React components, associated stylesheets, and other necessary assets.

- index.tsx: This is the root file of the project and the entry point where the React application gets injected into the DOM.

- App.tsx: App.tsx serves as the principal component of the application, acting as a container for all other components. It handles primary logic, including state management and operations such as adding, updating, and deleting expenses. This component houses CreateExpenseItemForm.tsx, UpdateExpenseItemForm.tsx, and ExpenseItemList.tsx, making it the parent component.

- CreateExpenseItemForm.tsx: This component displays a form to create a new expense item. It receives functions and data as props from App.tsx to handle form submissions and input changes.

- UpdateExpenseItemForm.tsx: This component is in charge of displaying a form to update an existing expense item. It also receives its functions and data such as the expense to be updated values as props from App.tsx to handle form submissions and input changes.

- ExpenseItemList.tsx: This component manages the rendering of the list of expense items. Each item in the list is passed down from the state in App.tsx and then rendered using the array.map() method. It also contains the actions to delete or update an expense item, passed as props from App.tsx.

All components are functional, with React Hooks employed to manage state and side effects. This structure allows for better code reusability, separation of concerns, and easier maintenance. The incorporation of TypeScript enhances the development experience with features like autocompletion and aids in catching errors during development.

  3. How do you manage **state** in your application? Why did you choose this solution?
I manage state in this application using React's built-in useState hook. This is a simple application with relatively few states, so I chose to use the useState hook because of its simplicity and ease of use.
Each piece of data that can change in the application is kept in its own state. For example, there's a state for all expense items, the total expenses, and the form data for adding and updating expense items.
The benefit of using the useState hook in this context is that it's easy to manage and trace state changes. It also allows for great performance because React will only re-render components when the state changes.

  4. What could be a reason for using bignumber.js for calculations?
When dealing with financial calculations, precision is critical. JavaScript's built-in number type can lead to precision errors in arithmetic calculations, especially when dealing with floating-point numbers.
bignumber.js is a library that provides a way to perform calculations on large numbers or numbers requiring high precision, such as financial transactions. It helps to avoid rounding errors and other issues related to JavaScript's built-in Number type, ensuring accurate and precise calculations in our expense tracker application.
  
  5. Why did you design the user interface like you did? What choices did you make and why?
    When designing the user interface, my primary objective was to ensure a seamless and intuitive experience. The intent was to create an interface that resonates 
    with the fundamental goal of the application, which is to provide a calm, clear, and efficient environment for users to track their cinema expenses.
   A significant factor I considered was the emotional response of users while interacting with the application. I aimed for a user interface that elicits a sense of 
  relaxation and ease. To achieve this, I selected warm colours and used intuitive icons that depict a serene and enjoyable atmosphere, aptly resonating with the 
   cinema theme.
   In terms of technology choices, Bootstrap stood out as the go-to CSS framework due to its utility and efficiency. Bootstrap offers a comprehensive suite of ready- 
   to-use components, which expedited the development process. The responsive grid system of Bootstrap further ensured that the layout would be flexible and adapt to a 
  variety of screen sizes, thereby enhancing the user experience across different devices, be it mobile or desktop.
In summary, every design decision made was driven by the commitment to offer a user-friendly, responsive, and visually pleasing interface while maintaining the simplicity and efficiency of the application.

  6. What „tasks“ did you have on your mind? How did you break down the different deliverables?
When I wanted to implement the functions of the application i.e. CRUD (Create, Read, Update, and Delete), my thoughts went around the CRUD tasks I needed to tackle. I saw the entire application development process as a grand story; I broke down the narrative into distinct tasks or "chapters", each leading to the next, ensuring the storyline was both cohesive and captivating.

Task 1: **Data Harvesting**: The initial task was akin to harvesting fruit 🍎 🍉 🍍  from a tree 🌳 🌲 . I needed to obtain the data from the user, which was accomplished by deploying HTML form input elements. This step laid the foundation for all subsequent tasks.

Task 2: **Data Storing**: Once the fruit 🍌  (data) was harvested, it needed to be carefully stored. For this purpose, I envisioned an array serving as a warehouse, where each fruit is stored in its own bucket 🪣, represented by an object. The onChange event handler facilitated this process, capturing and storing the user-input values.

Task 3: **Expense Calculation**: Following the data storage, I had to calculate the total expense for each expense item. I likened this to weighing each bucket of fruit to determine its worth. This was achieved by utilizing the BigNumber.js library and initiating the operation when the user clicked the 'add' button. The operation encompassed both storage of user data into the warehouse and calculation of the total expense.

Task 4: **Deletion**: No warehouse is complete without a mechanism to manage its inventory. To serve this need, I created a function that enabled removal of items from the warehouse. This function hinged on the array.filter() method, identifying the item to be deleted by its unique ID, and recalculating the overall expense by subtracting the total expense of the deleted item.

Task 5: **Update**: Lastly, I envisioned a scenario where the user may want to add more to an existing bucket in the warehouse. To enable this, I first set up a mechanism that filled an edit form with the existing values of the item to be updated. Then, using these values, a new total expense was calculated, and the overall expense updated accordingly. The entire warehouse inventory was then scanned using the array.map() method to identify the bucket to be updated, and replace it with the newly filled bucket.

Throughout this journey, TypeScript provided a safety net, helping to catch errors during development and improving the development experience with features like auto-completion.

     


