import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

import DocCardList from '@theme/DocCardList';

# Compute

Perform single or multi party computation using secrets stored in the network.

<DocCardList/>

## Single Party Compute

Single party compute involves only one Party that provides inputs and receives outputs of a program. Single party compute examples are available in the Python Starter Repo [core_concept_single_party_compute folder](https://github.com/NillionNetwork/python-examples/tree/main/examples_and_tutorials/core_concept_single_party_compute).

### Example: addition_simple.py

The addition_simple example is a single party compute example that adds two secret integers. In the client code, the first secret integer is stored in the network ahead of time, and the second secret integer is provided at computation time.

<Tabs>
  <TabItem value="client" label="Client code" default>

```python reference showGithubLink
https://github.com/NillionNetwork/python-examples/tree/main/examples_and_tutorials/core_concept_single_party_compute/addition_simple.py#L14-L131
```

  </TabItem>
  <TabItem value="readme" label="Nada program" default>

```python reference showGithubLink
https://github.com/NillionNetwork/python-examples/blob/main/examples_and_tutorials/nada_programs/src/addition_simple.py

```

  </TabItem>
</Tabs>

## Multi Party Compute

Multi party compute involves more than one Party. These Parties collaborate to provide secret inputs and one Party receives outputs of the program.

The [core_concept_multi_party_compute](https://github.com/NillionNetwork/python-examples/tree/main/examples_and_tutorials/core_concept_multi_party_compute) folder has a 3-step multi party compute example involving multiple parties providing secret inputs for computation of a program. The first party stores a secret, then N other parties store permissioned secrets giving the first party compute access. The first party computes with all secrets.

<Tabs>
  <TabItem value="readme" label="README" default>

```python reference showGithubLink
https://github.com/NillionNetwork/python-examples/tree/main/examples_and_tutorials/core_concept_multi_party_compute/README.md

```

  </TabItem>
  <TabItem value="config" label="Config file" default>

```python reference showGithubLink
https://github.com/NillionNetwork/python-examples/tree/main/examples_and_tutorials/core_concept_multi_party_compute/config.py
```

  </TabItem>
  <TabItem value="apple" label="Step 1" default>
    ### Step 1: 1st Party Stores a Secret

```python reference showGithubLink
https://github.com/NillionNetwork/python-examples/blob/main/examples_and_tutorials/core_concept_multi_party_compute/01_store_program.py#L19-L100
```

  </TabItem>
  <TabItem value="orange" label="Step 2">
    ### Step 2: N other parties store a permissioned secret

```python reference showGithubLink
https://github.com/NillionNetwork/python-examples/tree/main/examples_and_tutorials/core_concept_multi_party_compute/02_store_secret_party_n.py#L36-L108
```

  </TabItem>
  <TabItem value="banana" label="Step 3">
    ### Step 3: The 1st Party computes with all secrets

```python reference showGithubLink
https://github.com/NillionNetwork/python-examples/tree/main/examples_and_tutorials/core_concept_multi_party_compute/03_multi_party_compute.py#L43-L100
```

  </TabItem>
</Tabs>
