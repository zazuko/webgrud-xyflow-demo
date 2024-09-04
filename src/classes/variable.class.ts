import { AnyPointer, GraphPointer } from "clownface";
import { ClownfaceObject } from "./clownface-object.class";
import { NamedNode } from "n3";

const label = new NamedNode('https://agriculture.ld.admin.ch/prif/calc#label');
const value = new NamedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#value');
const unit = new NamedNode('http://qudt.org/schema/qudt/unit');

const minuend = new NamedNode('https://agriculture.ld.admin.ch/prif/calc#minuend');
const subtrahend = new NamedNode('https://agriculture.ld.admin.ch/prif/calc#subtrahend');
const summand = new NamedNode('https://agriculture.ld.admin.ch/prif/calc#summand');
const factor = new NamedNode('https://agriculture.ld.admin.ch/prif/calc#factor');

const source = new NamedNode('https://agriculture.ld.admin.ch/prif/calc#source');

const observation = new NamedNode('https://cube.link/observation');
const observationSet = new NamedNode('https://cube.link/observationSet');
const name = new NamedNode('http://schema.org/name');


export class Variable extends ClownfaceObject {
    constructor(subject: GraphPointer) {
        super(subject);
    }

    get label(): string {
        return this.node.out(label).values.join();
    }

    get value(): string {
        return this.node.out(value).values.join();
    }

    get unit(): string {
        return this.node.out(unit).values.join()
    }

    get substation(): Substation | null {
        const minuendPtr = this.node.out(minuend) as AnyPointer;
        const subtrahendPtr = this.node.out(subtrahend) as AnyPointer;

        if (minuendPtr.values.length !== 1 || subtrahendPtr.values.length !== 1) {
            return null;
        }

        return {
            id: this.node.value + '-subtraction',
            minuend: new Variable(minuendPtr as GraphPointer),
            subtrahend: new Variable(subtrahendPtr as GraphPointer),
        };
    }

    get addition(): Addition | null {
        const summandPtr = this.node.out(summand) as AnyPointer;

        if (summandPtr.values.length < 2) {
            return null;
        }

        return {
            id: this.node.value + '-addition',
            summand: summandPtr.map((summand) => new Variable(summand as GraphPointer)),
        };


    }

    get multiplication(): Multiplication | null {
        const factorPtr = this.node.out(factor) as AnyPointer;

        if (factorPtr.values.length < 2) {
            return null;
        }

        return {
            id: this.node.value + '-multiplication',
            factor: factorPtr.map((factor) => new Variable(factor as GraphPointer)),
        };

    }

    get division(): Division | null {
        return null;
    }

    get source(): ObservationSource | null {
        const sourcePtr = this.node.out(source) as AnyPointer;
        const literals = sourcePtr.out().toArray().filter((n) => n.term.termType === 'Literal').flatMap((n) => n ? [n.values] : []).flat();

        if (sourcePtr.values.length !== 1) {
            console.warn('no source found');
            return null;
        }

        const cubeName = sourcePtr.in(observation).in(observationSet).out(name, { language: ['en'] }).values.join();
        console.log('obs', sourcePtr.values);
        console.log('set', sourcePtr.in(observation).values);
        console.log('cube', sourcePtr.in(observation).in(observationSet).values);
        console.log('cube name', sourcePtr.in(observation).in(observationSet).out(name).values);

        const cubeId = sourcePtr.in(observation).in(observationSet).value;


        if (literals.length > 0) {
            if (cubeId) {
                return {
                    id: sourcePtr.value ?? '',
                    values: literals,
                    cube: {
                        id: cubeId,
                        label: cubeName,
                    }
                };
            } else {
                return {
                    id: sourcePtr.value ?? '',
                    values: literals,
                    cube: null,
                };
            }
        }
        console.warn('no value found', sourcePtr.value);

        return null;
    }


}


interface Substation {
    id: string;
    minuend: Variable;
    subtrahend: Variable;
}

interface Addition {
    id: string;
    summand: Variable[];
}

interface Multiplication {
    id: string;
    factor: Variable[];
}

interface Division {
    id: string;
    dividend: Variable;
    divisor: Variable;
}

export interface ObservationSource {
    id: string;
    values: string[];
    cube: Cube | null;
}

interface Cube {
    id: string;
    label: string;
}