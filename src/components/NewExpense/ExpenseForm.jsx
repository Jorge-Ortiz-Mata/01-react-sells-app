import { useState } from "react";

export default function ExpenseForm(){
  const [expense, setExpense] = useState({});

  function changeHandler(e){
    setExpense((prevState) => {
      return {
        ...prevState, [e.target.name]: e.target.value
      }
    })
  }

  return(
    <form className="bg-orange-200 p-5 flex justify-evenly">
      <div className="flex gap-5 items-center">
        <label htmlFor="title" className="font-bold text-base">Title</label>
        <input type="text" name="title" id="title" className="rounded py-1 px-3 w-60 text-xs font-bold" onChange={changeHandler} />
      </div>
      <div className="flex gap-5 items-center">
        <label htmlFor="amount" className="font-bold text-base">Amount</label>
        <input type="number" name="amount" id="amount" className="rounded py-1 px-3 w-60 text-xs font-bold" onChange={changeHandler} />
      </div>
      <div className="flex gap-5 items-center">
        <label htmlFor="date" className="font-bold text-base">Date</label>
        <input type="date" name="date" id="date" className="rounded py-1 px-3 w-60 text-xs font-bold" onChange={changeHandler} />
      </div>
      <div className="flex gap-5 items-center">
        <input type="submit" className="bg-green-700 p-2 rounded text-white font-semibold text-sm" value="See expenses" />
      </div>
    </form>
  );
}