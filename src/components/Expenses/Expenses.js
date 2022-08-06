import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.purchases[0].title}
        amount={props.purchases[0].amount}
        date={props.purchases[0].date}
      />
      <ExpenseItem
        title={props.purchases[1].title}
        amount={props.purchases[1].amount}
        date={props.purchases[1].date}
      />
      <ExpenseItem
        title={props.purchases[2].title}
        amount={props.purchases[2].amount}
        date={props.purchases[2].date}
      />
      <ExpenseItem
        title={props.purchases[3].title}
        amount={props.purchases[3].amount}
        date={props.purchases[3].date}
      />
    </Card>
  );
};

export default Expenses;
