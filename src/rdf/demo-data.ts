import { NamedNode, Parser, Quad } from 'n3';

import { apiResultRdfInputString } from './input';
import rdfExt from 'rdf-ext';
import clownface, { GraphPointer } from 'clownface';
import { Variable } from '../classes/variable.class';
import { AppNode } from '../nodes/types';
import { Edge } from '@xyflow/react';

const rdfType = new NamedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type');
const fertilization = new NamedNode('https://agriculture.ld.admin.ch/prif/fertilization');

export function getDemoQuads(): Quad[] {
    const parser = new Parser();
    try {
        const quads = parser.parse(apiResultRdfInputString);
        return quads;
    } catch (e) {
        console.error('Error parsing RDF', e);
        return [];
    }
}


export function getResultVariable(quads: Quad[]): Variable | null {
    const dataset = rdfExt.dataset(quads);
    const graph = clownface({ dataset });
    const requestType = graph.namedNode('https://agriculture.ld.admin.ch/prif/Request');
    const result = requestType.in(rdfType).out(fertilization);

    if (result.values.length !== 1) {
        console.warn('no result found');
        return null;
    }
    return new Variable(result as GraphPointer);
}


export interface NodeAndEdges {
    nodes: AppNode[];
    edges: Edge[];
}

export function extractNodes(rootVariable: Variable, nodes: AppNode[] = [], edges: Edge[] = []): NodeAndEdges {


    const node: AppNode = {
        id: rootVariable.node.value,
        position: { x: 0, y: 0 },
        data: {
            label: rootVariable.label,
            value: rootVariable.value,
            unit: rootVariable.unit
        },
    };

    if (rootVariable.substation) {
        console.log('substation');
        (node as AppNode).type = nodes.length === 0 ? 'variable-output' : 'variable-node';
        const substation = rootVariable.substation;
        const operationNode: AppNode = {
            id: substation.id,
            position: { x: 0, y: 0 },
            data: { label: '-' },
            type: 'function-node'
        };
        nodes.push(operationNode);
        edges.push({ id: `${substation.id}->${rootVariable.node.value}`, source: substation.id, target: rootVariable.node.value, animated: true });

        edges.push({ id: `${substation.minuend.node.value}->${substation.id}`, source: substation.minuend.node.value, target: substation.id, label: 'minuend', animated: true });
        edges.push({ id: `${substation.subtrahend.node.value}->${substation.id}`, source: substation.subtrahend.node.value, target: substation.id, label: 'subtrahend', animated: true });
        extractNodes(substation.minuend, nodes, edges);
        extractNodes(substation.subtrahend, nodes, edges);

    } else if (rootVariable.addition) {
        console.log('addition');
        (node as AppNode).type = nodes.length === 0 ? 'variable-output' : 'variable-node';

        const addition = rootVariable.addition;
        const operationNode: AppNode = {
            id: addition.id,
            position: { x: 0, y: 0 },
            data: { label: '+' },
            type: 'function-node'
        };
        nodes.push(operationNode);
        edges.push({ id: `${addition.id}->${rootVariable.node.value}`, source: addition.id, target: rootVariable.node.value, animated: true });
        addition.summand.forEach((summand) => {
            edges.push({ id: `${summand.node.value}->${addition.id}`, source: summand.node.value, target: addition.id, animated: true });

            extractNodes(summand, nodes, edges);
        });
    } else if (rootVariable.multiplication) {
        console.log('multiplication');
        (node as AppNode).type = nodes.length === 0 ? 'variable-output' : 'variable-node';

        const multiplication = rootVariable.multiplication;
        const operationNode: AppNode = {
            id: multiplication.id,
            position: { x: 0, y: 0 },
            data: { label: '*' },
            type: 'function-node'
        };
        nodes.push(operationNode);
        edges.push({ id: `${multiplication.id}->${rootVariable.node.value}`, source: multiplication.id, target: rootVariable.node.value, animated: true });
        multiplication.factor.forEach((factor) => {
            edges.push({ id: `${factor.node.value}->${multiplication.id}`, source: factor.node.value, target: multiplication.id, animated: true });

            extractNodes(factor, nodes, edges);
        });
    } else {
        (node as AppNode).type = 'variable-input';


        if (rootVariable.source) {
            (node as AppNode).type = 'variable-node';

            console.log('source');
            const source = rootVariable.source;
            console.log('source', source);

            const sourceNode: AppNode = {
                id: source.id,
                position: { x: 0, y: 0 },
                data: {
                    label: source.values.join(', '),
                    source: source
                },
                type: 'source-node'
            };
            nodes.push(sourceNode);
            console.log('source', source.id);
            console.log('sourceNode', sourceNode.id);

            edges.push({ id: `${source.id}->${node.id}`, source: source.id, target: node.id, animated: true });

        }

    }




    // if nodes doesn't contain the node, add it
    if (!nodes.find(n => n.id === node.id)) {
        nodes.push(node);

    }


    return { nodes, edges };
}