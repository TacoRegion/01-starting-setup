import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
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
    </div>
  );
};

export default Expenses;
