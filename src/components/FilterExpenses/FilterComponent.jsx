import TitleFilter from "./TitleFilter";
import DropDownFilter from "./DropDownFilter";
import CustomButton from "../Common/CustomButton";

const FilterComponent = ({onFilterExpenses, onResetFilter}) => {

  const onYearFilterHandle = (yearFiltered) => {
    onFilterExpenses(yearFiltered);
  }

  const handleButtonClick = () => {
    onResetFilter();
  }

  return(
    <section className="p-5 bg-gray-900 flex flex-row justify-between items-center">
      <TitleFilter />
      <div className="flex items-center justify-center gap-10">
        <DropDownFilter handleYearFilter={onYearFilterHandle} />
        <CustomButton title='Reset filter' handleClick={handleButtonClick} />
      </div>
    </section>
  )
}

export default FilterComponent;
