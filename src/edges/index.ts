import { Edge, EdgeTypes } from '@xyflow/react';


export const initialEdges: Edge[] = [
  { id: 'g5->g4', source: 'g5', target: 'g4', animated: true, label: 'x' },
  { id: 'correctionT13->g5', source: 'correctionT13', target: 'g5' },
  { id: 'correctionT12->g5', source: 'correctionT12', target: 'g5' },
  { id: 'availableN->g4', source: 'availableN', target: 'g4', label: 'y' },
  { id: 'fertilizerAmount->availableN', source: 'fertilizerAmount', target: 'availableN' },
  { id: 'fertilizerNutrientContent->availableN', source: 'fertilizerNutrientContent', target: 'availableN' },
  { id: 'g6->availableN', source: 'g6', target: 'availableN' },

];

export const edgeTypes = {
  // Add your custom edge types here!
} satisfies EdgeTypes;

