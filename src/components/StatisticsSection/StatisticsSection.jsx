import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsSectionContainer } from './StatisticsSection.styles';

function StatisticsSection({ children }) {
  return <StatisticsSectionContainer>{children}</StatisticsSectionContainer>;
}

export default StatisticsSection;

StatisticsSection.propTypes = {
  children: PropTypes.node.isRequired,
};
