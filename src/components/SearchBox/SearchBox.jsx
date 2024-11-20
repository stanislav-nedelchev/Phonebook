import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filter/slice';
import { selectFilter } from '../../redux/filter/selectors';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <div className={css.searchBox}>
      <p>Find contacts by name</p>
      <input
        className={css.searchInput}
        type="text"
        placeholder="Enter keyword to search"
        value={filter}
        onChange={event => dispatch(changeFilter(event.target.value))}
      />
    </div>
  );
};

export default SearchBox;
