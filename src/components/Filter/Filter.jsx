import { useDispatch, useSelector } from "react-redux";
import { setNameFilter, selectNameFilter } from "../../redux/filtersSlice";
import css from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <input
      className={css.input}
      type="text"
      value={filter}
      onChange={(e) => dispatch(setNameFilter(e.target.value))}
      placeholder="Find contacts by name"
    />
  );
};

export default Filter;
