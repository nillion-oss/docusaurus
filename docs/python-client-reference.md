<!-- # Python Client Reference

Nillion Client Python module.

### *class* py_nillion_client.Amount



#### ByteSize()

Returns the size of the message in bytes.



#### Clear()

Clears the message.



#### ClearExtension()

Clears a message field.



#### ClearField()

Clears a message field.



#### CopyFrom()

Copies a protocol message into the current message.



#### DESCRIPTOR *= *



#### DiscardUnknownFields()

Discards the unknown fields.



#### Extensions

Extension dict



#### FindInitializationErrors()

Finds unset required fields.



#### FromString()

Creates new method instance from given serialized data.



#### HasExtension()

Checks if a message field is set.



#### HasField()

Checks if a message field is set.



#### IsInitialized()

Checks if all required fields of a protocol message are set.



#### ListFields()

Lists all set fields of a message.



#### MergeFrom()

Merges a protocol message into the current message.



#### MergeFromString()

Merges a serialized message into the current message.



#### ParseFromString()

Parses a serialized message into the current message.



#### *static* RegisterExtension(field_descriptor)



#### SerializePartialToString()

Serializes the message to a string, even if it isn’t initialized.



#### SerializeToString()

Serializes the message to a string, only for initialized messages.



#### SetInParent()

Sets the has bit of the given field in its parent message.



#### UnknownFields()

Parse unknown field set



#### WhichOneof()

Returns the name of the field set inside a oneof, or None if no field is set.



### *class* py_nillion_client.Array(value)

This is a `Array` class used to
encode a secret array of elements.

Note: \_\_len_\_ method is implemented to allow
getting the length of the array.

* **Parameters:**
  **value** (*list*) – List of secret encoded elements.
* **Returns:**
  Instance of the `Array` class.
* **Return type:**
  Array
* **Raises:**
  **ValueError** – invalid secret type: Raises an error when a public encoded element is included inside a
      secret array.

### Example

```py3
import py_nillion_client as nillion

secret_array = nillion.Array([
    nillion.SecretInteger(1),
    nillion.SecretInteger(2),
])

print("The length of the array is: ", len(secret_array))
```

```text
&gt;&gt;&gt; The length of the array is: 2
```



#### value

Getter method for the value inside a
`Array` instance.

* **Returns:**
  List of secret encoded elements.
* **Return type:**
  list

### Example

```py3
print("My secret array: \n", secret_array.value)
```

```text
&gt;&gt;&gt; My secret array:
&gt;&gt;&gt;  [, ]
```



### *exception* py_nillion_client.AuthenticationError

Error related to authentication: invalid password, public key, or other internal errors



#### args



#### with_traceback()

Exception.with_traceback(tb) –
set self._\_traceback_\_ to tb and return self.



### *class* py_nillion_client.ClusterDescriptor

The `ClusterDescriptor` contains attributes
that describe the cluster configuration. It includes information
about:

1. Cluster id;
2. Security parameters (statistical security and security threshold);
3. Parties (nodes) in the cluster;
4. Preprocessing configuration.

This object is returned when invoking `NillionClient` cluster_information method.

### Example

```py3
cinfo = await client.cluster_information(args.cluster_id)
```



#### id

The Cluster identifier.

* **Return type:**
  A string containing the Nillion Cluster identifier.

### Example

```py3
cinfo = await client.cluster_information(args.cluster_id)
print("Cluster id:", cinfo.id)
```

```text
&gt;&gt;&gt; Cluster id: 147f8d45-2126-4a54-9a64-8141ee55f51a
```



#### kappa

The statistical security parameter kappa for this cluster.

* **Return type:**
  The value of the statistical security parameter kappa used in this cluster.

### Example

```py3
cinfo = await client.cluster_information(args.cluster_id)
print("Statistical sec parameter kappa:", cinfo.kappa)
```

```text
&gt;&gt;&gt; Statistical sec parameter kappa: 40
```



#### parties

Cluster’s parties ids.

* **Return type:**
  A list of strings containing the party identifiers in the cluster.

### Example

```py3
cinfo = await client.cluster_information(args.cluster_id)
print("Cluster parties' ids:", cinfo.parties)
```

```text
&gt;&gt;&gt; Parties: {'12D3KooWJtRXjmV1HctQgvLUcrdxJ7cXwCHiL6PCheikN2rTJ2ZH',
              '12D3KooWHSveXS4DdXpCQyDDsp9D1x7fiTRnm1fsH9yJRpR6y4FM',
              '12D3KooWLV6HzUXpt6Tt5HUM5Fo3mpjvwsv9n4ADkJ962ArAZCvX'}
```



#### polynomial_degree

The polynomial degree used by this cluster. The polynomial
degree is directly related with the security threshold of the
Nillion network.

* **Returns:**
  * *An integer corresponding to the degree of the polynomial used*
  * *in the cluster for linear secret sharing.*

### Example

```py3
cinfo = await client.cluster_information(args.cluster_id)
print("Polynomial degree:", cinfo.polynomial_degree)
```

```text
&gt;&gt;&gt; Polynomial degree: 1
```



#### prime

The prime number used in this cluster.

* **Return type:**
  The identifier of the prime used in the cluster.

### Example

```py3
cinfo = await client.cluster_information(args.cluster_id)
print("Prime type:", cinfo.prime)
```

```text
&gt;&gt;&gt; Prime: U256SafePrime
```



### *exception* py_nillion_client.ComputeError

Error related to the computation: initialization, scheduling, or other internal errors



#### args



#### with_traceback()

Exception.with_traceback(tb) –
set self._\_traceback_\_ to tb and return self.



### *class* py_nillion_client.ComputeFinishedEvent

The `ComputeFinishedEvent` class is
returned by an async computation when the computation
has just finished.

This class has no public constructor and is received from
method `NillionClient.next_compute_event()`.



#### result

The computation’s result, as a `FinalResult` class.

Use the `FinalResult.value()` method to
obtain the wrapped value.

* **Returns:**
  The `FinalResult` class containing the final result
  of the computation. Use the `FinalResult.value()` method to
  obtain the wrapped value.
* **Return type:**
  FinalResult

### Example

```py3
uuid = await client.compute(
    args.cluster_id,
    bindings,
    [store_id],
    args.compute_secrets,
    args.compute_public_variables,
    payment_receipt
)

while True:
    event = await client.next_compute_event()
    if isinstance(event, nillion.ComputeScheduledEvent):
        pass
    if isinstance(event, nillion.ComputeFinishedEvent) and event.uuid == uuid:
        print(
            f"Received computation result for {event.uuid}, result = {event.result}"
        )
        print(
            f"Received computation result value for {event.uuid}, value = {event.result.value}"
        )
        break
```



#### uuid

The computation’s UUID.

* **Returns:**
  Uuid
* **Return type:**
  str

### Example

```py3
uuid = await client.compute(
    args.cluster_id,
    bindings,
    [store_id],
    args.compute_secrets,
    args.compute_public_variables,
    payment_receipt
)

while True:
    event = await client.next_compute_event()
    if isinstance(event, nillion.ComputeScheduledEvent):
        pass
    if isinstance(event, nillion.ComputeFinishedEvent) and event.uuid == uuid:
        print(
            f"Result for computation with UUID {event.uuid} is ready!"
        )
        break
```



### *class* py_nillion_client.ComputeScheduledEvent

The `ComputeScheduledEvent` class is
returned by an async computation when the computation is not finished yet.

This class has no public constructor and is received from
method `NillionClient.next_compute_event()`.



#### uuid

The computation’s UUID. This outputs the same UUID
provided by the `NillionClient.compute()` method.

* **Returns:**
  Computation UUID.
* **Return type:**
  str

### Example

```py3
uuid = await client.compute(
    args.cluster_id,
    bindings,
    [store_id],
    args.compute_secrets,
    args.compute_public_variables,
    payment_receipt
)

event = await client.next_compute_event()
if isinstance(event, nillion.ComputeScheduledEvent):
    computation_uuid = event.uuid
```



### *class* py_nillion_client.ConnectionMode

This is a `ConnectionMode` class. It designates the
connection mode to use in a client constructor. We support three
different modes:

1. Dialer (`dialer()`);
2. Direct (`direct()`);
3. Relay (`relay()`).



#### dialer()

Specifies the client should connect in dialer mode.

In this mode the client only allows outgoing connections, so no need to
listen or open a port. This mode prohibits this client from recieving results,
as an output party, from the network.

* **Return type:**
  ConnectionMode

### Example

```py3
connection_mode = ConnectionMode.dialer()
```



#### direct()

Specifies a socket address structure for a listening client connection.

This mode is suited for clients that are backend services.

You allow incoming and outgoing connections, they are done directly so you have to listen and have the port open to receive incoming connections. This option is faster than relay as it avoids the extra hop, but requires to have the port open / have port forwarding in NATs and firewalls. This mode requires that the client’s IPv4 address is addressible on the internet.

* **Parameters:**
  **str** – Socket address structure.
* **Return type:**
  ConnectionMode

### Example

```py3
connection_mode = ConnectionMode.direct('0.0.0.0:11337')
```



#### relay()

Specifies the client connects to the Nillion Network in
relay mode. So, if others want to contact the client, they
have to do so through a relay node that the client is connected to
(all nodes in the network are relay nodes).

This mode is suited for clients that cannot open a port like
phones behind a CGNAT, desktop apps behind a NAT or Firewall, and others.

You allow incoming and outgoing connection but the incoming are established via
a node in the network (the relayer) so that you don’t need to listen and open a port.
This is slower than direct because it adds another hop in the connection but allows to
bypass NATs and Firewalls. Also this option adds more load to the p2p network of the
nodes becasue they have to do the relay increasing the incoming and outgoing traffic
+ processing of secure connections.

* **Return type:**
  ConnectionMode

### Example

```py3
connection_mode = ConnectionMode.relay()
```



### *exception* py_nillion_client.DealerError

Error related to the dealer: initialization, scheduling, unexpected errors



#### args



#### with_traceback()

Exception.with_traceback(tb) –
set self._\_traceback_\_ to tb and return self.



### *class* py_nillion_client.FinalResult

This is a `FinalResult` class that is returned
from a finished computation.

This class has no public constructor and is received from
method `ComputeFinishedEvent.result()`.



#### value

The resulting value of a computation.

* **Returns:**
  Result value from a computation.
* **Return type:**
  Dict

### Example

```py3
uuid = await client.compute(
    args.cluster_id,
    bindings,
    [store_id],
    args.compute_secrets,
    args.compute_public_variables,
    payment_receipt
)

while True:
    event = await client.next_compute_event()
    if isinstance(event, nillion.ComputeScheduledEvent):
        pass
    if isinstance(event, nillion.ComputeFinishedEvent) and event.uuid == uuid:
        print(
            f"Received computation result value for {event.uuid}, value = {event.result.value}"
        )
        break
```



### *class* py_nillion_client.Integer(value)

This is a `Integer` class used to
encode a public variable value as an integer.

Note: \_\_eq_\_ method is implemented to allow
to compare two integers.

* **Parameters:**
  **value** (*int*) – Value of the public encoded element.
* **Returns:**
  Instance of the `Integer` class.
* **Return type:**
  Integer

### Example

```py3
import py_nillion_client as nillion

pub_integer_1 = nillion.Integer(1)
pub_integer_2 = nillion.Integer(2)

print("Are the public integers the same? ", pub_integer_1 == pub_integer_2)
```

```text
&gt;&gt;&gt; Are the public integers the same?  False
```



#### value

Getter and setter for the value inside a
`Integer` instance.

* **Returns:**
  The value of the public integer.
* **Return type:**
  int

### Example

```py3
pub_integer = nillion.Integer(1)
print("Public integer is: ", pub_integer.value)
pub_integer.value = 2
print("Public integer is now: ", pub_integer.value)
```

```text
&gt;&gt;&gt; Public integer is:  1
&gt;&gt;&gt; Public integer is now:  2
```



### *class* py_nillion_client.MsgPayFor



#### ByteSize()

Returns the size of the message in bytes.



#### Clear()

Clears the message.



#### ClearExtension()

Clears a message field.



#### ClearField()

Clears a message field.



#### CopyFrom()

Copies a protocol message into the current message.



#### DESCRIPTOR *= *



#### DiscardUnknownFields()

Discards the unknown fields.



#### Extensions

Extension dict



#### FindInitializationErrors()

Finds unset required fields.



#### FromString()

Creates new method instance from given serialized data.



#### HasExtension()

Checks if a message field is set.



#### HasField()

Checks if a message field is set.



#### IsInitialized()

Checks if all required fields of a protocol message are set.



#### ListFields()

Lists all set fields of a message.



#### MergeFrom()

Merges a protocol message into the current message.



#### MergeFromString()

Merges a serialized message into the current message.



#### ParseFromString()

Parses a serialized message into the current message.



#### *static* RegisterExtension(field_descriptor)



#### SerializePartialToString()

Serializes the message to a string, even if it isn’t initialized.



#### SerializeToString()

Serializes the message to a string, only for initialized messages.



#### SetInParent()

Sets the has bit of the given field in its parent message.



#### UnknownFields()

Parse unknown field set



#### WhichOneof()

Returns the name of the field set inside a oneof, or None if no field is set.



### *class* py_nillion_client.NadaValues(values)

This is a `NadaValues` class used to
hold secrets and public values. It can contain:

1. Secret integers (`SecretInteger`);
2. Secret unsigned integers (`SecretUnsignedInteger`);
3. Arrays (`Array`).
4. Public integers (`PublicInteger`)
5. Public unsigned integers (`PublicUnsignedInteger`)

This class is used by the `NillionClient.compute()` method to pass the
secrets used by the corresponding Nada program that are not stored.

* **Parameters:**
  **values** (*dict*) – A map of named encoded secret and public values to store
* **Returns:**
  Instance of the `NadaValues` class.
* **Return type:**
  NadaValues
* **Raises:**
  **ValueError** – invalid public variable type: Raises an error when a public variabel element is included inside
      the secrets dictionary.

### Example

```py3
import py_nillion_client as nillion

sec_uinteger = nillion.SecretUnsignedInteger(1)
sec_integer = nillion.SecretInteger(1)
sec_array = nillion.SecretArray([
    nillion.SecretInteger(1),
    nillion.SecretInteger(2),
])

secrets = nillion.NadaValues({
    "sec_uinteger": sec_uinteger,
    "sec_integer": sec_integer,
    "sec_array": sec_array
 })
```



#### dict()

Returns the stored values as a dictionary.

* **Returns:**
  Native python dictionary with mapped encoded values
* **Return type:**
  dict

### Example

```py3
values = nillion.NadaValues({
    "sec_uinteger": sec_uinteger,
    "sec_integer": sec_integer,
    "sec_array": sec_array
 })

print("Values:\n", values.dict())
```

```text
&gt;&gt;&gt; Values:
&gt;&gt;&gt;  {'sec_array': , 'sec_uinteger': , 'sec_integer': }
```



### *class* py_nillion_client.NillionClient(node_key, bootnodes, connection_mode, user_key, whitelist=None)

The `NillionClient` class serves as
the primary tool for connecting to the Nillion
network and facilitating various operations.
It allows users to interact with the Nillion
network efficiently, including for the following actions:

1. Store Nada programs (`store_program()`);
2. Store values (`store_values()`);
3. Update values (`update_values()`);
4. Retrieve values (`retrieve_value()`);
5. Delete values (`delete_values()`);
6. Compute a Nada program over some secrets (`compute()`);
7. Receive compute results (`next_compute_event()`).

An instance of `NillionClient` can embody either
a dealer node, responsible for providing inputs, or a result
node, tasked with receiving computation outputs. Under the hood,
this spawns a set of actors and acts as a node in the network that
has both dealer and result node capabilities.

Note: multiple instances can be employed concurrently if required;
however, it is imperative that each instance possesses
a distinct `NodeKey` when utilized within the
same interpreter.

* **Parameters:**
  * **node_key** (*NodeKey*) – A private key to use for the Client node.
  * **bootnodes** (*list* *of* *str*) – A list of nodes belonging to the network (other may be discovered later).
  * **connection_mode** (*ConnectionMode*) – How to connect to the network, either directly (indicating a listen address), through a relay server or as a dialer client.
  * **user_key** (*UserKey*) – User credentials to use.
  * **whitelist** (*list* *of* *str* *,* *optional*) – A list of peer ids to connecto to/from.
* **Returns:**
  Instance of the NillionClient and an event receiver channel used to retrieve computation results.
* **Return type:**
  NillionClient

### Example

For further information about the structure of the objects used by the
constructor, we refer to the quickstart guide .

```py3
import py_nillion_client as nillion

node_key = nillion.NodeKey.from_file("/path/to/node/key")
bootnodes = [os.getenv("NILLION_BOOTNODE_MULTIADDRESS")]
# e.g. bootnodes = ["/ip4/127.0.0.1/tcp/45305/p2p/11E4UiiRgsJILZYeushYEOQyMCrJLeRTaonNxBMBq4oF6bJ6MfoF"]
connection_mode = nillion.ConnectionMode.dialer()
user_key = nillion.UserKey.from_file("/path/to/user/key")

client = nillion.NillionClient(
      node_key,
      bootnodes,
      nillion.ConnectionMode.relay(),
      user_key,
  )
```



#### build_version *= 'client/0.1.0 (commit: 2454586480c93ea9664ddc563cac902e0bb03278; ts: 1720014719; date: 2024-07-03T13:51:59+00:00)'*



#### cluster_information(cluster_id)

Get information about a cluster by returning an instance of the `ClusterDescriptor` class.
We can access various information about the cluster through its methods.

* **Parameters:**
  **cluster_id** (*str*) – UUID of the targeted preprocessing cluster.
* **Return type:**
  An instance of `ClusterDescriptor` populated with the cluster information.

### Example

```py3
await client.cluster_information(cluster_id)
```



#### compute(cluster_id, bindings, store_ids, values, receipt)

Requests a compute action in the Nillion Network for a specific Nada
program under a set of secrets.

Note: This method does not directly output the result of the Nada
program. Instead, it returns a computation UUID. To obtain the result,
you’ll need to fetch it separately. The UUID, in conjunction with the
event provided by the corresponding NillionClient instance channel,
allows you to retrieve the computation results. Please refer to the e
xample below for clarification.

* **Parameters:**
  * **cluster_id** (*str*) – UUID of the targeted preprocessing cluster
  * **bindings** (*ProgramBindings*) – The prepared program specification and secret bindings
  * **secrets** (*Secrets*) – Additional secrets to use for the computation
  * **store_ids** (*list* *of* *str*) – List of the store IDs (uuids) of the secrets to use for the computation
  * **public_variables** (*PublicVariables*) – Public variables to use for the computation
  * **receipt** (*PaymentReceipt*) – The receipt for the payment made.
* **Returns:**
  A computation UUID.
* **Return type:**
  str

### Example

```py3
import py_nillion_client as nillion

store_payment_receipt   = ... # quote + pay
compute_payment_receipt = ... # quote + pay

bindings = nillion.ProgramBindings(args.program_id)
bindings.add_input_party("Dealer", client.party_id)
store_id = await client.store_values(
    args.cluster_id, bindings, args.store_values, None, store_payment_receipt
)

bindings = nillion.ProgramBindings(args.program_id)
bindings.add_input_party("Dealer", client.party_id)
bindings.add_output_party("Result", client.party_id)

uuid = await client.compute(
    args.cluster_id,
    bindings,
    [store_id],
    args.values,
    compute_payment_receipt
)

while True:
    event = await client.next_compute_event()
    if isinstance(event, nillion.ComputeScheduledEvent):
        pass
    if isinstance(event, nillion.ComputeFinishedEvent) and event.uuid == uuid:
        print(
            f"Received computation result for {event.uuid}, result = {event.result}"
        )
        print(
            f"Received computation result value for {event.uuid}, value = {event.result.value}"
        )
        break
```



#### delete_values(cluster_id, store_id)

Delete existing values.

* **Parameters:**
  * **cluster_id** (*str*) – UUID of the targeted preprocessing cluster
  * **store_id** (*str*) – The identifier of the stored secret to be deleted (returned when calling `store_values()`)
* **Return type:**
  None

### Example

```py3
await client.delete_values(cluster_id, store_id)
```



#### next_compute_event()

Returns the state of the computation in the Nillion Network.

If the event is from an ongoing computation, it only includes
the corresponding UUID from the  `compute()` process.
Once the computation is complete, the event includes both the
UUID and the computation result (`FinalResult`).

* **Returns:**
  Either event type will pull the next compute event from the internal
  result channel which can be inspected to determine if compute operation
  has completed
* **Return type:**
  ComputeScheduledEvent | ComputeFinishedEvent

### Example

```py3
uuid = await client.compute(
    args.cluster_id,
    bindings,
    [store_id],
    args.compute_secrets,
    args.compute_public_variables,
    payment_receipt
)

while True:
    event = await client.next_compute_event()
    if isinstance(event, nillion.ComputeScheduledEvent):
        print(
            f"Waiting for computation with UUID={event.uuid} to finish."
        )
    if isinstance(event, nillion.ComputeFinishedEvent) and event.uuid == uuid:
        print(
            f"Received computation result for {event.uuid}, result = {event.result}"
        )
        print(
            f"Received computation result value for {event.uuid}, value = {event.result.value}"
        )
        break
```



#### party_id

Returns the SDK client’s instance party ID, which can be used
by the client to create program bindings (`ProgramBindings`,
check examples).

Effectively, the party ID is equivalent to the Peer ID
used within libp2p for inter-node communication. It is a hash
generated from the public key of the node’s key-pair (`NodeKey`). Not to
be confused with the `user_id()` which is generated from the
public key of the user’s key-pair (`UserKey`).

Read more about party ID
and peer ID.

* **Returns:**
  UUID of libp2p party identifier.
* **Return type:**
  str

### Example

```py3
print("Party ID:", client.party_id)
```



#### request_price_quote(cluster_id, operation)

Request a price quote for an operation. This method
asks the network to calculate a price quote for the
specified operation. Payment and submission of the
operation is the client’s responsibility and must be
done before the quote expires.

Note that the nodes of your target Nillion petnet cluster
will be bound to a single payment network (eg. testnet).

* **Parameters:**
  * **cluster_id** (*str*) – UUID of the targeted preprocessing cluster
  * **operation** (*Operation*) – The operation to get a price quote for.
* **Returns:**
  The price quoted for this operation.
* **Return type:**
  PriceQuote

### Example

```py3
secrets = py_nillion_client.Secrets(
    {
         "foo": py_nillion_client.SecretInteger(42),
         "bar": py_nillion_client.SecretBlob(bytearray(b"hello world")),
    }
)
operation = py_nillion_client.Operation.store_values(secrets)
quote = await client.request_price_quote(cluster_id, operation)
# this is where you activate your payment method
txn_hash = yourapp.your_payment_method_in_unil(quote.cost)
payment_receipt = nillion.PaymentReceipt(quote, txn_hash)
store_id = await client.store_values(
    cluster_id, secrets, None, payment_receipt
)
```

```py3
updated_secrets = nillion.Secrets({"foo": nillion.SecretInteger(42)})
operation = py_nillion_client.Operation.update_values(updated_secrets)
quote = await client.request_price_quote(cluster_id, operation)
# this is where you activate your payment method
txn_hash = yourapp.your_payment_method_in_unil(quote.cost)
payment_receipt = nillion.PaymentReceipt(quote, txn_hash)
 await client.update_values(
     args.cluster_id, store_id, update_values, payment_receipt
 )
```

```py3
# compute quote is based on compute time secrets; stored secrets have already
# been paid
secrets = nillion.Secrets({"fortytwo": nillion.SecretInteger(42)})
quote = py_nillion_client.Operation.compute(program_id, secrets)
# this is where you activate your payment method
txn_hash = yourapp.your_payment_method_in_unil(quote.cost)
payment_receipt = nillion.PaymentReceipt(quote, txn_hash)

uuid = await client.compute(
    args.cluster_id,
    bindings,
    [store_id],
    secrets,
    py_nillion_client.PublicVariables({}),
    compute_payment_receipt
)
```

```py3
value_name = "fortytwo"
operation = py_nillion_client.Operation.retrieve_value()
quote = await client.request_price_quote(cluster_id, operation)
# this is where you activate your payment method
txn_hash = yourapp.your_payment_method_in_unil(quote.cost)
payment_receipt = nillion.PaymentReceipt(quote, txn_hash)
result = await client.retrieve_value(cluster_id, args.store_id, value_name, payment_receipt)
```

```py3
program_name = "myprogram"
program_mir_path = f"./your/compiled/programs/{program_name}.nada.bin"
operation = py_nillion_client.Operation.store_program(program_mir_path)
quote = await client.request_price_quote(cluster_id, operation)
# this is where you activate your payment method
txn_hash = yourapp.your_payment_method_in_unil(quote.cost)
payment_receipt = nillion.PaymentReceipt(quote, txn_hash)
program_id = await client.store_program(
    args.cluster_id, program_name, program_mir_path, payment_receipt
)
```

```py3
operation = py_nillion_client.Operation.retrieve_permissions()
quote = await client.request_price_quote(cluster_id, operation)
# this is where you activate your payment method
txn_hash = yourapp.your_payment_method_in_unil(quote.cost)
payment_receipt = nillion.PaymentReceipt(quote, txn_hash)
permissions = await client.retrieve_permissions(cluster_id, store_id, payment_receipt)
```

```py3
operation = py_nillion_client.Operation.update_permissions()
quote = await client.request_price_quote(cluster_id, operation)
# this is where you activate your payment method
txn_hash = yourapp.your_payment_method_in_unil(quote.cost)
payment_receipt = nillion.PaymentReceipt(quote, txn_hash)
permissions = nillion.Permissions.default_for_user(client.user_id())
permissions.add_retrieve_permissions(set([args.retriever_user_id]))
updated_store_id = await client.update_permissions(args.cluster_id, store_id, permissions, payment_receipt)
```


#### retrieve_permissions(cluster_id, store_id, receipt)

Retrieve permissions for a group of secrets in the Nillion Network

* **Parameters:**
  * **cluster_id** (*str*) – UUID of the targeted preprocessing cluster
  * **store_id** (*str*) – The secrets’ store ID (returned when calling `store_values()`)
  * **receipt** (*PaymentReceipt*) – The receipt for the payment made.
* **Returns:**
  The permissions
* **Return type:**
  Permissions

### Example

```py3
permissions = await client.retrieve_permissions(cluster_id, store_id, payment_receipt)
```



#### retrieve_value(cluster_id, store_id, value_id, receipt)

Retrieve a value stored in the Nillion Network.

To retrieve the value, you need to use the value
attribute on the second element of the output tuple.
Check the example below to read the value
of a secret integer.

* **Parameters:**
  * **cluster_id** (*str*) – UUID of the targeted preprocessing cluster.
  * **store_id** (*str*) – The value’s store ID (returned when calling `store_values()`).
  * **value_id** (*str*) – The value’s ID.
  * **receipt** (*PaymentReceipt*) – The receipt for the payment made.
* **Returns:**
  The value ID as a UUID as well as the value itself.
* **Return type:**
  tuple

### Example

```py3
value_name = "fortytwo"
result = await client.retrieve_value(cluster_id, args.store_id, value_name, payment_receipt)
print("Value ID: ", result[0])
print("Value: ", result[1])
```

```text
&gt;&gt;&gt; Value ID: 2424a65c-d20c-4635-b864-06c064188dd4
&gt;&gt;&gt; Value: 42
```



#### store_program(cluster_id, program_name, program_mir_path, receipt)

Store programs in the Nillion Network.

The program_id used by `store_values()` and `compute()` can be
built as follows:

```py3
client.user_id + "/" + program_name
```

where client is a `NillionClient` instantiation and program_name
is the name of the program.

* **Parameters:**
  * **cluster.** ( *\* cluster_id - UUID* *of* *the targeted preprocessing*) – 
  * **store.** ( *\* program_name - Name* *of* *the program to*) – 
  * **stored.** ( *\* program_mir_path - Path to the MIR program being*) – 
  * **made.** ( *\* receipt - The receipt for the payment*) – 
* **Returns:**
  The program identifier associated with the program
* **Return type:**
  str

### Example

```py3
program_name = "prog"
program_mir_path = "programs-compiled/prog.nada.bin"

# Store program in the Network
print(f"Storing program in the network: {program_name}")
program_id = await client.store_program(
    args.cluster_id, program_name, program_mir_path, payment_receipt
)
print("program_id is: ", program_id)
```



#### store_values(cluster_id, values, permissions, receipt)

Store values in the Nillion Network.

* **Parameters:**
  * **cluster_id** (*str*) – UUID of the targeted preprocessing cluster
  * **secrets** (*Secrets*) – The secrets to store; this is a hash map indexed by secret IDs
  * **permissions** (*Permissions* *,* *optional*) – permissions to be set. By default the user has update and retrieve permissions on the secret as well as compute permissions for the program bound, should there be a program bound.
  * **receipt** (*PaymentReceipt*) – The receipt for the payment made.
* **Returns:**
  A store identifier that can be used to retrieve the secret.
* **Return type:**
  str
* **Raises:**
  **TypeError** – When using bindings, the input party name provided (e.g. “InputPartyName”) must
  match the input party name in the Nada program. Otherwise, we get a TypeError.

### Example

Here are some examples of how to use this function. Note that to
give permissions we use the User ID and to bind a secret to a
program we use the Party ID.

```py3
###########################
# Example 1 - Simple      #
###########################
# Notice that both bindings and permissions are set to None.
# Bindings need to be set to use secrets in programs
# Permissions need to be set to allow users other than the secret creator to use the secret
secrets = nillion.Secrets({"fortytwo": nillion.SecretInteger(42)})
store_id = await client.store_values(
    cluster_id, secrets, None, payment_receipt
)

###########################
# Example 2 - Permissions #
###########################
permissions = nillion.Permissions.default_for_user(client.user_id)
permissions.add_retrieve_permissions(set([args.retriever_user_id]))
values = nillion.NadaValues({"fortytwo": nillion.SecretInteger(42)})
store_id = await client.store_values(
    cluster_id, secrets, permissions, payment_receipt
)
```



#### update_permissions(cluster_id, store_id, permissions, receipt)

Update permissions for a group of secrets in the Nillion Network

* **Parameters:**
  * **cluster_id** (*str*) – UUID of the targeted preprocessing cluster
  * **store_id** (*str*) – The secrets’ store ID (returned when calling `store_values()`)
  * **permissions** (*Permissions* *,* *optional*) – permissions to be set.
  * **receipt** (*PaymentReceipt*) – The receipt for the payment made.
* **Returns:**
  The unique identifier of this update operation ID that can be used to help troubleshoot issues with this operation.
* **Return type:**
  str

### Example

```py3
# Store
store_payment_receipt = ... # quote + pay for action
secrets = nillion.Secrets({"fortytwo": nillion.SecretInteger(42)})
store_id = await client.store_values(
  cluster_id, None, secrets, None, store_payment_receipt
)

update_payment_receipt = ... # quote + pay for action
# Update permissions
permissions = nillion.Permissions.default_for_user(client.user_id())
permissions.add_retrieve_permissions(set([args.retriever_user_id]))
updated_store_id = await client.update_permissions(args.cluster_id, store_id, permissions, update_payment_receipt)

print("Stored secret id: ", store_id)
print("Updated stored secret id: ", updated_store_id)
```

```text
&gt;&gt;&gt; Stored secret id: 3c504263-fd3f-40b8-8a1d-9056b7846637
&gt;&gt;&gt; Updated stored secret id: ccdb8036-2635-40d9-9144-2cc89551fce9
```



#### update_values(cluster_id, store_id, values, receipt)

Update values already stored in the Nillion Network.

* **Parameters:**
  * **cluster_id** (*str*) – UUID of the targeted preprocessing cluster.
  * **store_id** (*str*) – The secret’s store ID (returned when calling `store_values()`).
  * **values** (*Secrets*) – The values to update; this is a hash map indexed by secret IDs.
  * **receipt** (*PaymentReceipt*) – The receipt for the payment made.
* **Returns:**
  The unique identifier of this update operation.
* **Return type:**
  str

### Example

```py3
updated_secrets = nillion.Secrets({"fortytwo": nillion.SecretInteger(42)})
payment_receipt = ... # quote + pay
await client.update_values(
    args.cluster_id, store_id, update_values, payment_receipt
)
```



#### user_id

Returns SDK client’s user ID, which is the public user
identifier.

The user ID is used to:

1. Generate a program ID (identification of a program in the Nillion Network). Check example in `store_program()`;
2. Grant a user permission to use secrets. Check `Permissions`.

It is a hash generated from the public key of the user’s key-pair (`UserKey`). Not to
be confused with the `party_id()` which is the generated from the
public key of the node’s key-pair (`NodeKey`).

Read more about user ID
in the Nillion Docs.

* **Returns:**
  Client’s user identifier.
* **Return type:**
  str

### Example

```py3
print("Party ID:", client.user_id)
```



### *class* py_nillion_client.NodeKey

This is a `NodeKey` class that
contains a private key used by the
underlying libp2p to form multiaddress and
identity secrets. This class is consumed by `NillionClient`
class to initialize a client.

This object’s constructors can be used via the following
class methods:

1. From string encoded in Base58 (`from_base58()`);
2. From a file (`from_file()`);
3. From a seed (`from_seed()`).

### Example

```py3
from py_nillion_client import NodeKey
node_key = NodeKey.from_seed('my_seed')
```



#### from_base58()

Decodes a private key from a string encoded in Base58.

* **Parameters:**
  **contents** (*str*) – A base58 string.
* **Return type:**
  NodeKey

### Example

```py3
from py_nillion_client import NodeKey
node_key = NodeKey.from_base58()
```



#### from_file()

Loads a file containing a private key.

* **Parameters:**
  **path** (*str*) – The filesystem path to the file containing
  a base58 string.
* **Return type:**
  NodeKey

### Example

```py3
from py_nillion_client import NodeKey
node_key = NodeKey.from_file('/path/to/nodekey.base58')
```



#### from_seed()

Generates a private key using a seed.

* **Parameters:**
  **path** (*str*) – A seed string.
* **Return type:**
  NodeKey

### Example

```py3
from py_nillion_client import NodeKey
node_key = NodeKey.from_seed('my_seed')
```



### *class* py_nillion_client.Operation

An operation that we want to run on the network.



#### compute(values)

Construct a new update values operation.

* **Parameters:**
  * **program_id** (*str*) – The identifier of the program to be invoked.
  * **values** (*NadaValues*) – The values to be stored.
* **Return type:**
  Operation



#### retrieve_permissions()

Construct a new retrieve permissions operation.

* **Return type:**
  Operation



#### retrieve_value()

Construct a new retrieve value operation.

* **Return type:**
  Operation



#### store_program()

Construct a new store program operation.

* **Return type:**
  Operation



#### store_values(ttl_days)

Construct a new store values operation.

* **Parameters:**
  * **values** (*Secrets*) – The values to be stored.
  * **ttl_days** (*int*) – The time to live for the values in days
* **Return type:**
  Operation



#### update_permissions()

Construct a new update permissions operation.

* **Return type:**
  Operation



#### update_values(ttl_days)

Construct a new update values operation.

* **Parameters:**
  * **values** (*NadaValues*) – The values to be stored.
  * **ttl_days** (*int*) – The time to live for the values in days.
* **Return type:**
  Operation



### *exception* py_nillion_client.PaymentError

Payment-related errors: missing funds or other errors



#### args



#### with_traceback()

Exception.with_traceback(tb) –
set self._\_traceback_\_ to tb and return self.



### *class* py_nillion_client.PaymentReceipt(quote, transaction_hash)

A payment receipt.

Payment receipt are used to indicate that you made the payment for a price quote.



### *exception* py_nillion_client.PermissionError

Missing permission errors



#### args



#### with_traceback()

Exception.with_traceback(tb) –
set self._\_traceback_\_ to tb and return self.



### *class* py_nillion_client.Permissions

This is a `Permissions` class used to
manage permissions of stored secrets and compute.
Permissions need to be set to allow users other
than the secret creator to use the secret. This
class is used either by `NillionClient.store_values()`
or by `NillionClient.update_permissions()`.

The default instantiation of this class is given by
the method `default_for_user()`.

### Example

See examples
on method `request_price_quote()`.



#### add_compute_permissions(compute)

Add compute permissions to the `Permissions` instance for the
user IDs provided.

* **Parameters:**
  **compute** (*dict* *of* *set* *of* *str*) – Dict keyed by the user_id of the targets where the value is a set of str
  specifying which program IDs to permit compute for.

### Example

```py3
import py_nillion_client as nillion

program_id = client.user_id() + "/" + "program_name"
permissions = nillion.Permissions.default_for_user(client.user_id)
permissions.add_compute_permissions({
    args.compute_user_id: {program_id},
})
```



#### add_delete_permissions(delete)

Add delete permissions to the `Permissions` instance for the
given set of user IDs

* **Parameters:**
  **delete** (*set* *of* *str*) – Desired targets to permit delete `Secrets`.

### Example

```py3
import py_nillion_client as nillion

permissions = nillion.Permissions.default_for_user(client.user_id)
permissions.add_delete_permissions(set([args.delete_user_id]))
```



#### add_retrieve_permissions(retrieve)

Add retrieve permissions to the `Permissions` instance for the
given set of user IDs.

* **Parameters:**
  **retrieve** (*set* *of* *str*) – Desired targets to permit read of stored programs or retrieve `Secrets`

### Example

```py3
import py_nillion_client as nillion

permissions = nillion.Permissions.default_for_user(client.user_id)
permissions.add_retrieve_permissions(set([args.retriever_user_id]))
```



#### add_update_permissions(update)

Add update permissions to the `Permissions` instance for the
given set of user IDs.

* **Parameters:**
  **update** (*set* *of* *str*) – Desired targets to permit update `Secrets`.

### Example

```py3
import py_nillion_client as nillion

permissions = nillion.Permissions.default_for_user(client.user_id)
permissions.add_update_permissions(set([args.update_user_id]))
```



#### *static* default_for_user(user_id)

Returns the default permission set for the given user ID.

Note: this method can be used to clear/revoke permissions
previously granted by the user.

* **Parameters:**
  **user_id** (*str*) – Desired target user ID.
* **Return type:**
  Permissions

### Example

```py3
import py_nillion_client as nillion

permissions = nillion.Permissions.default_for_user(client.user_id)
```



#### is_compute_allowed(user_id, program)

Returns true if user has compute permissions for every single program.

* **Return type:**
  bool

### Example

```py3
program_id = client.user_id() + "/" + "program_name"
compute_allowed = permissions.is_compute_allowed(user_client.user_id(), program_id)
```



#### is_delete_allowed(user_id)

Returns true if user has delete permissions.

* **Return type:**
  bool

### Example

```py3
import py_nillion_client as nillion

permissions = nillion.Permissions.default_for_user(client.user_id)
delete_allowed = permissions.is_delete_allowed(user_client.user_id)
print("Default user is always allowed: ", delete_allowed)
```

```text
&gt;&gt;&gt; Default user is always allowed: True
```



#### is_retrieve_allowed(user_id)

Returns true if user has retrieve permissions.

* **Return type:**
  bool

### Example

```py3
import py_nillion_client as nillion

permissions = nillion.Permissions.default_for_user(client.user_id)
retrieve_allowed = permissions.is_retrieve_allowed(user_client.user_id)
print("Default user is always allowed: ", retrieve_allowed)
```

```text
&gt;&gt;&gt; Default user is always allowed: True
```



#### is_retrieve_permissions_allowed(user_id)

Checks if user is allowed to retrieve the permissions.

* **Return type:**
  bool

### Example

```py3
retrieve_permissions_allowed = permissions.is_retrieve_permissions_allowed(user_client.user_id())
```



#### is_update_allowed(user_id)

Returns true if user has update permissions.

* **Return type:**
  bool

### Example

```py3
import py_nillion_client as nillion

permissions = nillion.Permissions.default_for_user(client.user_id)
update_allowed = permissions.is_update_allowed(user_client.user_id)
print("Default user is always allowed: ", update_allowed)
```

```text
&gt;&gt;&gt; Default user is always allowed: True
```



#### is_update_permissions_allowed(user_id)

Checks if user is allowed to update the permissions.

* **Return type:**
  bool

### Example

```py3
update_permissions_allowed = permissions.is_update_permissions_allowed(user_client.user_id())
```



### *class* py_nillion_client.PriceQuote

A price quote for an operation to be run in the network.

Quotes can be requested by using `NillionClient.request_price_quote()`.



#### cost

Gets the cost for the quoted operation in unil units.
The payment associated for the quoted operation must
transfer the total amount for it to be considered a valid
payment.

* **Returns:**
  The cost for this quote.
* **Return type:**
  OperationCost

### Example

```py3
print("Total Cost:", quote.cost.total)
```



#### expires_at

Gets the expiration time for this quote in seconds
since the unix epoch. The payment and the operation
execution must be invoked before this deadline is
hit, otherwise the network will reject the operation
request.

* **Returns:**
  The expiration time for this quote.
* **Return type:**
  int

### Example

```py3
print("Expiration time:", quote.expires_at)
```



#### nonce

Gets the nonce for this quote. This nonce must be used
as part of the payment transaction.

* **Return type:**
  bytearray

### Example

```py3
print("Nonce:", quote.nonce)
```



### *class* py_nillion_client.ProgramBindings(program_id)

This is a `ProgramBindings` class used to
bind compute parties to explicit peer IDs (provided
by the `NillionClient.party_id()`). Bindings
need to be set to use secrets in programs

This class is used by the `NillionClient.store_values()`
and `NillionClient.compute()` methods.

* **Parameters:**
  **program_id** (*str*) – The identifier of the program to bind to.
* **Returns:**
  An instance of `ProgramBindings`.
* **Return type:**
  ProgramBindings

### Example

```py3
import py_nillion_client as nillion

# program_id looks like: "/"
bindings = nillion.ProgramBindings(args.program_id)

# Add bindings when storing a secret
bindings.add_input_party("InputPartyName", client.party_id)
secrets = nillion.Secrets({"fortytwo": nillion.SecretInteger(42)})
store_id = await client.store_values(
    cluster_id, bindings, secrets, None
)

# Add bindings for compute action
bindings = nillion.ProgramBindings(args.program_id)
bindings.add_input_party("InputPartyName" client.party_id)
bindings.add_output_party("OutputPartyName", client.party_id)
```



#### add_input_party(name, id)

Bind an input party with a name to a specific program.

* **Parameters:**
  * **name** (*str*) – The logical name of the input party in the Nada program.
  * **id** (*str*) – The party identifier.

### Example

```py3
bindings = nillion.ProgramBindings(args.program_id)
bindings.add_input_party("InputPartyName" client.party_id)
```



#### add_output_party(name, id)

Bind an output party with a name to a specific program.

* **Parameters:**
  * **name** (*str*) – The name of the output party in the Nada program.
  * **id** (*str*) – The party identifier.

### Example

```py3
bindings = nillion.ProgramBindings(args.program_id)
bindings.add_output_party("OutputPartyName", client.party_id)
```



### *exception* py_nillion_client.ProgramError

Program not found or invalid



#### args



#### with_traceback()

Exception.with_traceback(tb) –
set self._\_traceback_\_ to tb and return self.



### *exception* py_nillion_client.ResultError

Errors related to fetching computation results



#### args



#### with_traceback()

Exception.with_traceback(tb) –
set self._\_traceback_\_ to tb and return self.



### *class* py_nillion_client.SecretBlob(value)

This is a `SecretBlob` class used to
encode a secret as a blob.

Note: \_\_eq_\_ method is implemented to allow comparing two blobs.

* **Parameters:**
  **value** (*bytearray*) – Value of the secret blob as a bytearray.
* **Returns:**
  Instance of the `SecretBlob` class.
* **Return type:**
  SecretBlob
* **Raises:**
  **VTypeError** – argument ‘value’: Raises an error when a non-bytearray object is provided.

### Example

```py3
import py_nillion_client as nillion

gm_blob_ba = bytearray("gm, builder!", "utf-8")
gm_blob = py_nillion_client.SecretBlob(gm_blob_ba)
ready_blob_ba = bytearray("ready to build!", "utf-8")
ready_blob = py_nillion_client.SecretBlob(ready_blob_ba)

print("Are these blobs the same?", gm_blob == ready_blob)
```

```text
&gt;&gt;&gt; Are these blobs the same?  False
```



#### value

Getter and setter for the value inside a
`SecretBlob` instance.

* **Returns:**
  The value of the secret blob.
* **Return type:**
  int

### Example

```py3
gm_blob_ba = bytearray("gm, builder!", "utf-8")
blob = nillion.SecretBlob(gm_blob_ba)
print("Blob is: ", blob.value)
ready_blob_ba = bytearray("ready to build!", "utf-8")
blob.value = ready_blob_ba
print("Blob is now: ", blob.value)
```

```text
&gt;&gt;&gt; Blob is:  bytearray(b'gm, builder!')
&gt;&gt;&gt; Blob is now:  bytearray(b'ready to build!')
```



### *class* py_nillion_client.SecretInteger(value)

This is a `SecretInteger` class used to
encode a secret as a integer.

Note: \_\_eq_\_ method is implemented to allow comparing two integers.

* **Parameters:**
  **value** (*int*) – Value of the secret encoded element.
* **Returns:**
  Instance of the `SecretInteger` class.
* **Return type:**
  SecretInteger

### Example

```py3
import py_nillion_client as nillion

sec_integer_1 = nillion.SecretInteger(1)
sec_integer_2 = nillion.SecretInteger(2)

print("Are the secret integers the same? ", sec_integer_1 == sec_integer_2)
```

```text
&gt;&gt;&gt; Are the secret integers the same?  False
```

:::warning
Providing zero as `SecretInteger` leaks information.
:::


#### value

Getter and setter for the value inside a
`SecretInteger` instance.

* **Returns:**
  The value of the secret integer.
* **Return type:**
  int

### Example

```py3
sec_integer = nillion.SecretInteger(1)
print("Secret integer is: ", sec_integer.value)
sec_integer.value = 2
print("Secret integer is now: ", sec_integer.value)
```

```text
&gt;&gt;&gt; Secret integer is:  1
&gt;&gt;&gt; Secret integer is now:  2
```



### *class* py_nillion_client.SecretUnsignedInteger(value)

This is a `SecretUnsignedInteger` class used to
encode a secret as an unsigned integer.

Note: \_\_eq_\_ method is implemented to allow
comparing two unsigned integers.

* **Parameters:**
  **value** (*int*) – Value of the secret encoded element.
* **Returns:**
  Instance of the `SecretUnsignedInteger` class.
* **Return type:**
  SecretUnsignedInteger
* **Raises:**
  **OverflowError** – can’t convert negative int to unsigned: Raises an error when a negative integer value is used.

### Example

```py3
import py_nillion_client as nillion

sec_uinteger_1 = nillion.SecretUnsignedInteger(1)
sec_uinteger_2 = nillion.SecretUnsignedInteger(2)

print("Are the secret unsigned integers the same? ", sec_uinteger_1 == sec_uinteger_2)
```

```text
&gt;&gt;&gt; Are the secret unsigned integers the same?  False
```

:::warning
Providing zero as `SecretUnsignedInteger` leaks information.
:::


#### value

Getter and setter for the value inside a
`SecretUnsignedInteger` instance.

* **Returns:**
  The value of the secret unsigned integer.
* **Return type:**
  int

### Example

```py3
sec_uinteger = nillion.SecretUnsignedInteger(1)
print("Secret unsigned integer is: ", sec_uinteger.value)
sec_uinteger.value = 2
print("Secret unsigned integer is now: ", sec_uinteger.value)
```

```text
&gt;&gt;&gt; Secret unsigned integer is:  1
&gt;&gt;&gt; Secret unsigned integer is now:  2
```



### *exception* py_nillion_client.TimeoutError

Timed out



#### args



#### with_traceback()

Exception.with_traceback(tb) –
set self._\_traceback_\_ to tb and return self.



### *class* py_nillion_client.UnsignedInteger(value)

This is a `UnsignedInteger` class used to
encode a public variable value as an unsigned integer.

Note: \_\_eq_\_ method is implemented to allow
to compare two unsigned integers.

* **Parameters:**
  **value** (*int*) – Value of the public encoded element.
* **Returns:**
  Instance of the `UnsignedInteger` class.
* **Return type:**
  UnsignedInteger
* **Raises:**
  **OverflowError** – can’t convert negative int to unsigned: Raises an error when a negative integer value is used.

### Example

```py3
import py_nillion_client as nillion

pub_uinteger_1 = nillion.UnsignedInteger(1)
pub_uinteger_2 = nillion.UnsignedInteger(2)

print("Are the public unsigned integers the same? ", pub_uinteger_1 == pub_uinteger_2)
```

```text
&gt;&gt;&gt; Are the public unsigned integers the same?  False
```



#### value

Getter and setter for the value inside a
`UnsignedInteger` instance.

* **Returns:**
  The value of the public unsigned integer.
* **Return type:**
  int

### Example

```py3
pub_uinteger = nillion.UnsignedInteger(1)
print("Public unsigned integer is: ", pub_uinteger.value)
pub_uinteger.value = 2
print("Public unsigned integer is now: ", pub_uinteger.value)
```

```text
&gt;&gt;&gt; Public unsigned integer is:  1
&gt;&gt;&gt; Public unsigned integer is now:  2
```



### *class* py_nillion_client.UserKey

This is a `UserKey` class that
contains the public and private keys for the user.
This class is used by `NillionClient`
class to initialize a client.

This object’s constructors can be used via the following
class methods:

1. From string encoded in Base58 (`from_base58()`);
2. From a file (`from_file()`);
3. From scratch (`generate()`);
4. From seed (`seed()`).



#### from_base58()

Loads public and private key from base 58 encoded data.

* **Parameters:**
  **contents** (*str*) – A base58 string.
* **Return type:**
  UserKey

### Example

```py3
from py_nillion_client import UserKey
user_key = UserKey.from_base58()
```



#### from_file()

Loads public and private key from a file.

* **Parameters:**
  **path** (*str*) – The filesystem path to the file containing
  a base58 string.
* **Return type:**
  UserKey

### Example

```py3
from py_nillion_client import UserKey
user_key = UserKey.from_file('/path/to/userkey.base58')
```



#### from_seed()

Generates a public and private key from a seed.

* **Parameters:**
  **seed** (*str*) – A seed string.
* **Return type:**
  UserKey

### Example

```py3
from py_nillion_client import UserKey
user_key = UserKey.from_seed('my_seed')
```



#### generate()

Generates a random public and private key.

* **Return type:**
  UserKey

### Example

```py3
from py_nillion_client import UserKey
user_key = UserKey.generate()
```



### py_nillion_client.create_payments_message(quote: PriceQuote, payer_address: str)

Create a payments message.

* **Parameters:**
  * **quote** (*PriceQuote*) – The price quote for the operation being paid for.
  * **sender_address** (*str*) – The nilchain address of the payer.
* **Returns:**
  A protobuf message to be used when building a payments transaction.
* **Return type:**
  MsgPayFor



### py_nillion_client.version()

Return the version of this SDK client.

* **Returns:**
  The version of this build.
* **Return type:**
  str

### Example

```py3
py_nillion_client.version()
``` -->
