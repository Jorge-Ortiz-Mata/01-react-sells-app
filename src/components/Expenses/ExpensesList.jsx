import ExpenseItem from "./ExpenseItem";

export default function ExpensesList({expenses}){

  return(
    <section>
      { expenses.map(expense => {
        return (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )
      }) }
    </section>
  )
}
