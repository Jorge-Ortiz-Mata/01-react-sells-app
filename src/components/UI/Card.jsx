export default function Card({children}){

  return(
    <div className="flex justify-evenly items-center border shadow-lg bg-gray-800 rounded-md p-5 m-5">
      {children}
    </div>
  )
}
