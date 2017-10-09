import React, {Component} from 'react';
import PropTypes from 'prop-types';

const CategoryCard = ({
   item:{id, name, budgeted, activity}
 }) => (
  <div className="category-item">
    <h2>{name}</h2>
    <h3>{budgeted}</h3>
    <p>{activity}</p>
  </div>
);

CategoryCard.propTypes = {
  item: PropTypes.object.isRequired
};

export default CategoryCard;