/**
 * Unions of Term types for the various roles they play in 'plain' RDF 1.1 Data
 */
import {BlankNode, DefaultGraph, Literal, NamedNode, Rdf11Quad} from '../data-model';

export interface Rdf11 {
    Subject: NamedNode | BlankNode;
    Predicate: NamedNode;
    Object: NamedNode | BlankNode | Literal<NamedNode>;
    Graph : DefaultGraph | NamedNode | BlankNode;
    Datatype : NamedNode;
    Quad: Rdf11Quad;
}
