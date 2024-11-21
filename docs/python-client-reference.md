<!-- # Python Client Reference

Nillion client.

<a id="nillion_client.Array"></a>

### *class* nillion_client.Array(value)

This is a [`Array`](#nillion_client.Array) class used to
encode a secret array of elements.

Note: \_\_len_\_ method is implemented to allow
getting the length of the array.

* **Parameters:**
  **value** (*list*) – List of secret encoded elements.
* **Returns:**
  Instance of the [`Array`](#nillion_client.Array) class.
* **Return type:**
  [Array](#nillion_client.Array)
* **Raises:**
  **ValueError** – invalid secret type: Raises an error when a public encoded element is included inside a
      secret array.

### Example

```py3
from nillion_client import Array, SecretInteger

secret_array = Array([ SecretInteger(1), SecretInteger(2) ])

print("The length of the array is: ", len(secret_array))
```

```text
>>> The length of the array is: 2
```

<a id="nillion_client.Array.value"></a>

#### value

Getter method for the value inside a
[`Array`](#nillion_client.Array) instance.

* **Returns:**
  List of secret encoded elements.
* **Return type:**
  list

### Example

```py3
print("My secret array: \n", secret_array.value)
```

```text
>>> My secret array:
>>>  [SecretInteger(1), SecretInteger(2)]
```

<a id="nillion_client.Boolean"></a>

### *class* nillion_client.Boolean(value)

This is a [`Boolean`](#nillion_client.Boolean) class used to encode a public variable value as an boolean.

* **Parameters:**
  **value** (*int*) – Value of the public encoded element.
* **Returns:**
  Instance of the [`Boolean`](#nillion_client.Boolean) class.
* **Return type:**
  [Boolean](#nillion_client.Boolean)

### Example

```py3
from nillion_client import Boolean

pub_boolean_1 = Boolean(True)
pub_boolean_2 = Boolean(False)

print("Are the public booleans the same? ", pub_boolean_1 == pub_boolean_2)
```

```text
>>> Are the public booleans the same?  False
```

<a id="nillion_client.Boolean.value"></a>

#### value

<a id="nillion_client.ComputeId"></a>

### nillion_client.ComputeId

alias of `UUID`

<a id="nillion_client.EcdsaDigestMessage"></a>

### *class* nillion_client.EcdsaDigestMessage(value)

This is a [`EcdsaDigestMessage`](#nillion_client.EcdsaDigestMessage) class used to
encode a secret as a blob.

* **Parameters:**
  **value** (*bytearray*) – Value of the secret blob as a bytearray.
* **Returns:**
  Instance of the [`EcdsaDigestMessage`](#nillion_client.EcdsaDigestMessage) class.
* **Return type:**
  [EcdsaDigestMessage](#nillion_client.EcdsaDigestMessage)
* **Raises:**
  **VTypeError** – argument ‘value’: Raises an error when a non-bytearray object is provided.

### Example

```py3
import py_nillion_client as nillion

gm_blob_ba = bytearray("gm, builder!", "utf-8")
gm_blob = nillion.EcdsaDigestMessage(gm_blob_ba)
ready_blob_ba = bytearray("ready to build!", "utf-8")
ready_blob = nillion.EcdsaDigestMessage(ready_blob_ba)

print("Are these blobs the same?", gm_blob == ready_blob)
```

```text
>>> Are these blobs the same?  False
```

<a id="nillion_client.EcdsaDigestMessage.value"></a>

#### value

Getter and setter for the value inside a
[`EcdsaDigestMessage`](#nillion_client.EcdsaDigestMessage) instance.

* **Returns:**
  The value of the secret blob.
* **Return type:**
  int

### Example

```py3
gm_blob_ba = bytearray("gm, builder!", "utf-8")
blob = nillion.EcdsaDigestMessage(gm_blob_ba)
print("Blob is: ", blob.value)
ready_blob_ba = bytearray("ready to build!", "utf-8")
blob.value = ready_blob_ba
print("Blob is now: ", blob.value)
```

```text
>>> Blob is:  bytearray(b'gm, builder!')
>>> Blob is now:  bytearray(b'ready to build!')
```

<a id="nillion_client.EcdsaPrivateKey"></a>

### *class* nillion_client.EcdsaPrivateKey(value)

This is a [`EcdsaPrivateKey`](#nillion_client.EcdsaPrivateKey) class used to
encode a secret bytearray as an ecdsa private key.

* **Parameters:**
  **value** (*bytearray*) – Value of the private ecdsa key as a bytearray.
* **Returns:**
  Instance of the [`EcdsaPrivateKey`](#nillion_client.EcdsaPrivateKey) class.
* **Return type:**
  [EcdsaPrivateKey](#nillion_client.EcdsaPrivateKey)
* **Raises:**
  **VTypeError** – argument ‘value’: Raises an error when a non-bytearray object is provided.

### Example

```py3
from nillion_client import EcdsaPrivateKey
import os

pk1_bytes = bytearray(os.urandom(32))
pk1 = EcdsaPrivateKey(pk1_bytes)
pk2_bytes = bytearray(os.urandom(32))
pk2 = EcdsaPrivateKey(pk2_bytes)

print("Are these ecdsa private keys the same?", pk1 == pk2)
```

```text
>>> Are these ecdsa private keys the same?  False
```

<a id="nillion_client.EcdsaPrivateKey.value"></a>

#### value

Getter and setter for the value inside a
[`EcdsaPrivateKey`](#nillion_client.EcdsaPrivateKey) instance.

* **Returns:**
  The value of the private ecdsa key.
* **Return type:**
  int

### Example

```py3
ecdas_pk_ba = bytearray(b'these are not random 32 bytes!!!')
ecdsa_pk = EcdsaPrivateKey(ecdas_pk_ba)
print("Ecdsa private key is: ", ecdsa_pk.value)
ecdsa_pk_ba_prime = bytearray(b'these are good random 32 bytes!!')
ecdsa_pk.value = ecdsa_pk_ba_prime
print("Ecdsa private key is now: ", ecdsa_pk.value)
```

```text
>>> Ecdsa private key is:  bytearray(b'these are not random 32 bytes!!!')
>>> Ecdsa private key is now:  bytearray(b'these are good random 32 bytes!!')
```

<a id="nillion_client.EcdsaSignature"></a>

### *class* nillion_client.EcdsaSignature(value)

This is a [`EcdsaSignature`](#nillion_client.EcdsaSignature) class used to
encode a secret bytearray as an ecdsa private key.

* **Parameters:**
  **value** (*bytearray*) – Value of the private ecdsa key as a bytearray.
* **Returns:**
  Instance of the [`EcdsaSignature`](#nillion_client.EcdsaSignature) class.
* **Return type:**
  [EcdsaSignature](#nillion_client.EcdsaSignature)
* **Raises:**
  **VTypeError** – argument ‘value’: Raises an error when a non-bytearray object is provided.

### Example

```py3
from nillion_client import EcdsaSignature
import os

r = bytearray(os.urandom(32))
s = bytearray(os.urandom(32))
sig = EcdsaSignature((r, s))
```

<a id="nillion_client.EcdsaSignature.value"></a>

#### value

Getter for the r inside a
[`EcdsaSignature`](#nillion_client.EcdsaSignature) instance.

* **Returns:**
  The value of the private ecdsa key.
* **Return type:**
  int

### Example

```py3
from nillion_client import EcdsaSignature
import os

r = bytearray(os.urandom(32))
s = bytearray(os.urandom(32))
signature = EcdsaSignature((r, s))
print("Ecdsa signature is: ", signature.value)
```

<a id="nillion_client.InputPartyBinding"></a>

### *class* nillion_client.InputPartyBinding(party_name, user)

Represents the binding of a named input party in a program to a user id

<a id="nillion_client.InputPartyBinding.from_proto"></a>

#### *static* from_proto(proto)

Constructs an instance from its protobuf representation

* **Return type:**
  [`InputPartyBinding`](#nillion_client.InputPartyBinding)

<a id="nillion_client.InputPartyBinding.party_name"></a>

#### party_name *: `str`*

<a id="nillion_client.InputPartyBinding.to_proto"></a>

#### to_proto()

Converts an instance to its protobuf representation

* **Return type:**
  `InputPartyBinding`

<a id="nillion_client.InputPartyBinding.user"></a>

#### user *: [`UserId`](#nillion_client.UserId)*

<a id="nillion_client.Integer"></a>

### *class* nillion_client.Integer(value)

This is a [`Integer`](#nillion_client.Integer) class used to
encode a public variable value as an integer.

* **Parameters:**
  **value** (*int*) – Value of the public encoded element.
* **Returns:**
  Instance of the [`Integer`](#nillion_client.Integer) class.
* **Return type:**
  [Integer](#nillion_client.Integer)

### Example

```py3
from nillion_client import Integer

pub_integer_1 = Integer(1)
pub_integer_2 = Integer(2)

print("Are the public integers the same? ", pub_integer_1 == pub_integer_2)
```

```text
>>> Are the public integers the same?  False
```

<a id="nillion_client.Integer.value"></a>

#### value

<a id="nillion_client.InternalError"></a>

### *exception* nillion_client.InternalError

Exception raised for internal errors in the library.

<a id="nillion_client.InternalError.args"></a>

#### args

<a id="nillion_client.InternalError.with_traceback"></a>

#### with_traceback()

Exception.with_traceback(tb) –
set self._\_traceback_\_ to tb and return self.

<a id="nillion_client.Network"></a>

### *class* nillion_client.Network(chain_id, chain_grpc_endpoint, nilvm_grpc_endpoint)

The network class contains network settings for the VmClient.

<a id="nillion_client.Network.chain_grpc_endpoint"></a>

#### chain_grpc_endpoint *: `str`*

<a id="nillion_client.Network.chain_id"></a>

#### chain_id *: `str`*

<a id="nillion_client.Network.devnet"></a>

#### *classmethod* devnet(nilvm_grpc_endpoint, chain_grpc_endpoint)

Initializes a network configuration compatible with a Nillion devnet.

By default the devnet starts without any SSL configuration so all of the tls_\* parameters are not required.

* **Parameters:**
  * **nilvm_grpc_endpoint** (`str`) – The Nillion network bootnode endpoint.
  * **chain_grpc_endpoint** (`str`) – The nilchain gRPC endpoint.
* **Return type:**
  [`Network`](#nillion_client.Network)

### Example

```py3
config = Network.devnet(
    nilvm_grpc_endpoint="http://127.0.0.1:37939",
    chain_grpc_endpoint="localhost:26649",
)
```

<a id="nillion_client.Network.from_config"></a>

#### *classmethod* from_config(network_name)

Load a network configuration from the filesystem.

This looks up a network configuration under ~/.config/nillion/networks. This allows easily loading
pre-existing network configurations, like the one dumped by nillion-devnet when it starts.

* **Parameters:**
  **network_name** (`str`) – The name of the network to be loaded.
* **Return type:**
  [`Network`](#nillion_client.Network)

### Example

```py3
config = Network.from_config("devnet")
```

<a id="nillion_client.Network.nilvm_grpc_endpoint"></a>

#### nilvm_grpc_endpoint *: `str`*

<a id="nillion_client.NilChainPayer"></a>

### *class* nillion_client.NilChainPayer(network, wallet_private_key, gas_limit, wallet_prefix='nillion', query_timeout_seconds=30)

A payer that uses the nilchain to perform payments.

<a id="nillion_client.NilChainPayer.prepare_msg"></a>

#### *static* prepare_msg(resource, address, amount)

Create a MsgPayFor transaction.

* **Parameters:**
  * **resource** (`bytes`) – The resource to pay for.
  * **address** (`str`) – The address of the payment sender.
  * **amount** (`int`) – The amount of unil that needs to be paid.
* **Return type:**
  `MsgPayFor`

<a id="nillion_client.NilChainPayer.submit_payment"></a>

#### *async* submit_payment(amount, resource, gas_limit=None)

Submits a payment to the chain.

This must submit a MsgPayFor transaction in nilchain using the given resource as a parameter.

* **Parameters:**
  * **amount** (`int`) – The amount of unil that needs to be paid.
  * **resource** (`bytes`) – The resource to pay for.
  * **gas_limit** (`Optional`[`int`]) – The gas limit to set for this operation.
* **Return type:**
  `str`

<a id="nillion_client.NilChainPayer.wallet_address"></a>

#### *property* wallet_address *: str*

Get the address associated with the payer’s wallet.

<a id="nillion_client.NilChainPrivateKey"></a>

### nillion_client.NilChainPrivateKey

alias of `PrivateKey`

<a id="nillion_client.NotFoundError"></a>

### *exception* nillion_client.NotFoundError

Exception raised when values are not found.

<a id="nillion_client.NotFoundError.args"></a>

#### args

<a id="nillion_client.NotFoundError.with_traceback"></a>

#### with_traceback()

Exception.with_traceback(tb) –
set self._\_traceback_\_ to tb and return self.

<a id="nillion_client.OutputPartyBinding"></a>

### *class* nillion_client.OutputPartyBinding(party_name, users)

Represents the binding of a named output party in a program to a user id

<a id="nillion_client.OutputPartyBinding.from_proto"></a>

#### *static* from_proto(proto)

Constructs an instance from its protobuf representation

* **Return type:**
  [`OutputPartyBinding`](#nillion_client.OutputPartyBinding)

<a id="nillion_client.OutputPartyBinding.party_name"></a>

#### party_name *: `str`*

<a id="nillion_client.OutputPartyBinding.to_proto"></a>

#### to_proto()

Converts an instance to its protobuf representation

* **Return type:**
  `OutputPartyBinding`

<a id="nillion_client.OutputPartyBinding.users"></a>

#### users *: `List`[[`UserId`](#nillion_client.UserId)]*

<a id="nillion_client.Payer"></a>

### *class* nillion_client.Payer

An abstraction over the mechanism to perform payments for operations in the Nillion network.

<a id="nillion_client.Payer.prepare_msg"></a>

#### *static* prepare_msg(resource, address, amount)

Create a MsgPayFor transaction.

* **Parameters:**
  * **resource** (`bytes`) – The resource to pay for.
  * **address** (`str`) – The address of the payment sender.
  * **amount** (`int`) – The amount of unil that needs to be paid.
* **Return type:**
  `MsgPayFor`

<a id="nillion_client.Payer.submit_payment"></a>

#### *abstract async* submit_payment(amount, resource, gas_limit=None)

Submits a payment to the chain.

This must submit a MsgPayFor transaction in nilchain using the given resource as a parameter.

* **Parameters:**
  * **amount** (`int`) – The amount of unil that needs to be paid.
  * **resource** (`bytes`) – The resource to pay for.
  * **gas_limit** (`Optional`[`int`]) – The gas limit to set for this operation.
* **Return type:**
  `str`

<a id="nillion_client.PermissionDeniedError"></a>

### *exception* nillion_client.PermissionDeniedError

Exception raised a permission to run an operation has been denied.

<a id="nillion_client.PermissionDeniedError.args"></a>

#### args

<a id="nillion_client.PermissionDeniedError.with_traceback"></a>

#### with_traceback()

Exception.with_traceback(tb) –
set self._\_traceback_\_ to tb and return self.

<a id="nillion_client.Permissions"></a>

### *class* nillion_client.Permissions(owner, retrieve=&lt;factory&gt;, update=&lt;factory&gt;, delete=&lt;factory&gt;, compute=&lt;factory&gt;)

The permissions associated with a set of stored values.

<a id="nillion_client.Permissions.allow_compute"></a>

#### allow_compute(user_id, program_id)

Allow a user to use these values on an execution of the given program id.

* **Return type:**
  [`Permissions`](#nillion_client.Permissions)

<a id="nillion_client.Permissions.allow_delete"></a>

#### allow_delete(user_id)

Allow a user to delete these values.

* **Return type:**
  [`Permissions`](#nillion_client.Permissions)

<a id="nillion_client.Permissions.allow_retrieve"></a>

#### allow_retrieve(user_id)

Allow a user to retrieve these values.

* **Return type:**
  [`Permissions`](#nillion_client.Permissions)

<a id="nillion_client.Permissions.allow_update"></a>

#### allow_update(user_id)

Allow a user to update these values.

* **Return type:**
  [`Permissions`](#nillion_client.Permissions)

<a id="nillion_client.Permissions.compute"></a>

#### compute *: `ComputePermissions`*

<a id="nillion_client.Permissions.defaults_for_user"></a>

#### *classmethod* defaults_for_user(user_id)

Returns a Permissions object with update, retrieve and delete permissions for a user.

* **Return type:**
  [`Permissions`](#nillion_client.Permissions)

<a id="nillion_client.Permissions.delete"></a>

#### delete *: `Set`[[`UserId`](#nillion_client.UserId)]*

<a id="nillion_client.Permissions.from_proto"></a>

#### *classmethod* from_proto(proto)

Create a Permissions instance from a ProtoPermissions message.

* **Return type:**
  [`Permissions`](#nillion_client.Permissions)

<a id="nillion_client.Permissions.owner"></a>

#### owner *: [`UserId`](#nillion_client.UserId)*

<a id="nillion_client.Permissions.retrieve"></a>

#### retrieve *: `Set`[[`UserId`](#nillion_client.UserId)]*

<a id="nillion_client.Permissions.to_proto"></a>

#### to_proto()

Convert this Permissions instance to a ProtoPermissions message.

* **Return type:**
  `Permissions`

<a id="nillion_client.Permissions.update"></a>

#### update *: `Set`[[`UserId`](#nillion_client.UserId)]*

<a id="nillion_client.PermissionsDelta"></a>

### *class* nillion_client.PermissionsDelta(retrieve=&lt;factory&gt;, update=&lt;factory&gt;, delete=&lt;factory&gt;, compute=&lt;factory&gt;)

A delta of permission grants/revokes to be applied

<a id="nillion_client.PermissionsDelta.compute"></a>

#### compute *: `ComputePermissionCommand`*

<a id="nillion_client.PermissionsDelta.delete"></a>

#### delete *: `PermissionCommand`*

<a id="nillion_client.PermissionsDelta.retrieve"></a>

#### retrieve *: `PermissionCommand`*

<a id="nillion_client.PermissionsDelta.update"></a>

#### update *: `PermissionCommand`*

<a id="nillion_client.PreprocessingElement"></a>

### *class* nillion_client.PreprocessingElement(value: int)

A preprocessing element.

<a id="nillion_client.PreprocessingElement.as_integer_ratio"></a>

#### as_integer_ratio()

Return integer ratio.

Return a pair of integers, whose ratio is exactly equal to the original int
and with a positive denominator.

```pycon
>>> (10).as_integer_ratio()
(10, 1)
>>> (-10).as_integer_ratio()
(-10, 1)
>>> (0).as_integer_ratio()
(0, 1)
```

<a id="nillion_client.PreprocessingElement.bit_count"></a>

#### bit_count()

Number of ones in the binary representation of the absolute value of self.

Also known as the population count.

```pycon
>>> bin(13)
'0b1101'
>>> (13).bit_count()
3
```

<a id="nillion_client.PreprocessingElement.bit_length"></a>

#### bit_length()

Number of bits necessary to represent self in binary.

```pycon
>>> bin(37)
'0b100101'
>>> (37).bit_length()
6
```

<a id="nillion_client.PreprocessingElement.conjugate"></a>

#### conjugate()

Returns self, the complex conjugate of any int.

<a id="nillion_client.PreprocessingElement.denominator"></a>

#### denominator

the denominator of a rational number in lowest terms

<a id="nillion_client.PreprocessingElement.from_bytes"></a>

#### from_bytes(byteorder, \*, signed=False)

Return the integer represented by the given array of bytes.

bytes
: Holds the array of bytes to convert.  The argument must either
  support the buffer protocol or be an iterable object producing bytes.
  Bytes and bytearray are examples of built-in objects that support the
  buffer protocol.

byteorder
: The byte order used to represent the integer.  If byteorder is ‘big’,
  the most significant byte is at the beginning of the byte array.  If
  byteorder is ‘little’, the most significant byte is at the end of the
  byte array.  To request the native byte order of the host system, use
  <br/>
  ```
  `
  ```
  <br/>
  sys.byteorder’ as the byte order value.

signed
: Indicates whether two’s complement is used to represent the integer.

<a id="nillion_client.PreprocessingElement.from_string"></a>

#### *classmethod* from_string()

Return the value which corresponds to the string name.

* **Parameters:**
  **name** (`str`) – The name of the enum member to get.
* **Raises:**
  **ValueError** – The member was not found in the Enum.
* **Return type:**
  `Self`

<a id="nillion_client.PreprocessingElement.imag"></a>

#### imag

the imaginary part of a complex number

<a id="nillion_client.PreprocessingElement.name"></a>

#### name *: `Optional`[`str`]*

<a id="nillion_client.PreprocessingElement.numerator"></a>

#### numerator

the numerator of a rational number in lowest terms

<a id="nillion_client.PreprocessingElement.real"></a>

#### real

the real part of a complex number

<a id="nillion_client.PreprocessingElement.to_bytes"></a>

#### to_bytes(length, byteorder, \*, signed=False)

Return an array of bytes representing an integer.

length
: Length of bytes object to use.  An OverflowError is raised if the
  integer is not representable with the given number of bytes.

byteorder
: The byte order used to represent the integer.  If byteorder is ‘big’,
  the most significant byte is at the beginning of the byte array.  If
  byteorder is ‘little’, the most significant byte is at the end of the
  byte array.  To request the native byte order of the host system, use
  <br/>
  ```
  `
  ```
  <br/>
  sys.byteorder’ as the byte order value.

signed
: Determines whether two’s complement is used to represent the integer.
  If signed is False and a negative integer is given, an OverflowError
  is raised.

<a id="nillion_client.PreprocessingElement.try_value"></a>

#### *classmethod* try_value()

Return the value which corresponds to the value.

* **Parameters:**
  **value** (`int`) – The value of the enum member to get.
* **Returns:**
  The corresponding member or a new instance of the enum if
  `value` isn’t actually a member.
* **Return type:**
  `Enum`

<a id="nillion_client.PreprocessingElement.value"></a>

#### value *: `int`*

<a id="nillion_client.PrivateKey"></a>

### *class* nillion_client.PrivateKey(privkey=None, raw=True)

<a id="nillion_client.PrivateKey.deserialize"></a>

#### deserialize(privkey_ser)

<a id="nillion_client.PrivateKey.ecdsa_deserialize"></a>

#### ecdsa_deserialize(ser_sig)

<a id="nillion_client.PrivateKey.ecdsa_deserialize_compact"></a>

#### ecdsa_deserialize_compact(ser_sig)

<a id="nillion_client.PrivateKey.ecdsa_recover"></a>

#### ecdsa_recover(msg, recover_sig, raw=False, digest=&lt;built-in function openssl_sha256&gt;)

<a id="nillion_client.PrivateKey.ecdsa_recoverable_convert"></a>

#### ecdsa_recoverable_convert(recover_sig)

<a id="nillion_client.PrivateKey.ecdsa_recoverable_deserialize"></a>

#### ecdsa_recoverable_deserialize(ser_sig, rec_id)

<a id="nillion_client.PrivateKey.ecdsa_recoverable_serialize"></a>

#### ecdsa_recoverable_serialize(recover_sig)

<a id="nillion_client.PrivateKey.ecdsa_serialize"></a>

#### ecdsa_serialize(raw_sig)

<a id="nillion_client.PrivateKey.ecdsa_serialize_compact"></a>

#### ecdsa_serialize_compact(raw_sig)

<a id="nillion_client.PrivateKey.ecdsa_sign"></a>

#### ecdsa_sign(msg, raw=False, digest=&lt;built-in function openssl_sha256&gt;, custom_nonce=None)

<a id="nillion_client.PrivateKey.ecdsa_sign_recoverable"></a>

#### ecdsa_sign_recoverable(msg, raw=False, digest=&lt;built-in function openssl_sha256&gt;)

<a id="nillion_client.PrivateKey.ecdsa_signature_normalize"></a>

#### ecdsa_signature_normalize(raw_sig, check_only=False)

Check and optionally convert a signature to a normalized lower-S form.
If check_only is True then the normalized signature is not returned.

This function always return a tuple containing a boolean (True if
not previously normalized or False if signature was already
normalized), and the normalized signature. When check_only is True,
the normalized signature returned is always None.

<a id="nillion_client.PrivateKey.schnorr_sign"></a>

#### schnorr_sign(msg, bip340tag, raw=False)

<a id="nillion_client.PrivateKey.serialize"></a>

#### serialize()

<a id="nillion_client.PrivateKey.set_raw_privkey"></a>

#### set_raw_privkey(privkey)

<a id="nillion_client.PrivateKey.tweak_add"></a>

#### tweak_add(scalar)

Tweak the current private key by adding a 32 byte scalar
to it and return a new raw private key composed of 32 bytes.

<a id="nillion_client.PrivateKey.tweak_mul"></a>

#### tweak_mul(scalar)

Tweak the current private key by multiplying it by a 32 byte scalar
and return a new raw private key composed of 32 bytes.

<a id="nillion_client.ProgramId"></a>

### nillion_client.ProgramId

alias of `str`

<a id="nillion_client.SecretBlob"></a>

### *class* nillion_client.SecretBlob(value)

This is a [`SecretBlob`](#nillion_client.SecretBlob) class used to
encode a secret as a blob.

* **Parameters:**
  **value** (*bytearray*) – Value of the secret blob as a bytearray.
* **Returns:**
  Instance of the [`SecretBlob`](#nillion_client.SecretBlob) class.
* **Return type:**
  [SecretBlob](#nillion_client.SecretBlob)
* **Raises:**
  **VTypeError** – argument ‘value’: Raises an error when a non-bytearray object is provided.

### Example

```py3
from nillion_client import SecretBlob

gm_blob_ba = bytearray("gm, builder!", "utf-8")
gm_blob = SecretBlob(gm_blob_ba)
ready_blob_ba = bytearray("ready to build!", "utf-8")
ready_blob = SecretBlob(ready_blob_ba)

print("Are these blobs the same?", gm_blob == ready_blob)
```

```text
>>> Are these blobs the same?  False
```

<a id="nillion_client.SecretBlob.value"></a>

#### value

Getter and setter for the value inside a
[`SecretBlob`](#nillion_client.SecretBlob) instance.

* **Returns:**
  The value of the secret blob.
* **Return type:**
  int

### Example

```py3
gm_blob_ba = bytearray("gm, builder!", "utf-8")
blob = SecretBlob(gm_blob_ba)
print("Blob is: ", blob.value)
ready_blob_ba = bytearray("ready to build!", "utf-8")
blob.value = ready_blob_ba
print("Blob is now: ", blob.value)
```

```text
>>> Blob is:  bytearray(b'gm, builder!')
>>> Blob is now:  bytearray(b'ready to build!')
```

<a id="nillion_client.SecretBoolean"></a>

### *class* nillion_client.SecretBoolean(value)

This is a [`SecretBoolean`](#nillion_client.SecretBoolean) class used to
encode a secret as a boolean.

* **Parameters:**
  **value** (*bool*) – Value of the secret encoded element.
* **Returns:**
  Instance of the [`SecretBoolean`](#nillion_client.SecretBoolean) class.
* **Return type:**
  [SecretBoolean](#nillion_client.SecretBoolean)

### Example

```py3
from nillion_client import SecretBoolean

sec_bool_1 = SecretBoolean(True)
sec_bool_2 = SecretBoolean(False)

print("Are the secret booleans the same? ", sec_bool_1 == sec_bool_2)
```

```text
>>> Are the secret booleans the same?  False
```

<a id="nillion_client.SecretBoolean.value"></a>

#### value

<a id="nillion_client.SecretInteger"></a>

### *class* nillion_client.SecretInteger(value)

This is a [`SecretInteger`](#nillion_client.SecretInteger) class used to encode a secret as an integer.

* **Parameters:**
  **value** (*int*) – Value of the secret encoded element.
* **Returns:**
  Instance of the [`SecretInteger`](#nillion_client.SecretInteger) class.
* **Return type:**
  [SecretInteger](#nillion_client.SecretInteger)

### Example

```py3
from nillion_client import SecretInteger

sec_integer_1 = SecretInteger(1)
sec_integer_2 = SecretInteger(2)

print("Are the secret integers the same? ", sec_integer_1 == sec_integer_2)
```

```text
>>> Are the secret integers the same?  False
```

<a id="nillion_client.SecretInteger.value"></a>

#### value

<a id="nillion_client.SecretUnsignedInteger"></a>

### *class* nillion_client.SecretUnsignedInteger(value)

This is a [`SecretUnsignedInteger`](#nillion_client.SecretUnsignedInteger) class used to
encode a secret as an unsigned integer.

* **Parameters:**
  **value** (*int*) – Value of the secret encoded element.
* **Returns:**
  Instance of the [`SecretUnsignedInteger`](#nillion_client.SecretUnsignedInteger) class.
* **Return type:**
  [SecretUnsignedInteger](#nillion_client.SecretUnsignedInteger)
* **Raises:**
  **OverflowError** – can’t convert negative int to unsigned: Raises an error when a negative integer value is used.

### Example

```py3
from nillion_client import SecretUnsignedInteger

sec_uinteger_1 = SecretUnsignedInteger(1)
sec_uinteger_2 = SecretUnsignedInteger(2)

print("Are the secret unsigned integers the same? ", sec_uinteger_1 == sec_uinteger_2)
```

```text
>>> Are the secret unsigned integers the same?  False
```

<a id="nillion_client.SecretUnsignedInteger.value"></a>

#### value

<a id="nillion_client.UnsignedInteger"></a>

### *class* nillion_client.UnsignedInteger(value)

This is a [`UnsignedInteger`](#nillion_client.UnsignedInteger) class used to
encode a public variable value as an unsigned integer.

* **Parameters:**
  **value** (*int*) – Value of the public encoded element.
* **Returns:**
  Instance of the [`UnsignedInteger`](#nillion_client.UnsignedInteger) class.
* **Return type:**
  [UnsignedInteger](#nillion_client.UnsignedInteger)
* **Raises:**
  **OverflowError** – can’t convert negative int to unsigned: Raises an error when a negative integer value is used.

### Example

```py3
from nillion_client import UnsignedInteger

pub_uinteger_1 = UnsignedInteger(1)
pub_uinteger_2 = UnsignedInteger(2)

print("Are the public unsigned integers the same? ", pub_uinteger_1 == pub_uinteger_2)
```

```text
>>> Are the public unsigned integers the same?  False
```

<a id="nillion_client.UnsignedInteger.value"></a>

#### value

<a id="nillion_client.UserId"></a>

### *class* nillion_client.UserId(contents)

A user identifier.

User identifiers are derived from the public key used for authentication when performing operations in the
network. User identifiers are non sensitive and can be shared with other users.

<a id="nillion_client.UserId.contents"></a>

#### contents *: `bytes`*

<a id="nillion_client.UserId.from_proto"></a>

#### *classmethod* from_proto(proto)

Create a user identifier instance from its protobuf representation.

* **Return type:**
  [`UserId`](#nillion_client.UserId)

<a id="nillion_client.UserId.from_public_key"></a>

#### *static* from_public_key(public_key)

Creates a user identifier from a public key.

User identifiers are defined as the last 20 bytes of the SHA256 hash of the public key.

* **Return type:**
  [`UserId`](#nillion_client.UserId)
* **Returns:**
  The user id.

### Example

```py3
import secp256k1

private_key = secp256k1.PrivateKey()
user = UserId.from_public_key(private_key.pubkey)
```

<a id="nillion_client.UserId.parse"></a>

#### *static* parse(hex_bytes)

Parse a user identifier from a hex encoded string.

* **Parameters:**
  **hex_bytes** (`str`) – The hex bytes that represent the user id.
* **Return type:**
  [`UserId`](#nillion_client.UserId)
* **Returns:**
  The parsed user id.

### Example

```py3
user = UserId.parse("3113a1170de795e4b725b84d1e0b4cfd9ec58ce9")
```

<a id="nillion_client.UserId.to_proto"></a>

#### to_proto()

Convert a user identifier to its protobuf representation.

* **Return type:**
  `UserId`

<a id="nillion_client.ValuesId"></a>

### nillion_client.ValuesId

alias of `UUID`

<a id="nillion_client.VmClient"></a>

### *class* nillion_client.VmClient(key, network, payer, \_raise_if_called=True)

A class to interact with the Nillion network.

This class allows performing all operations on the Nillion network, such as storing and retrieving secrets,
uploading programs, invoking computations, etc.

### Example

```py3
import os
from nillion_client import PrivateKey, Network, NilChainPayer, NilChainPrivateKey, VmClient

# The private key that will represent the identity of the user performing actions in the network.
private_key = PrivateKey()

# Load the config dumped by the `nillion-devnet` automatically on start and use it as the network.
network = Network.from_config("devnet")

# The payer that will be used to pay for operations in the network.
nilchain_private_key = os.getenv("NILLION_NILCHAIN_KEY")
chain_client = NilChainPayer(
    network,
    wallet_private_key=NilChainPrivateKey(bytes.fromhex(nilchain_private_key)),
    gas_limit=10000000,
)

# Finally, create the client
client = await VmClient.create(private_key, network, payer)
```

<a id="nillion_client.VmClient.close"></a>

#### close()

Closes the client and releases all resources associated with it.

<a id="nillion_client.VmClient.cluster"></a>

#### cluster *: `Cluster`*

The cluster definition that this client is using.

<a id="nillion_client.VmClient.compute"></a>

#### compute(program_id, input_bindings, output_bindings, values, value_ids=None)

Invokes a computation.

This operation returns immediately as soon as all initial validations for the program invocation are performed.

The results for a computation should be fetched by output parties via the
[`VmClient.retrieve_compute_results()`](#nillion_client.VmClient.retrieve_compute_results) function.

The name of the input and output parties must match the defined parties in the program being invoked.

* **Parameters:**
  * **program_id** (`str`) – The identifier of the program being invoked.
  * **input_bindings** (`List`[[`InputPartyBinding`](#nillion_client.InputPartyBinding)]) – The list of bindings that associate input parties in the program with Nillion user identifiers.
  * **output_bindings** (`List`[[`OutputPartyBinding`](#nillion_client.OutputPartyBinding)]) – The list of bindings that associate output parties in the program with Nillion user identifiers.
  * **values** (`Mapping`[`str`, `Union`[[`Integer`](#nillion_client.Integer), [`SecretInteger`](#nillion_client.SecretInteger), [`SecretUnsignedInteger`](#nillion_client.SecretUnsignedInteger), [`Boolean`](#nillion_client.Boolean), [`SecretBoolean`](#nillion_client.SecretBoolean), [`SecretBlob`](#nillion_client.SecretBlob), [`Array`](#nillion_client.Array), [`UnsignedInteger`](#nillion_client.UnsignedInteger), [`EcdsaPrivateKey`](#nillion_client.EcdsaPrivateKey), [`EcdsaDigestMessage`](#nillion_client.EcdsaDigestMessage), [`EcdsaSignature`](#nillion_client.EcdsaSignature)]]) – The values to be used as compute time secrets. These values will only be used during the computation and
    will be discarded afterwards.
  * **value_ids** (`Optional`[`List`[`UUID`]]) – The list of value identifiers to be used as inputs to this computation.
* **Return type:**
  `PayableOperation`[`UUID`]
* **Returns:**
  An operation that once invoked will return an identifier that can be used to fetch computation
  results via [`VmClient.retrieve_compute_results()`](#nillion_client.VmClient.retrieve_compute_results)

### Example

```py3
values = {
    "foo": SecretInteger(40),
    "bar": SecretInteger(2),
}

# Invoke a program using the given input and output bindings. In this case we are the only party providing
# inputs and we are the only party receiving outputs.
compute_id = await client.compute(
    program_id,
    input_bindings=[
        nillion_client.InputPartyBinding(party_name="Party1", user=client.user_id)
    ],
    output_bindings=[
        nillion_client.OutputPartyBinding(
            party_name="Party1", users=[client.user_id]
        )
    ],
    values=values,
).invoke()

# Now fetch the results.
results = await client.retrieve_compute_results(compute_id).invoke()
```

<a id="nillion_client.VmClient.create"></a>

#### *async classmethod* create(key, network, payer)

Create a new Nillion client.

* **Parameters:**
  * **key** ([`PrivateKey`](#nillion_client.PrivateKey)) – The private key that will represent the client’s identity in the network.
  * **network** ([`Network`](#nillion_client.Network)) – The network the client should connect to.
  * **payer** ([`Payer`](#nillion_client.Payer)) – The payer that will pay for all operations performed in the network.
* **Return type:**
  [`VmClient`](#nillion_client.VmClient)

### Example

```py3
client = await VmClient.create(private_key, network, payer)
```

<a id="nillion_client.VmClient.delete_values"></a>

#### delete_values(values_id)

Deletes the values with the given identifier.

This operation requires the user to have “delete” permissions on the given values identifier.

* **Parameters:**
  **values_id** (`UUID`) – The identifier of the uploaded values that should be deleted.
* **Return type:**
  `DeleteValuesOperation`
* **Returns:**
  An operation that once invoked will delete the stored values.

### Example

```py3
await client.delete_values(values_id).invoke()
```

<a id="nillion_client.VmClient.get_payment_receipt"></a>

#### *async* get_payment_receipt(signed_quote, tx_hash)

Request to get a payment receipt for a paid operation.

* **Parameters:**
  * **signed_quote** (`SignedQuote`) – The quote to get a payment receipt for.
  * **tx_hash** – The transaction hash where the payment was made.
* **Return type:**
  `SignedReceipt`
* **Returns:**
  A signed receipt that can be used to prove to all nodes that the payment was made.

<a id="nillion_client.VmClient.invoke_compute"></a>

#### *async* invoke_compute(receipt, input_bindings, output_bindings, values, value_ids=None)

Invokes a compute operation in the network.

* **Parameters:**
  * **receipt** (`SignedReceipt`) – A receipt that proves the payment was made.
  * **program_id** – The identifier of the program being invoked.
  * **input_bindings** (`List`[[`InputPartyBinding`](#nillion_client.InputPartyBinding)]) – The list of bindings that associate input parties in the program with Nillion user identifiers.
  * **output_bindings** (`List`[[`OutputPartyBinding`](#nillion_client.OutputPartyBinding)]) – The list of bindings that associate output parties in the program with Nillion user identifiers.
  * **values** (`Mapping`[`str`, `Union`[[`Integer`](#nillion_client.Integer), [`SecretInteger`](#nillion_client.SecretInteger), [`SecretUnsignedInteger`](#nillion_client.SecretUnsignedInteger), [`Boolean`](#nillion_client.Boolean), [`SecretBoolean`](#nillion_client.SecretBoolean), [`SecretBlob`](#nillion_client.SecretBlob), [`Array`](#nillion_client.Array), [`UnsignedInteger`](#nillion_client.UnsignedInteger), [`EcdsaPrivateKey`](#nillion_client.EcdsaPrivateKey), [`EcdsaDigestMessage`](#nillion_client.EcdsaDigestMessage), [`EcdsaSignature`](#nillion_client.EcdsaSignature)]]) – The values to be used as compute time secrets. These values will only be used during the computation and
    will be discarded afterwards.
  * **value_ids** (`Optional`[`List`[`UUID`]]) – The list of value identifiers to be used as inputs to this computation.
* **Return type:**
  `UUID`
* **Returns:**
  An identifier for the compute operation.

### Example

```py3
values = {
    "foo": SecretInteger(40),
    "bar": SecretInteger(2),
}

# Invoke a program using the given input and output bindings. In this case we are the only party providing
# inputs and we are the only party receiving outputs.
compute_id = await client.compute(
    program_id,
    input_bindings=[
        nillion_client.InputPartyBinding(party_name="Party1", user=client.user_id)
    ],
    output_bindings=[
        nillion_client.OutputPartyBinding(
            party_name="Party1", users=[client.user_id]
        )
    ],
    values=values,
).invoke()

# Now fetch the results.
results = await client.retrieve_compute_results(receipt, compute_id).invoke()
```

#### NOTE
users should use generally use [`VmClient.compute()`](#nillion_client.VmClient.compute) unless the API provided by
that function doesn’t satisfy their use cases.

<a id="nillion_client.VmClient.invoke_delete_values"></a>

#### *async* invoke_delete_values(values_id)

Invoke a delete values operation in the network.

* **Parameters:**
  * **receipt** – A receipt that proves the payment was made.
  * **values_id** (`UUID`) – The identifier of the uploaded values that should be deleted.
* **Return type:**
  `None`

### Example

```py3
await client.delete_values(receipt, values_id).invoke()
```

#### NOTE
users should use generally use [`VmClient.delete_values()`](#nillion_client.VmClient.delete_values) unless the API provided by
that function doesn’t satisfy their use cases.

<a id="nillion_client.VmClient.invoke_overwrite_permissions"></a>

#### *async* invoke_overwrite_permissions(receipt, permissions)

Invokes an overwrite permissions operation for the given values id.

* **Parameters:**
  * **receipt** (`SignedReceipt`) – A receipt that proves the payment was made.
  * **values_id** – The identifier of the uploaded values for which permissions should be updated.
  * **permissions** ([`Permissions`](#nillion_client.Permissions)) – The permissions to be set.

### Example

```py3
permissions = Permissions.default_for_user(user_id)
await client.overwrite_permissions(receipt, values_id, permissions).invoke()
```

#### NOTE
users should use generally use [`VmClient.overwrite_permissions()`](#nillion_client.VmClient.overwrite_permissions) unless the API provided by
that function doesn’t satisfy their use cases.

<a id="nillion_client.VmClient.invoke_pool_status"></a>

#### *async* invoke_pool_status(receipt)

Invokes a preprocessing pool status operation in the network.

* **Parameters:**
  * **receipt** (`SignedReceipt`) – A receipt that proves the payment was made.
  * **note:** ( *..*) – users should use generally use [`VmClient.pool_status()`](#nillion_client.VmClient.pool_status) unless the API provided by: that function doesn’t satisfy their use cases.
* **Return type:**
  `List`[`PreprocessingOffsets`]

<a id="nillion_client.VmClient.invoke_retrieve_compute_results"></a>

#### *async* invoke_retrieve_compute_results(compute_id)

Invoke a retrieve compute results operation in the network.

* **Parameters:**
  * **receipt** – A receipt that proves the payment was made.
  * **compute_id** (`UUID`) – The identifier of the compute instance to fetch the results for.
* **Return type:**
  `Dict`[`str`, `Union`[[`Integer`](#nillion_client.Integer), [`SecretInteger`](#nillion_client.SecretInteger), [`SecretUnsignedInteger`](#nillion_client.SecretUnsignedInteger), [`Boolean`](#nillion_client.Boolean), [`SecretBoolean`](#nillion_client.SecretBoolean), [`SecretBlob`](#nillion_client.SecretBlob), [`Array`](#nillion_client.Array), [`UnsignedInteger`](#nillion_client.UnsignedInteger), [`EcdsaPrivateKey`](#nillion_client.EcdsaPrivateKey), [`EcdsaDigestMessage`](#nillion_client.EcdsaDigestMessage), [`EcdsaSignature`](#nillion_client.EcdsaSignature)]]
* **Returns:**
  The result of the computation.

### Example

```py3
results = await client.retrieve_compute_results(receipt, compute_id).invoke()
```

#### NOTE
users should use generally use [`VmClient.retrieve_compute_results()`](#nillion_client.VmClient.retrieve_compute_results) unless the API provided by
that function doesn’t satisfy their use cases.

<a id="nillion_client.VmClient.invoke_retrieve_permissions"></a>

#### *async* invoke_retrieve_permissions(receipt)

Invokes a retrieve permissions operation in the network.

* **Parameters:**
  * **receipt** (`SignedReceipt`) – A receipt that proves the payment was made.
  * **values_id** – The identifier of the uploaded values for which permissions should be retrieved.
* **Return type:**
  [`Permissions`](#nillion_client.Permissions)
* **Returns:**
  The set of permissions currently associated with the values.

### Example

```py3
await client.retrieve_permissions(receipt, values_id).invoke()
```

#### NOTE
users should use generally use [`VmClient.retrieve_permissions()`](#nillion_client.VmClient.retrieve_permissions) unless the API provided by
that function doesn’t satisfy their use cases.

<a id="nillion_client.VmClient.invoke_retrieve_values"></a>

#### *async* invoke_retrieve_values(receipt)

Invokes a retrieve values operation.

* **Parameters:**
  * **receipt** (`SignedReceipt`) – A receipt that proves the payment was made.
  * **values_id** – The identifier of the uploaded values that should be retrieved.
* **Return type:**
  `Dict`[`str`, `Union`[[`Integer`](#nillion_client.Integer), [`SecretInteger`](#nillion_client.SecretInteger), [`SecretUnsignedInteger`](#nillion_client.SecretUnsignedInteger), [`Boolean`](#nillion_client.Boolean), [`SecretBoolean`](#nillion_client.SecretBoolean), [`SecretBlob`](#nillion_client.SecretBlob), [`Array`](#nillion_client.Array), [`UnsignedInteger`](#nillion_client.UnsignedInteger), [`EcdsaPrivateKey`](#nillion_client.EcdsaPrivateKey), [`EcdsaDigestMessage`](#nillion_client.EcdsaDigestMessage), [`EcdsaSignature`](#nillion_client.EcdsaSignature)]]
* **Returns:**
  The stored values.

### Example

```py3
await client.retrieve_values(receipt, values_id).invoke()
```

#### NOTE
users should use generally use [`VmClient.retrieve_values()`](#nillion_client.VmClient.retrieve_values) unless the API provided by
that function doesn’t satisfy their use cases.

<a id="nillion_client.VmClient.invoke_store_program"></a>

#### *async* invoke_store_program(receipt, program)

Invokes a store program operation in the network.

* **Parameters:**
  * **receipt** (`SignedReceipt`) – A receipt that proves the payment was made.
  * **program_name** – The name of the program being uploaded.
  * **program** (`bytes`) – The contents of the .nada.bin file generated from an invocation to pynadac.
* **Return type:**
  `str`
* **Returns:**
  The stored program’s identifier.

### Example

```py3
contents = open("/tmp/program.nada.bin", "rb").read()
await client.store_program(receipt, program_name="my-test-program", program=contents).invoke()
```

#### NOTE
users should use generally use [`VmClient.store_program()`](#nillion_client.VmClient.store_program) unless the API provided by
that function doesn’t satisfy their use cases.

<a id="nillion_client.VmClient.invoke_store_values"></a>

#### *async* invoke_store_values(receipt, values, permissions=None, update_identifier=None)

Invoke a store values operation in the network.

* **Parameters:**
  * **receipt** (`SignedReceipt`) – A receipt that proves the payment was made.
  * **values** (`Mapping`[`str`, `Union`[[`Integer`](#nillion_client.Integer), [`SecretInteger`](#nillion_client.SecretInteger), [`SecretUnsignedInteger`](#nillion_client.SecretUnsignedInteger), [`Boolean`](#nillion_client.Boolean), [`SecretBoolean`](#nillion_client.SecretBoolean), [`SecretBlob`](#nillion_client.SecretBlob), [`Array`](#nillion_client.Array), [`UnsignedInteger`](#nillion_client.UnsignedInteger), [`EcdsaPrivateKey`](#nillion_client.EcdsaPrivateKey), [`EcdsaDigestMessage`](#nillion_client.EcdsaDigestMessage), [`EcdsaSignature`](#nillion_client.EcdsaSignature)]]) – The values to store.
  * **ttl_days** – The number of days after which the values should be deleted. The higher this value, the higher the
    operation cost will be.
  * **permissions** (`Optional`[[`Permissions`](#nillion_client.Permissions)]) – The permissions to be set for the uploaded values. By default only the uploader will have read and update
    permissions.
  * **update_identifier** (`Optional`[`UUID`]) – An identifier of the secret to be updated. If set, this turns this operation into an update.
* **Return type:**
  `UUID`
* **Returns:**
  The identifier for the uploaded values.

### Example

```py3
values = {
    "foo": SecretInteger(42),
    "bar": Integer(1337),
}
await client.store_values(receipt, values, ttl_days=1).invoke()
```

#### NOTE
users should use generally use [`VmClient.store_values()`](#nillion_client.VmClient.store_values) unless the API provided by that function
doesn’t satisfy their use cases.

<a id="nillion_client.VmClient.invoke_update_permissions"></a>

#### *async* invoke_update_permissions(receipt, delta)

Invokes an updates the permissions on the given values.

* **Parameters:**
  * **receipt** (`SignedReceipt`) – A receipt that proves the payment was made.
  * **values_id** – The identifier of the uploaded values for which permissions should be updated.
  * **delta** ([`PermissionsDelta`](#nillion_client.PermissionsDelta)) – The permissions to be granted and revoked.

### Example

```py3
# Grant permissions to retrieve these values to `other_user_id`.
delta = PermissionsDelta(retrieve=PermissionCommand(grant=set([other_user_id])))
await client.update_permissions(receipt, values_id, delta).invoke()
```

#### NOTE
users should use generally use [`VmClient.update_permissions()`](#nillion_client.VmClient.update_permissions) unless the API provided by
that function doesn’t satisfy their use cases.

<a id="nillion_client.VmClient.network"></a>

#### network *: [`Network`](#nillion_client.Network)*

The network used by this client.

<a id="nillion_client.VmClient.overwrite_permissions"></a>

#### overwrite_permissions(values_id, permissions)

Overwrites the permissions on the given values id.

This operation requires the user to have “update” permissions on the given values identifier.

* **Parameters:**
  * **values_id** (`UUID`) – The identifier of the uploaded values for which permissions should be updated.
  * **permissions** ([`Permissions`](#nillion_client.Permissions)) – The permissions to be set.
* **Return type:**
  An operation that once invoked will overwrite the permissions for the given values.

### Example

```py3
permissions = Permissions.default_for_user(user_id)
await client.overwrite_permissions(values_id, permissions).invoke()
```

<a id="nillion_client.VmClient.pool_status"></a>

#### pool_status()

Fetch the preprocessing pool status.

* **Return type:**
  `PayableOperation`[`List`[`PreprocessingOffsets`]]
* **Returns:**
  The available offsets for every preprocessing element.

### Example

```py3
offsets = await client.pool_status(compute_id)
```

<a id="nillion_client.VmClient.request_quote"></a>

#### *async* request_quote(operation)

Requests a quote for an operation.

Users should generally not use this function directly and should instead use the concrete function
for the action they’re trying to perform, such as [`VmClient.store_values()`](#nillion_client.VmClient.store_values),

* **Return type:**
  `SignedQuote`

<a id="nillion_client.VmClient.retrieve_compute_results"></a>

#### retrieve_compute_results(compute_id)

Retrieve the results of a compute operation.

If the compute operation has finished, this will return the result immediately. If the operation is still
ongoing, this will block until the operation finishes.

The invoker user must have been set as an output binding in the [`VmClient.compute()`](#nillion_client.VmClient.compute) invocation. If the
invoker was bound as an output party, it will only retrieve the subset of the outputs that belong to it
based on the configured bindings.

* **Parameters:**
  **compute_id** (`UUID`) – The identifier of the compute instance to fetch the results for.
* **Return type:**
  `RetrieveComputeResultsOperation`
* **Returns:**
  An operation that once invoked will return the result of the computation.

### Example

```py3
results = await client.retrieve_compute_results(compute_id).invoke()
```

<a id="nillion_client.VmClient.retrieve_permissions"></a>

#### retrieve_permissions(values_id)

Retrieves the permissions for the given values identifier.

This operation requires the user to have “retrieve” permissions on the given values identifier.

* **Parameters:**
  **values_id** (`UUID`) – The identifier of the uploaded values for which permissions should be retrieved.
* **Return type:**
  `PayableOperation`[[`Permissions`](#nillion_client.Permissions)]
* **Returns:**
  An operation that once invoked will retrieve the set of permissions currently associated with the values.

### Example

```py3
await client.retrieve_permissions(values_id).invoke()
```

<a id="nillion_client.VmClient.retrieve_values"></a>

#### retrieve_values(values_id)

Retrieves the values with the given identifier, performing unmasking to recover any secrets
in the given set of values.

This operation requires the user to have “retrieve” permissions on the given values identifier.

* **Parameters:**
  **values_id** (`UUID`) – The identifier of the uploaded values that should be retrieved.
* **Return type:**
  `PayableOperation`[`Dict`[`str`, `Union`[[`Integer`](#nillion_client.Integer), [`SecretInteger`](#nillion_client.SecretInteger), [`SecretUnsignedInteger`](#nillion_client.SecretUnsignedInteger), [`Boolean`](#nillion_client.Boolean), [`SecretBoolean`](#nillion_client.SecretBoolean), [`SecretBlob`](#nillion_client.SecretBlob), [`Array`](#nillion_client.Array), [`UnsignedInteger`](#nillion_client.UnsignedInteger), [`EcdsaPrivateKey`](#nillion_client.EcdsaPrivateKey), [`EcdsaDigestMessage`](#nillion_client.EcdsaDigestMessage), [`EcdsaSignature`](#nillion_client.EcdsaSignature)]]]
* **Returns:**
  An operation that once invoked will retrieve the stored values.

### Example

```py3
await client.retrieve_values(values_id).invoke()
```

<a id="nillion_client.VmClient.store_program"></a>

#### store_program(program_name, program)

Stores a program in the network.

Stored programs can by default be invoked by anyone, although their identifier is only known to the invoker
and node operators.

* **Parameters:**
  * **program_name** (`str`) – The name of the program being uploaded.
  * **program** (`bytes`) – The contents of the .nada.bin file generated from an invocation to pynadac.
* **Return type:**
  `PayableOperation`[`str`]
* **Returns:**
  An operation that once invoked will return an identifier that can be used to reference this program
  in invocations to compute and when setting up values permissions for compute operations.

### Example

```py3
contents = open("/tmp/program.nada.bin", "rb").read()
await client.store_program(program_name="my-test-program", program=contents).invoke()
```

<a id="nillion_client.VmClient.store_values"></a>

#### store_values(values, ttl_days, permissions=None, update_identifier=None)

Store a set of values in the network.

Any secret values will be masked automatically before uploading them.

* **Parameters:**
  * **values** (`Mapping`[`str`, `Union`[[`Integer`](#nillion_client.Integer), [`SecretInteger`](#nillion_client.SecretInteger), [`SecretUnsignedInteger`](#nillion_client.SecretUnsignedInteger), [`Boolean`](#nillion_client.Boolean), [`SecretBoolean`](#nillion_client.SecretBoolean), [`SecretBlob`](#nillion_client.SecretBlob), [`Array`](#nillion_client.Array), [`UnsignedInteger`](#nillion_client.UnsignedInteger), [`EcdsaPrivateKey`](#nillion_client.EcdsaPrivateKey), [`EcdsaDigestMessage`](#nillion_client.EcdsaDigestMessage), [`EcdsaSignature`](#nillion_client.EcdsaSignature)]]) – The values to store.
  * **ttl_days** (`int`) – The number of days after which the values should be deleted. The higher this value, the higher the
    operation cost will be.
  * **permissions** (`Optional`[[`Permissions`](#nillion_client.Permissions)]) – The permissions to be set for the uploaded values. By default only the uploader will have read and update
    permissions.
  * **update_identifier** (`Optional`[`UUID`]) – An identifier of the secret to be updated. If set, this turns this operation into an update.
* **Return type:**
  `PayableOperation`[`UUID`]
* **Returns:**
  An operation that once invoked returns an identifier that uniquely identifies the uploaded values.

### Example

```py3
values = {
    "foo": SecretInteger(42),
    "bar": Integer(1337),
}
await client.store_values(values, ttl_days=1).invoke()
```

<a id="nillion_client.VmClient.update_permissions"></a>

#### update_permissions(values_id, delta)

Updates the permissions on the given values id with the given delta. As opposed to
[`VmClient.overwrite_permissions()`](#nillion_client.VmClient.overwrite_permissions), this operation allows granting and revoking individual permissions
without overwriting the entire set.

This operation can only be invoked by the owner of the stored values.

* **Parameters:**
  * **values_id** (`UUID`) – The identifier of the uploaded values for which permissions should be updated.
  * **delta** ([`PermissionsDelta`](#nillion_client.PermissionsDelta)) – The permissions to be granted and revoked.
* **Return type:**
  An operation that once invoked will update the permissions for the given values.

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
