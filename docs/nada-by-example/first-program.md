import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Your First Nada Program

Welcome to your first Nada program example! This example is an addition program that is meant to help you understand the basics of writing a Nada program and introduce key concepts such as a `Party`, `Input`, `SecretInteger`, `Operation`, and `Output`.

This addition program in Nada demonstrates how to handle secret inputs from multiple parties, perform a computation (addition), and produce an output for another party.

## Nada program and test file

<Tabs>

<TabItem value="program" label="Nada program" default>

The `addition` Nada program takes in a secret input from Alice and a secret input from Bob. It runs an addition operation to get the sum of the two secret inputs. The Nada program returns an output, the sum, to Charlie who never sees the values of Alice or Bob's secret inputs.

```python reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/src/addition.py
```
</TabItem>

<TabItem value="test" label="Test file">

You can auto-generate a test file like this one for any nada program with the [nada tool](/nada#generate-a-test-file). A test file verifies that the program works as expected. It provides test inputs and defines the expected outputs given the inputs. You'll learn how to run programs and test programs as part of the [Nada by Example Local Setup Guide](/nada-by-example-quickstart)

```yaml reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/tests/addition_test.yaml
```

</TabItem>
</Tabs>


## Nada Program Key Concepts

### Parties

A `Party` represents a user or entity participating in the computation. A party can provide inputs and/or receive outputs. The addition program has 3 parties named Alice, Bob, and Charlie. Alice and Bob provide inputs to the program. Charlie receives the output of the program.

```python reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/src/addition.py#L4-L6
```

### Inputs

An `Input` is a value provided to a Nada program by a specific party. Inputs are wrapped with one of the following `Public` or `Secret` modes:

| `Public`                | `Secret`                | 
| ----------------------- | ----------------------- |
| `PublicInteger`         | `SecretInteger`         |
| `PublicUnsignedInteger` | `SecretUnsignedInteger` |

The addition program has two `SecretInteger` typed `Input`: 

1. `num_1` input by Alice
2. `num_2` input by Bob.

```python reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/src/addition.py#L7-L8
```

### Operations

An operation is a computation performed on inputs to produce a result. In Nada, operations can be performed on both public and secret modes. Check out the full list of available [Nada operations here](/nada-by-example/nada-operations).

The addition program involves one operation, addition, to sum the 2 secret inputs.

```python reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/src/addition.py#L9
```

### Outputs

An `Output` defines how the result of the computation is shared with the parties. It ensures that the result of blind computation is properly revealed only to the intended party or parties.

```python reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/src/addition.py#L10
```

The addition program returns one output, the sum to Charlie. Charlie can see the resulting sum, but never sees the values of Alice or Bob's secret inputs that were added together to get the sum. This shows the power of blind computation!

## Wrap up

In this example, you learned how to use Nada to create an addition program that performs blind computation. By defining Party, Input, SecretInteger, performing an Operation, and specifying Output, you can compute on secret inputs from multiple users. This ensures that sensitive data remains confidential throughout the computation process.

The power of Nada lies in its ability to compute on secret inputs without revealing the underlying data to any party involved. This makes Nada programs perfect for applications requiring high levels of privacy and security.

Start experimenting with Nada by **learning how to run Nada by Example programs** in the next section.