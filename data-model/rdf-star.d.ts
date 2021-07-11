import * as RDF from '../data-model';
import { Rdf11 } from './rdf1.1';

export namespace RdfStar {
  type Subject = Rdf11.Subject | Quad;
  type Predicate = Rdf11.Predicate
   type Object = RDF.NamedNode | RDF.BlankNode | RDF.Literal<Datatype> | Quad;
   type Graph = Rdf11.Graph;
   type Datatype = Rdf11.Datatype;
   type Quad = RDF.Quad;
}

/**
 * Unions of Term types for the various roles they play in RDF-star data
 */
export interface RdfStar {
  Subject: RdfStar.Subject
  Predicate: RdfStar.Predicate;
  Object: RdfStar.Object;
  Datatype: RdfStar.Datatype;
  Quad: RdfStar.Quad;
  Graph: RdfStar.Graph
}
