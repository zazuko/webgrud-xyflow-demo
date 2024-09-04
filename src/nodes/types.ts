import type { Node, BuiltInNode } from '@xyflow/react';
import { ObservationSource } from '../classes/variable.class';

export type PositionLoggerNode = Node<{ label: string }, 'position-logger'>;
export type FunctionNode = Node<{ label: string }, 'function-node'>;
export type VariableNode = Node<{ label: string, unit: string, value: string }, 'variable-node'>;
export type VariableInputNode = Node<{ label: string, unit: string, value: string }, 'variable-input'>;
export type VariableOutputNode = Node<{ label: string, unit: string, value: string }, 'variable-output'>;
export type SourceNode = Node<{ label: string, source: ObservationSource }, 'source-node'>;
export type AppNode = BuiltInNode | PositionLoggerNode | FunctionNode | VariableNode | VariableInputNode | VariableOutputNode | SourceNode;
