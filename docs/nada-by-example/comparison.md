# Comparison

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TestProgram from '@site/src/components/TestProgram/index';

Nada supports standard comparison operations for comparing numerical values. These operators return boolean values (true/false) and can be used in conditional statements or calculations. Each comparison is performed securely, maintaining the privacy of the operands.

The following comparison operators are available:

## Less than `<`
Returns `true` if the first value is less than the second value.

<Tabs>

<TabItem value="program" label="Nada program" default>
```python reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/src/comparison_lt.py
```
</TabItem>

<TabItem value="test" label="Test file">
```yaml reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/tests/comparison_lt_test.yaml
```
</TabItem>
</Tabs>

<TestProgram programName="comparison_lt"/>

## Less than or equal to `<=`
Returns `true` if the first value is less than or equal to the second value.

<Tabs>

<TabItem value="program" label="Nada program" default>
```python reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/src/comparison_lte.py
```
</TabItem>

<TabItem value="test" label="Test file">
```yaml reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/tests/comparison_lte_test.yaml
```
</TabItem>
</Tabs>

<TestProgram programName="comparison_lte"/>

## Greater than `>`
Returns `true` if the first value is greater than the second value.

<Tabs>

<TabItem value="program" label="Nada program" default>
```python reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/src/comparison_gt.py
```
</TabItem>

<TabItem value="test" label="Test file">
```yaml reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/tests/comparison_gt_test.yaml
```
</TabItem>
</Tabs>

<TestProgram programName="comparison_gt"/>

## Greater than or equal to `>=`
Returns `true` if the first value is greater than or equal to the second value.

<Tabs>

<TabItem value="program" label="Nada program" default>
```python reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/src/comparison_gte.py
```
</TabItem>

<TabItem value="test" label="Test file">
```yaml reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/tests/comparison_gte_test.yaml
```
</TabItem>
</Tabs>


<TestProgram programName="comparison_gte"/>

