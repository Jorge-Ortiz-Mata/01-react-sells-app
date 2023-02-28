export default function ExpenseAmount({amount}){

  return(
    <div className="flex flex-col items-center text-white border rounded bg-sky-200 p-5">
      <p className="text-gray-800 font-bold text-2xl">${amount} USD</p>
    </div>
  );
}
