import React from 'react';
import { StatisticsList, StatisticsListItem } from './Statistics.styles';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <StatisticsList>
      <StatisticsListItem>Good: {good}</StatisticsListItem>
      <StatisticsListItem>Neutral: {neutral}</StatisticsListItem>
      <StatisticsListItem>Bad: {bad}</StatisticsListItem>
      <StatisticsListItem>total: {total}</StatisticsListItem>
      <StatisticsListItem>
        Positive feedback: {positivePercentage}
      </StatisticsListItem>
    </StatisticsList>
  );
}

export default Statistics;
