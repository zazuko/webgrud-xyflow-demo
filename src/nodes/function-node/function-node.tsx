
import { Handle, NodeProps, Position } from '@xyflow/react';
import { type FunctionNode } from '../types';

import './function-node.css'
export function FunctionNode({
    data,
}: NodeProps<FunctionNode>) {


    return (
        // We add this class to use the same styles as React Flow's default nodes.
        <div className="react-flow__node-default fn">
            {data.label === '+' && <div className='op'>   <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <line x1="12" y1="4" x2="12" y2="20" stroke="black" strokeWidth="2" />
                <line x1="4" y1="12" x2="20" y2="12" stroke="black" strokeWidth="2" />

            </svg></div>}
            {data.label === '*' && <div className='op'>  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <line x1="6" y1="6" x2="18" y2="18" stroke="black" strokeWidth="2" />
                <line x1="18" y1="6" x2="6" y2="18" stroke="black" strokeWidth="2" />
            </svg></div>}
            {data.label === '-' && <div className='op'>     <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <line x1="4" y1="12" x2="20" y2="12" stroke="black" strokeWidth="2" />
            </svg></div>}

            {data.label === '/' && <div className='op'>    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="6" r="2" fill="black" />
                <circle cx="12" cy="18" r="2" fill="black" />
                <rect x="6" y="11" width="12" height="2" fill="black" />
            </svg></div>}
            <Handle type="target" className='custom-handle' position={Position.Left} />
            <Handle type="source" className='custom-handle' position={Position.Right} />
        </div>
    );
}

