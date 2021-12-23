import React from 'react';

import { ActivityIndicator } from 'react-native';

import { LineChart } from 'react-native-svg-charts';

function CustomLineChart({ chartData, chartDimensions }) {
  return  chartDimensions ? (
  (
    <LineChart
      data={chartData}
      svg={{
        strokeWidth: 4,
        stroke: 'rgba(175, 220, 139, 0.7)',
      }}
      style={{
        borderRadius: 8,
        width: chartDimensions.width,
        height: chartDimensions.height
      }}
    />
  )
  ) : <ActivityIndicator size="small" color="#2b2b73" />
}

export default CustomLineChart;
