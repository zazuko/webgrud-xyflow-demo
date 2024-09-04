import { useCallback } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
  type OnConnect,
  Edge,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import { nodeTypes } from './nodes';
import { edgeTypes } from './edges';
import { extractNodes, getDemoQuads, getResultVariable } from './rdf/demo-data';
import dagre from 'dagre';
import { AppNode } from './nodes/types';

const quads = getDemoQuads();
console.log('quads', quads);
const rootVariable = getResultVariable(quads);


const nodesAndEdges = rootVariable ? extractNodes(rootVariable) : { nodes: [], edges: [] };

const initialNodes = nodesAndEdges.nodes;
const initialEdges = nodesAndEdges.edges;

console.log('initialNodes', initialNodes);
console.log('initialEdges', initialEdges);

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));


const getLayoutedElements = (nodes: AppNode[], edges: Edge[], direction = 'LR') => {
  const isHorizontal = direction === 'LR';
  dagreGraph.setGraph({ rankdir: direction, ranksep: 120, edgesep: 100 });

  // ranksep: 100, // Increase this value for longer edges
  // edgesep: 50   // Increase this value for more separation between edges


  nodes.forEach((node) => {
    console.log('node', node.type === 'function-node' ? 'function-node' : 'default');
    dagreGraph.setNode(node.id, { width: node.type === 'function-node' ? 50 : 200, height: node.type === 'function-node' ? 50 : 100 });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  const newNodes = nodes.map((node) => {
    const nodeWidth = node.type === 'function-node' ? 50 : 200;
    const nodeHeight = node.type === 'function-node' ? 50 : 100;

    const nodeWithPosition = dagreGraph.node(node.id);
    const newNode = {
      ...node,
      targetPosition: isHorizontal ? 'left' : 'top',
      sourcePosition: isHorizontal ? 'right' : 'bottom',
      // We are shifting the dagre node position (anchor=center center) to the top left
      // so it matches the React Flow node anchor point (top left).
      position: {
        x: nodeWithPosition.x - nodeWidth / 2,
        y: nodeWithPosition.y - nodeHeight / 2,
      },
    };

    return newNode;
  });

  return { nodes: newNodes, edges };
};
const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
  initialNodes,
  initialEdges,
);


export default function App() {
  const [nodes, , onNodesChange] = useNodesState(layoutedNodes as AppNode[]);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );


  return (
    <ReactFlow
      nodes={nodes}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      edges={edges}
      edgeTypes={edgeTypes}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
    >
      <Background />
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
}
