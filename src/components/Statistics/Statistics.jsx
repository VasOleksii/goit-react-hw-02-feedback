import React from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, percentage }) => (
  <div>
    <p className={css.variant}>Good: {good}</p>
    <p className={css.variant}>Neutral: {neutral}</p>
    <p className={css.variant}>Bad: {bad}</p>
    <p className={css.variant}>Total:{total}</p>
    <p className={css.variant}>Positive feedback: {percentage} %</p>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
