# Compute

Blind computation requires three elements:
1. [Storing of a Program](#usenilstoreprogram) (via self or by someone else)
2. [Invoking the program](#usenilinvokecompute) with your parameters
3. [Retrieving](#usenilretrievecomputeresults) the computed results

Note: in order to use these functions, you (as the developer) should have created Nada programs to interact with. See this [guide](./quickstart-nada.md) if you have not done this process.

### useNilStoreProgram

To store a program, you would have computed a `XXX.nada.bin` file after you built a successful nada program. You will need to upload this file via the FileReader to upload the program. The `mutation.execute({ name, program })` part should automatically take in your program + name.

```tsx reference showGithubLink
https://github.com/NillionNetwork/client-ts/blob/main/examples-nextjs/app/components/store-program.tsx
```

### useNilInvokeCompute
To invoke a program, you pass in the `programId` of the program you have uploaded with considerations of the inputs you want to provide in your `options`. `computeTimeValues` with respect to `name` and `value` are what you want to adjust. 

```tsx
const options = {
      programId,
      inputBindings: [{ party: "Party1", user: client.id }],
      outputBindings: [{ party: "Party1", users: [client.id] }],
      valueIds: [],
      computeTimeValues: [
        {
          name: "A",
          value: NadaValue.new_secret_integer("10"),
        },
        {
          name: "B",
          value: NadaValue.new_secret_integer("4"),
        },
      ],
    };
```

```tsx reference showGithubLink
https://github.com/NillionNetwork/client-ts/blob/main/examples-nextjs/app/components/invoke-compute.tsx
```

### useNilRetrieveComputeResults
To retrive, you simply pass in the `id` from the previous invocation.

```tsx reference showGithubLink
https://github.com/NillionNetwork/client-ts/blob/main/examples-nextjs/app/components/retrieve-compute-results.tsx
```



