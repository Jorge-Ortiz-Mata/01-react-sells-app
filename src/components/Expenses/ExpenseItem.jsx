import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import ExpenseAmount from "./ExpensePrice";
import Card from "../UI/Card";

export default function ExpenseItem({id, title, amount, date}) {

  return(
    <Card>
      <ExpenseDate date={date} />
      <ExpenseDetails id={id} title={title} />
      <ExpenseAmount amount={amount} />
    </Card>
  );
}
