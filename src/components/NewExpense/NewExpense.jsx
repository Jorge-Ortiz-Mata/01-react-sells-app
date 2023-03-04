import ExpenseForm from "./ExpenseForm";

export default function NewExpense({onAddExpense}){

  function handleOnSubmitForm(expense){
    const newExpense = {
      id: Math.round((Math.random()) * 1000),
      ...expense
    }

    onAddExpense(newExpense);
  }

  return(
    <section>
      <ExpenseForm onSubmitForm={handleOnSubmitForm} />
    </section>
  )
}
