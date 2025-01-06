# Key Concepts

### Users

A Nillion Network user has a [Ed25519 key pair](https://cryptography.io/en/latest/hazmat/primitives/asymmetric/ed25519/#key-interfaces) consisting of a public and private key.

#### User Key

The `user_key` is the user's private key. The user key should never be shared publicly, as it unlocks access and permissions to secrets stored on the network. Best practices for securing your user key include:

- Store it in a secure key management system
- Never share it via email or messaging
- Use strong encryption when storing it
- Rotate keys periodically
- Back up keys securely

#### User ID

The `user_id` is derived from the user's public key, and is the public user identifier. Other parties can grant a user permission to a secret based on their user id.

### Programs

A Nada program is software written in the Nada language that is compiled to generate a mid-level intermediate (MIR) representation. This MIR can be stored in the Nillion Network for future use. Programs are characterized by:

- A set of inputs
- Computation logic
- A set of outputs

Programs are reusable, and computation is invoked by a Nillion Client. At computation time, the client specifies inputs, which can be any combination of:
- Secrets already stored in the network
- Secrets provided at compute time
- Public variables

#### Program ID

The `program_id` is the identifier for a program stored in the Nillion Network. The convention for `program_id` is the `{user_id}/{program_name}` where the `user_id` corresponds to the user that stored the program in the network, and the `program_name` is the program name the storer set when storing the program.

#### Party

A `Party` is a named entity involved in Nada program computation. Parties can supply inputs to calculations, reveal outputs of calculations, or both.

#### Party ID

The `party_id`, sometimes called [`peer_id`](concepts#peer-id), is the public identifier for a `Party`.

#### Inputs

An `Input` is named external data provided by a specific [Party](concepts.md#party) for Nada program computation. Inputs can be secret or public.

#### Outputs

An `Output` is the named result of a Nada program revealed to a specific [Party](concepts.md#party) after computation.

### Secrets

A Nillion `Secret`, identified in the network by a `store_id`, consists of one or more named secret values. Secrets can be stored in the network or provided as inputs to programs at compute time.

#### Store ID

The `store_id` is the identifier for a set of one or more named secret values stored in the Nillion Network. This `store_id` is returned by the network as a result of storing a secret.

#### Secret Name

The `secret_name` is a user given name for a single secret value.

### Permissions

Permissions are access control mechanisms attached to a secret stored in the network

#### Default Permissions

Any `user_id` given "default permissions" at store time through `default_for_user(user_id)` will have permission to retrieve and update the permissions of a secret.

#### Secret Permissions

A `user_id` can be given retrieve, update, delete, and/or compute permissions on a secret.

- retrieve / read a secret: `add_retrieve_permissions(user_id)`
- update a secret: `add_update_permissions(user_id)`
- delete a secret: `add_delete_permissions(user_id)`
- compute on a secret: `add_compute_permissions({user_id: {program_id}})`

### Clusters

A cluster is a subset of the compute nodes that exist in the Nillion Network.

#### Cluster ID

The `cluster_id` is the identifier for a cluster of nodes in the Nillion Network.

### Nodes

Nodes in the Nillion Network have public and private key pairs.

#### Node Key

The `node_key` is the node's private key, which it keeps a secret.

#### Peer ID

The `peer_id` is a [libp2p concept](https://docs.libp2p.io/concepts/fundamentals/peers/#peer-id). Each node is a peer in the overall peer-to-peer Nillion Network. The `peer_id` serves as a unique identifier for each peer or node, and is a verifiable link between a peer and its public cryptographic key.

#### Bootnodes

Bootnodes are nodes designated as entry points of the Nillion Network. All the nodes require a list of bootnodes to be able to join the network. After a node dials the configured bootnodes and connects, the bootnodes introduce them to the rest of the network allowing the peer discovery process to start.

#### Dealer nodes

A dealer node is an SDK-based node that sends tasks to the Nillion Network.

#### Result nodes

A result node is an SDK-based node that receives the results of computations run on the Nillion Network.

#### Compute nodes

Compute nodes can perform all the functions of the Nillion Network including computation and storage.

#### Relay servers

Because dealer and result nodes can run anywhere (web browsers, other platforms), compute nodes are configured as relay servers with [libp2p's Circuit Relay protocol](https://github.com/libp2p/specs/blob/master/relay/circuit-v2.md). Dealers and result nodes can establish relay circuits with relay servers in order to operate in the network the same as the rest of the nodes.

### Best Practices

#### Security
- Regularly audit permissions granted to users
- Follow the principle of least privilege when granting access
- Monitor and log all access to sensitive data
- Implement proper key rotation policies

#### Program Development
- Test programs thoroughly before deployment
- Document program inputs and outputs clearly
- Version control your programs
- Follow Nada language best practices

#### Network Usage
- Monitor cluster health and performance
- Implement proper error handling
- Use appropriate timeout values
- Follow network upgrade procedures
