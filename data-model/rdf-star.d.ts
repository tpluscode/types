import {BlankNode, Literal, NamedNode, Quad} from '../data-model';
import { Rdf11 } from './rdf1.1';

/**
 * Unions of Term types for the various roles they play in RDF-star data
 */
export interface RdfStar {
  Subject: Rdf11['Subject'] | Quad;
  Predicate: Rdf11['Predicate'];
  Object: NamedNode | BlankNode | Literal<NamedNode> | Quad;
  Datatype : Rdf11['Datatype'];
  Quad : Quad;
  Graph: Rdf11['Graph']
}
