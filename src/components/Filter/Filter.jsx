import s from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <label className={s.label}>
      Search contacts
      <input
        onChange={onChange}
        type="text"
        className={s.input}
        value={value}
      />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Filter;
