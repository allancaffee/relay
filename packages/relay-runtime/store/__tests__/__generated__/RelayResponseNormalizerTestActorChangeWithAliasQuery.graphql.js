/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<6482628ca7fb89b1bf43a77552052515>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
import type { ActorChangePoint } from "react-relay/multi-actor";
type RelayResponseNormalizerTestActorChangeFragment$ref = any;
export type RelayResponseNormalizerTestActorChangeWithAliasQueryVariables = {||};
export type RelayResponseNormalizerTestActorChangeWithAliasQueryResponse = {|
  +viewer: ?{|
    +me: ?{|
      +name: ?string,
    |},
    +actor: ?ActorChangePoint<{|
      +actor_key: string,
      +$fragmentRefs: RelayResponseNormalizerTestActorChangeFragment$ref,
    |}>,
  |},
|};
export type RelayResponseNormalizerTestActorChangeWithAliasQuery = {|
  variables: RelayResponseNormalizerTestActorChangeWithAliasQueryVariables,
  response: RelayResponseNormalizerTestActorChangeWithAliasQueryResponse,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = [
  (v0/*: any*/)
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RelayResponseNormalizerTestActorChangeWithAliasQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": "me",
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "actor",
            "plural": false,
            "selections": (v1/*: any*/),
            "storageKey": null
          },
          {
            "kind": "ActorChange",
            "alias": null,
            "name": "actor",
            "storageKey": null,
            "args": null,
            "fragmentSpread": {
              "args": null,
              "kind": "FragmentSpread",
              "name": "RelayResponseNormalizerTestActorChangeFragment"
            }
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RelayResponseNormalizerTestActorChangeWithAliasQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": "me",
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "actor",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v0/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          {
            "kind": "ActorChange",
            "linkedField": {
              "alias": null,
              "args": null,
              "concreteType": null,
              "kind": "LinkedField",
              "name": "actor",
              "plural": false,
              "selections": [
                (v2/*: any*/),
                {
                  "kind": "InlineFragment",
                  "selections": (v1/*: any*/),
                  "type": "User",
                  "abstractKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "actor_key",
                  "storageKey": null
                },
                (v3/*: any*/)
              ],
              "storageKey": null
            }
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ba82e503731e62399fa18a0167a50573",
    "id": null,
    "metadata": {},
    "name": "RelayResponseNormalizerTestActorChangeWithAliasQuery",
    "operationKind": "query",
    "text": "query RelayResponseNormalizerTestActorChangeWithAliasQuery {\n  viewer {\n    me: actor {\n      __typename\n      name\n      id\n    }\n    actor {\n      __typename\n      ...RelayResponseNormalizerTestActorChangeFragment\n      actor_key\n      id\n    }\n  }\n}\n\nfragment RelayResponseNormalizerTestActorChangeFragment on User {\n  name\n}\n"
  }
};
})();

if (__DEV__) {
  (node/*: any*/).hash = "40e7357eeb0ff3ea6f26da4529203e8e";
}

module.exports = node;
