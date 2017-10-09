import React, {Component} from 'react';
import PropTypes from 'prop-types';

const TransactionCard = ({
    item:{id, description, value, date, category},
    onRemoveTransaction
  }) => (
  <div className="transaction-item">
    <span className="transaction-remove" onClick={() => onRemoveTransaction({ id })}>X</span>
    <h2>{description}</h2>
    <h3>{value}</h3>
    <p>{date}</p>
    <p>{category}</p>
  </div>
);

TransactionCard.propTypes = {
  item: PropTypes.object.isRequired
};

export default TransactionCard;