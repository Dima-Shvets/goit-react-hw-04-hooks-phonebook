import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import s from './Filter.module.scss';

const filterId = nanoid();

export function Filter({ updateFilter, filter }) {
  const filterHandler = e => {
    const message = e.target.value;
    updateFilter(message);
  };

  return (
    <>
      <label className={s.label} htmlFor={filterId}>
        Find contacts by name
      </label>
      <input
        className={s.input}
        id={filterId}
        type="text"
        name="filter"
        value={filter}
        onChange={filterHandler}
      />
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  updateFilter: PropTypes.func.isRequired,
};
