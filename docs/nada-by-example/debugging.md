import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Debugging

When programming in Nada, keep this phrase in mind: Think Big, Code Small. Read about the "Think Big, Code Small" philosophy with [Nada best practices and more debugging tips here](/nada-debugging).

## Debugging with print()

When developing and debugging Nada programs, it can be helpful to inspect the values and types of variables at various points in your code. You can do this by adding Python `print()` statements, then running the file directly.


### 1. Include a Python main block

To use print statements for debugging in a Nada program, you can add the following Python main block to the end of your Nada program file. This block ensures that the `nada_main()` function runs standalone as the main program when the script is executed directly.

```python
if __name__ == "__main__":
   nada_main()
```

### 2. Add print() statements

Add print() statements within the Nada program to print variables or types of variables.

### 3. Run the program with Python

Run the program with Python to print any print() statements to the terminal. 

```
python3 src/[program_name].py
```

### 4. Remove print() statements before compiling a Nada program

Make sure to comment out or remove all print statements before compiling Nada programs, as Nada compilation will fail if any print statements are included.

The Python main block can be left in for Nada program compilation. 

## Debugging example

<Tabs>

<TabItem value="program" label="Nada program" default>

```python reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/src/debug.py
```
</TabItem>

<TabItem value="test" label="Test file">
```yaml reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/tests/debug_test.yaml
```
</TabItem>
</Tabs>

### Print type of variable

Printing the type of a variable prints the Nada data type to your terminal as a class. When debugging with `type()`, double-check that your Nada operation supports the type printed by looking at the [Nada Operations](/nada-by-example/nada-operations) Supported Types column.

```
print(type(sum))
```

```
(.venv) ➜  nada-by-example git:(main) ✗ python3 src/debug.py
<class 'nada_dsl.nada_types.types.SecretInteger'>
```

### Print variable

Printing a variable prints the Nada data type of the variable and any applicable operation types to your terminal. When debugging with operation types, check that the Nada operation type and syntax are correct by looking at the [Nada Operations](/nada-by-example/nada-operations) Syntax and Supported Types columns.


```
print(sum)
```

```
(.venv) ➜  nada-by-example git:(main) ✗ python3 src/debug.py
SecretInteger(inner=<nada_dsl.operations.Addition object at 0x104ba5e20>)
```

## Next steps

🐛 Now that you've learned to debug, you're ready to write and debug your own Nada programs in the src/ repo. Check out the [Nada Operations](/nada-by-example/nada-operations) page to see examples of supported Nada operations, their syntax, and supported data types.