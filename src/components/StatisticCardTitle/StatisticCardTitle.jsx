import React from 'react';
import PropTypes from 'prop-types';
import { StatisticCardTitleH2 } from './StatisticCardTitle.styles';

function StatisticCardTitle({ title }) {
  return <StatisticCardTitleH2>{title}</StatisticCardTitleH2>;
}

export default StatisticCardTitle;

StatisticCardTitle.propTypes = {
  title: PropTypes.node.isRequired,
};
