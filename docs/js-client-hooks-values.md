# Values

Storage and retreival of values are available via:
- [useNilStoreValues](#usenilstorevalues)
- [useNilRetrieveValues](#usenilretrievevalues)
- [useNilDeleteValues](#usenildeletevalues)

### useNilStoreValues

To store values with Nillion, you pass in `options` into the `values` with a `name` and `value`. Ensure you have it typed to NadaValue. You have the option of choosing the [type of NadaValue](/nada-lang-types) you would like to use. 

You may also use this same hook to update a value that has been stored. See this [example.](https://github.com/NillionNetwork/client-ts/blob/main/examples-nextjs/app/components/update-values.tsx)

```tsx reference showGithubLink
https://github.com/NillionNetwork/client-ts/blob/main/examples-nextjs/app/components/store-values.tsx
```

### useNilRetrieveValues
Retreiving only requires one argument: `id` . This `id` comes from a previous stored value (i.e after you call `useNilStoreValues`).

``` tsx
// i.e. 31d8ab8d-dced-494b-99cc-bd34f1d80b26
const options = { id };
```

```tsx reference showGithubLink
https://github.com/NillionNetwork/client-ts/blob/main/examples-nextjs/app/components/retrieve-values.tsx
```

### useNilDeleteValues
Deleting requires an `id` and the correct permissions to be able to delete it. So if a user does not have the right id or permissions, this will not be possible.

```tsx reference showGithubLink
https://github.com/NillionNetwork/client-ts/blob/main/examples-nextjs/app/components/delete-values.tsx
```
