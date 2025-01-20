# SecretVault

## What is SecretVault

Nillion's SecretVault is a decentralized storage system that keeps sensitive data secret by storing encrypted shares across a cluster of [nilDB nodes](/learn/architecture). Each nilDB node stores a separate share of the encrypted data, ensuring no single node can reveal the original value.

This approach offers stronger security than traditional databases where all data sits in one place. Because SecretVault splits sensitive data between nodes, a breach of any single node only reveals a useless share. You need to combine multiple shares to reconstruct and decrypt the original data.

### Related Nillion tools

- **nilQL** is the library used to encrypt data into shares before storage in SecretVault and decrypt shares after retrieval
- **SecretDataAnalytics** enables executing additional queries on stored data in SecretVault without decryption

## How to use SecretVault

Using SecretVault starts with creating an organization and defining the structure of your data collections. After the setup, you can securely store and retrieve data from SecretVault.

### 1. Register an Organization

Register an organization to get your organization credentials and node details for the cluster of nilDB nodes where your data is securely stored.

### 2. Define a Collection

Organize your data into a collection, defined by a JSON schema that specifies fields, data types, and validation rules. Once created, the schema cannot be changed.

:::info
Currently, schemas cannot be created directly by users. To set up a custom collection and schema for your organization, please contact the Nillion team by filling out [this access form](/build/secretVault-secretDataAnalytics/access).
:::

### 3. Store Records

First, encrypt any private data fields with nilQL.

Then upload the record to all nodes in your cluster to store the record. Plaintext fields are stored identically across all nodes, while encrypted fields are split into unique shares, with each node holding one share to keep data secure.

### 4. Retrieve Records

Read or retrieve a record by fetching the data from all nodes in your cluster. Decrypt private data fields with nilQL to recombine shares from all nodes and reconstruct the original data.

## SecretVault Key Terms

### Organization

Your root entity in SecretVault. When created, receives organization credentials and details (endpoints and dids) for the cluster of nodes for storage.

### Cluster

A group of nodes configured for your organization. All your data is stored across these nodes.

### Node

An endpoint where collection data is stored. Each node in your cluster:

- Stores all plaintext field values for your collections
- Holds one share of any encrypted field value
- Is uniquely identified by its DID (Decentralized Identifier), which is required for generating API tokens and accessing the node

Nodes require API tokens for authorization. These tokens are node-specific and must be included in your requests to interact with the node.

### Node API Tokens / Bearer Tokens

Bearer tokens, implemented as JWTs (JSON Web Tokens), are used to authenticate and authorize API calls to nodes. Each token is:

- Node-Specific: Generated for a specific node using its DID
- Secure: Signed with your organization’s private key
- Temporary: Includes an expiration time (exp) for added security

### Collection

A table or container of SecretVault records. Created with:

- An owner (your organization's DID)
- A schema defining the collection's structure

### Schema

A JSON Schema defines the immutable structure of records in a collection including:

- Field names
- Field data types (string, number, etc.)
- Required fields
- Field formats (uuid, date-time, etc.)
- Whether additional fields are allowed

### Record

A single data entry that follows a collection's schema. When a record is stored:

- Every node in the cluster stores the complete record
- Unencrypted field values are identically stored in plaintext across nodes
- Encrypted field values are different on each node (each node stores a different share)

### Field

A property defined in a schema. Each field has:

- A name (e.g., username, password)
- A data type (e.g., string)
- Optional formats or rules

### Field Data

Data stored in a field. Data can be:

- Unencrypted: stored as plaintext, same value on all nodes
- Encrypted: split into shares by nilQL; each node stores a separate share
