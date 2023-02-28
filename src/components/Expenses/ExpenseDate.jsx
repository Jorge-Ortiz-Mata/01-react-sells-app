export default function ExpenseDate({date}){
  const day = date.toLocaleDateString("es-MX", {weekday: 'long'});
  const month = date.toLocaleDateString("es-MX", {month: 'long'});
  const year = date.toLocaleDateString("es-MX", {year: 'numeric'});

  return(
    <div className="flex flex-col items-center border rounded-md py-2 px-4">
      <p className="font-bold text-3xl text-white">{year}</p>
      <p className="text-white">{day}</p>
      <p className="text-white">{month}</p>
    </div>
  );
}
