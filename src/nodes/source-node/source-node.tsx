import { Handle, NodeProps, Position } from '@xyflow/react';
import { type SourceNode } from '../types';

import './source-node.css'

export function SourceNode({
    data,
}: NodeProps<SourceNode>) {


    return (
        // We add this class to use the same styles as React Flow's default nodes.
        <div className="react-flow__node-default source-node">
            <div className="head">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-table">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                    <line x1="15" y1="21" x2="15" y2="9"></line>
                </svg>
                Table Lookup
            </div>
            <div className='body'>
                {data.source.cube && <div className='row'><div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-cube">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.73z"></path>
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                        <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg> </div> <a className='cube' href={data.source.cube?.id} target="_blank" title={data.source.cube?.label}>{data.source.cube?.label}</a></div>}
                {data.source.id && <div className='row'><div>


                    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="6" width="3" height="4" fill="none" stroke="black" />
                        <rect x="6.5" y="6" width="3" height="4" fill="none" stroke="black" />
                        <rect x="11" y="6" width="3" height="4" fill="none" stroke="black" />
                    </svg></div>{data.label && data.label}</div>}


            </div>
            <Handle type="source" position={Position.Right} className='custom-handle' />
        </div>
    );
}

