import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({value, onChange}) => (
    <div className={css.filterField}>
        <label className={css.label}>Name filter</label>
        <input type="text" placeholder="start typing a name" className={css.input} value={value} onChange={onChange} />
    </div>
)

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};