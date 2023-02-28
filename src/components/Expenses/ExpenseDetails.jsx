import { useState } from "react";

export default function ExpenseDetails({id, title}){

  const [newTitle, setTitle] = useState(title);

  const buttonHandler = () => {
    setTitle('Updated');
  }

  return(
    <div className="flex flex-col items-center text-white gap-1">
      <p className="text-2xl text-white font-bold">{newTitle}</p>
      <p className="text-sm text-white">Identifier: {id}</p>
      <button
        onClick={buttonHandler}
        className="border py-1 px-3 mt-2 text-xs rounded-lg bg-white text-sky-700 font-bold">
        Update title
        </button>
    </div>
  );
}
