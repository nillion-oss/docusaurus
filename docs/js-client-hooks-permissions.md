# Permissions

Permissions allow the developer to adjust who is able to interact with the storage.

### useNilRetrievePermissions

This is used to query the `id` and what permissions are available. Simply pass in the relevant `id` 

```tsx reference showGithubLink
https://github.com/NillionNetwork/client-ts/blob/main/examples-nextjs/app/components/retrieve-permissions.tsx
```

### useNilUpdatePermissions

To update your permissions for a storage value, you can use these various [functions](https://github.com/NillionNetwork/client-ts/blob/8ddf2914ceccca10a3fe9466b429fe496b38cfd8/client-vms/src/vm/operation/update-permissions.ts#L161) with the `UpdatePermissionsBuilder` builder

```tsx
const permissions = useMemo(() => {
    return UpdatePermissionsBuilder.init(client)
      .revokeRetrieve(client.id)
      .revokeDelete(client.id);
  }, [client.id]);
```

```tsx reference showGithubLink
https://github.com/NillionNetwork/client-ts/blob/main/examples-nextjs/app/components/update-permissions.tsx
```

### useNilOverwritePermissions

To overwrite  your permissions for a storage value, you can use these various [functions](https://github.com/NillionNetwork/client-ts/blob/main/client-vms/src/types/values-permissions.ts#L72) with the `ValuesPermissionsBuilder` builder. In the below example, it overwrites it to the static `default.

```tsx reference showGithubLink
https://github.com/NillionNetwork/client-ts/blob/main/examples-nextjs/app/components/overwrite-permissions.tsx
```




