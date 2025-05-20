import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.box}>
      <label className={css.label}>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={handleChange}
          className={css.input}
        />
      </label>
    </div>
  );
}
