


import { Handle, NodeProps, Position } from '@xyflow/react';
import { type VariableNode } from '../types';

import './variable-input-node.css'

export function VariableInputNode({
    data,
}: NodeProps<VariableNode>) {


    return (
        // We add this class to use the same styles as React Flow's default nodes.
        <div className="react-flow__node-default variable-node">
            <div className="head">
                Variable
            </div>
            <div className='body'>
                {data.label && <div className='row'>{data.label}</div>}
                {data.value && <div className='row'><div>Value</div><div className='value'>{data.value}</div></div>}
                {data.unit && <div className='row'><div>Unit</div><a href={data.unit} target='_blank'>{data.unit.replace('http://qudt.org/vocab/unit/', '')}</a></div>}
            </div>
            <Handle type="source" position={Position.Right} className='custom-handle' />
        </div>
    );
}

