import { GraphPointer } from 'clownface';


export class ClownfaceObject {
    node: GraphPointer;


    constructor(subject: GraphPointer) {
        this.node = subject;
    }
}

