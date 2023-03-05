import { useState } from "react";

const DropDownFilter = ({handleYearFilter}) => {

  const handleChange = (e) => {
    const value = e.target.value;
    handleYearFilter(value);
  }

  return(
    <select
      name="year_filter"
      id="year_filter"
      onChange={handleChange}
      className="py-2 px-10 font-semibold rounded-md bg-white">
      <option value="2023">2023</option>
      <option value="2022">2022</option>
      <option value="2021">2021</option>
      <option value="2020">2020</option>
    </select>
  )
}

export default DropDownFilter;
