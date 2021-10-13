import React, { useState, useEffect, useRef } from 'react';
import D3Chart from './D3Chart';

const ChartWrapper = ({ selectedRecipes, dietarySelection }) => {
  const chartElement = useRef(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (!chart) {
      setChart(new D3Chart(chartElement.current));
    }
    else {
      console.log(dietarySelection)
      chart.update(selectedRecipes);
    }
  }, [selectedRecipes, chart, dietarySelection]);

  return (
    <div ref={chartElement}></div>
  )
};

export default ChartWrapper;