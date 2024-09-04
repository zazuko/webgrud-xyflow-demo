import type { NodeTypes } from '@xyflow/react';

import { PositionLoggerNode } from './PositionLoggerNode';
import { AppNode } from './types';
import { FunctionNode } from './function-node/function-node';
import { VariableNode } from './variable-node/variable-node';
import { VariableInputNode } from './variable-input-node/variable-input-node';
import { VariableOutputNode } from './variable-ouput-node/variable-output-node';
import { SourceNode } from './source-node/source-node';
export const initialNodes: AppNode[] = [
  { id: 'g4', type: 'output', position: { x: 0, y: 0 }, data: { label: 'suggested fertilization add(x,y)= 105.5' } },
  {
    id: 'g5',
    position: { x: -100, y: 100 },
    data: { label: 'sum(x,y)=160' },
  },
  {
    id: 'correctionT13',
    type: 'input',
    position: { x: 100, y: 100 },
    data: { label: 'correction t13 0' }
  },
  {
    id: 'correctionT12',
    type: 'input',
    position: { x: 0, y: 200 },
    data: { label: 'T12 20.0' },
  },
  {
    id: 'correctionT15',
    type: 'input',
    position: { x: 0, y: 200 },
    data: { label: 'correction rain fall 30.0' },
  },
  {
    id: 'fertilizationNorm',
    type: 'input',
    position: { x: 0, y: 200 },
    data: { label: 'fertilizationNorm 0.3' },
  },
  {
    id: 'correctionTargetYield',
    position: { x: 0, y: 200 },
    data: { label: 'correctionTargetYield 0' },
  },
  {
    id: 'g7',
    type: 'input',
    position: { x: 0, y: 200 },
    data: { label: '25' },
  },
  {
    id: 'correctionT11',
    position: { x: 0, y: 200 },
    data: { label: 'correctionTargetYield 0' },
  },
  {
    id: 'availableN',
    position: { x: 0, y: 200 },
    data: { label: 'availableN 58.5' },
  },
  {
    id: 'fertilizerAmount',
    type: 'input',
    position: { x: 0, y: 200 },
    data: { label: 'fertilizerAmount 150' },
  },
  {
    id: 'fertilizerNutrientContent',
    type: 'input',
    position: { x: 0, y: 200 },
    data: { label: 'fertilizerNutrientContent 3.9' },
  },
  {
    id: 'g6',
    position: { x: 0, y: 200 },
    type: 'input',
    data: { label: 'magic sauce 0.1' },
  },



];

export const nodeTypes = {
  'position-logger': PositionLoggerNode,
  'function-node': FunctionNode,
  'variable-node': VariableNode,
  'variable-input': VariableInputNode,
  'variable-output': VariableOutputNode,
  'source-node': SourceNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;
