/**
 * Unions of Term types for the various roles they play in 'plain' RDF 1.1 Data
 */
import {BlankNode, DefaultGraph, Literal, NamedNode, Rdf11Quad} from '../data-model';

export namespace Rdf11 {
    type Subject = NamedNode | BlankNode;
    type Predicate = NamedNode
    type Object = NamedNode | BlankNode | Literal<Datatype>
    type Graph = DefaultGraph | NamedNode | BlankNode;
    type Datatype = NamedNode;
    type Quad = Rdf11Quad;
}

export interface Rdf11 {
    Subject: Rdf11.Subject;
    Predicate: Rdf11.Predicate;
    Object: Rdf11.Object;
    Graph: Rdf11.Graph;
    Datatype: Rdf11.Datatype;
    Quad: Rdf11.Quad;
}
