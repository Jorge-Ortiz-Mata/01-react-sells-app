import { useState } from "react";
import ExpensesList from "./components/Expenses/ExpensesList";
import NewExpense from "./components/NewExpense/NewExpense";
import FilterComponent from "./components/FilterExpenses/FilterComponent";

function App() {
  const [expensesList, setExpensesList] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);

  function addExpenseHandler(expense){
    setExpensesList((prevState) => {
      return [...prevState, {expense: expense}];
    })
  }

  function filterExpenses(yearFiltered){
    const filterExpenses = expensesList.filter(({expense}) => expense.date.getFullYear() == yearFiltered);
    console.log('====================================');
    console.log(filterExpenses);
    console.log('====================================');
    setFilteredExpenses(filterExpenses);
  }

  function resetFilter(){
    setFilteredExpenses([]);
  }

  return (
    <main className='flex flex-col bg-gray-400'>
      <NewExpense onAddExpense={addExpenseHandler} />
      <FilterComponent onFilterExpenses={filterExpenses} onResetFilter={resetFilter} />
      {
        filteredExpenses.length > 0
        ? <ExpensesList expenses={filteredExpenses} />
        : <ExpensesList expenses={expensesList} />
      }
    </main>
  );
}

export default App;
