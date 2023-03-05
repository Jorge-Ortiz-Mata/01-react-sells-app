export default function CustomButton({title, handleClick}) {

  return(
    <button onClick={() => {handleClick()}} className="bg-sky-700 text-white py-2 px-5 font-semibold text-sm rounded shadow-md">{title}</button>
  )
}
