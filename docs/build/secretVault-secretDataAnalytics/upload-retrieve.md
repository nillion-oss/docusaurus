import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SV: Uploading & Retrieving Data

1. 🔍 You can check out the available schemas for your org via `GET /schemas` - see the [List Schemas endpoint](../../api/nildb/list-the-organizations-schemas.api.mdx) page for details.
2. 🧰 Then, using the schema id and with the record you want to create at hand, you are ready to setup the payload for uploading data:
   - 1️⃣ Make sure that you have applied the steps described on [Encryption with nilQL](encryption.md) to the fields that you want to encrypt / secret-share before proceeding
   - 2️⃣ The format of payload must match the JSON schema definition of the target schema so it can pass validation
   - 3️⃣ Remember you’ll have to provide the `_id` field of UUIDv4 type for all newly created records. This is because the nodes are completely independent and agnostic of each other, and we'll need a point of reference to reconstruct the encrypted data.

<details>
<summary>Example `POST /data/create` Payload</summary>

```JSON
{
   "schema": "9b22147f-d6d5-40f1-927d-96c08XXXXXXXX",
   "data": [
      {
         "_id": "f47ac10b-58cc-4372-a567-0e02bXXXXXX",
         "service": "Netflix",
         "username": "JohnDoe13",
         "password": "oTsOsg+XMaA=", //encrypted share
         "registered_at": "2022-01-01T00:00:00Z"
      }
   ]
}
```
</details>

3. ♻️ Note that the response on `POST /data/create` will consist of two sections, `created` and `errors`, where any issues with data ingestion will be described even if the communication with the node resulted in a `200` status response. You can check out an example below that showcases both instances:

<details>
<summary>Example `POST /data/create` Response</summary>

```JSON
{
   "data": {
      "created": [
         "f47ac10b-58cc-5372-a567-0e02b2XXXXXX"
      ],
      "errors": [
         {
            "error": "E11000 duplicate key error collection: datablocks_data.f47ac10b-58cc-4372-a567-0e02b2XXXXXX index: _id_ dup key: { _id: UUID(\"f47ac10b-58cc-4372-a567-0e02b2XXXXXX\") }",
            "document": {
               "_id": "f47ac10b-58cc-4372-a567-0e02bXXXXXX",
               "service": "Netflix",
               "username": "JohnDoe13",
               "password": "oTsOsg+XMaA=",
               "registered_at": "2022-01-01T00:00:00Z"
            }
         }
      ]
   }
}
```
</details>

4. 🛠️ The same applies for other data endpoints like `POST /data/read`, `POST /data/tail`, `POST /data/update` etc. Refer to the [API Reference](../../api/nildb/overview.md) page for more info on these. Here is an example for `POST /data/read`:

<details>
<summary>Example `POST /data/read` Payload</summary>

```JSON
{
   "schema": "9b22147f-d6d5-40f1-927d-96c08XXXXXXXX",
   "filter": {
      "service": "Netflix"
   }
}
```
</details>


5. 🏁 You can now use these endpoints to upload and retrieve records. You can find an example below:
   - 1️⃣ Node info acquisition details can be found on the [Access](access.md) page
   - 2️⃣ Token acquisition details can be found on the [Generatin API Tokens](generate-tokens.md) page

   
<details>
<summary>Code Sample</summary>

<Tabs>
  <TabItem value="python" label="Python">

```python reference showGithubLink
https://github.com/NillionNetwork/nil-examples/blob/main/nildb/secretvault_python/nildb_api.py
```

</TabItem> 
<TabItem value="typescript" label="TypeScript">

```TypeScript
// placeholder
```

</TabItem> 

</Tabs>

</details>