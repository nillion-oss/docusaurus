# Cardio Risk

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TestProgram from '@site/src/components/TestProgram/index';

This example demonstrates a privacy-preserving cardiovascular risk assessment program. It calculates a risk score based on several private health metrics (such as blood pressure, cholesterol levels, etc.) without exposing the individual values. The program uses secure computation to protect sensitive medical data while still providing meaningful risk assessment results.

The risk score is computed on a scale from 0 to 100, where:
- 0-20: Low risk
- 21-50: Moderate risk
- 51-100: High risk

<Tabs>

<TabItem value="program" label="Nada program" default>
```python reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/src/cardio_risk.py
```
</TabItem>

<TabItem value="test-0" label="Test 0">
```yaml reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/tests/cardio_risk_0_test.yaml
```
</TabItem>

<TabItem value="test-1" label="Test 1">
```yaml reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/tests/cardio_risk_1_test.yaml
```
</TabItem>

<TabItem value="test-2" label="Test 2">
```yaml reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/tests/cardio_risk_2_test.yaml
```
</TabItem>

<TabItem value="test-3" label="Test 3">
```yaml reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/tests/cardio_risk_3_test.yaml
```
</TabItem>
</Tabs>

<TestProgram programName="cardio_risk" testFileName="cardio_risk_0_test"/>
