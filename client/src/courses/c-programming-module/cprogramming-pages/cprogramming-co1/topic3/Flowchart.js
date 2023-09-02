import React from 'react';
import { FlowChart } from 'react-flowchart';

const Flowchart = () => {
  const chartData = {
    nodes: [
      { id: 'start', type: 'start', text: 'Start' },
      { id: 'process1', type: 'process', text: 'Process 1' },
      { id: 'decision1', type: 'decision', text: 'Decision 1' },
      { id: 'process2', type: 'process', text: 'Process 2' },
      { id: 'end', type: 'end', text: 'End' },
    ],
    links: [
      { from: 'start', to: 'process1' },
      { from: 'process1', to: 'decision1', condition: 'Yes' },
      { from: 'decision1', to: 'process2', condition: 'Yes' },
      { from: 'decision1', to: 'end', condition: 'No' },
    ],
  };

  return <FlowChart chart={chartData} />;
};

export default Flowchart;
