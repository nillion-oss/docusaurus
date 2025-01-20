import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SV: Creating & Registering Schemas

1. 🔒 To start storing data in **SecretVault**, you'll first have to register a schema (or schemas) describing them. This action has a double effect:
   - It creates a MongoDB collection in **SecretVault** where your data will be stored
   - It attaches this collection to your org, and makes sure the records you're going to be uploading will be validated during creation - ensuring they are stored sanitized and ready for use by **SecretDataAnalytics**
2. 📝 The first step is to formulate an initial representation of your data. Let's see an example:
<details>
<summary>Example Data</summary>

```json
service = Netflix //string
username = JohnDoe13 //string
password = p4$$worD //string
registred_at = 2022-01-01T00:00:00Z //datetime
```

</details>

3. ⚙️ Then this representation must be translated to **JSON Schema** format. There are some specific steps to take into account here:
   - 1️⃣ Each record must include a unique identifier named `_id`, formatted as `uuid` with an extra property `coerce` set to `true`
   - 2️⃣ The `$schema` must be `http://json-schema.org/draft-07/schema#` and of type `array`
   - 3️⃣ Any date related fields must be of type `data-time` with an extra property `coerce` set to `true`
   - 4️⃣ Make sure you have the required fields marked as such (`_id` is always required) and we also recommend you set `additionalProperties` to `false`
   - 5️⃣ Do not include any fields prefixed with `$` as this will potentially creat conflicts when setting up queries (MongoDB aggregations)
   - 6️⃣ Also note that all records are getting internal `_created` and `_updated` fields automatically assigned and filled
   - 7️⃣ We strongly recommend using a tool like https://www.jsonschemavalidator.net/ to verify that the schema is valid before proceeding to the next step

<details>
<summary>Example JSON Schema</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "_id": {
        "type": "string",
        "format": "uuid",
        "coerce": true
      },
      "service": {
        "type": "string"
      },
      "username": {
        "type": "string"
      },
      "password": {
        "type": "string"
      },
      "registered_at": {
        "type": "string",
        "format": "date-time",
        "coerce": true
      }
    },
    "required": ["_id", "service", "username", "password", "registered_at"],
    "additionalProperties": false
  }
}
```

</details>

4. 🧰 There are just a few last things you're going to need before being ready to register your schema:
   - 1️⃣ Your organization's DID (Decentralized Identifier), obtained during the [Access](access.md) step
   - 2️⃣ A name for your schema
   - 3️⃣ A unique `uuid4` identifier for your schema. As you're going to be registering this to multiple nodes that do not communicate or are aware of each other (for purposes of encryption via secret shares), this must be provided on creation and be the same across nodes.

<details>
<summary>Example `POST /schemas` Payload</summary>

```json
{
   "_id": "9b22147f-d6d5-40f1-927d-96c08XXXXXXXX",
   "owner": "did:nil:testnet:nillion1lng3uvz65frtv4jnrxyn2zn7xhyzujXXXXXXXX",
   "name": "My services",
   "keys": [
      "_id"
   ],
   "schema": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "type": "array",
      "items": {
         "type": "object",
         "properties": {
            "_id": {
               "type": "string",
               "format": "uuid",
               "coerce": true
            },
            "service": {
               "type": "string"
            },
            "username": {
               "type": "string"
            },
            "password": {
               "type": "string"
            },
            "registered_at": {
               "type": "string",
               "format": "date-time",
               "coerce": true
            }
         },
         "required": [
            "_id",
            "service",
            "username",
            "password",
            "registered_at"
         ],
         "additionalProperties": false
      }
   }
}
```

</details>

5. 🏁 You can now use the [Create Schema endpoint](../../api/nildb/overview.md) to register your schema on your **SecretVault** nodes. You can find an example below:
   - 1️⃣ Node info acquisition details can be found on the [Access](access.md) page
   - 2️⃣ Token acquisition details can be found on the [Generatin API Tokens](generate-tokens.md) page

<details>
<summary>Code Sample</summary>

<Tabs>
  <TabItem value="python" label="Python">

```python
import requests

def create_schema(node_urls: list = None, node_jwts: list = None, payload: dict = None) -> None:
    """Create a schema in the specified nodes."""
    for i, (url, jwt) in enumerate(zip(node_urls, node_jwts)):
        try:
            headers = {
                'Authorization': f'Bearer {jwt}',
                'Content-Type': 'application/json'
            }

            response = requests.post(
                f"{url}/schemas",
                headers=headers,
                json=payload if payload is not None else {}
            )

            if response.status_code == 200:
                print(f"Schema created successfully in {url}.")
            else:
                print(f"Failed to create schema in {url}: {response.status_code} {response.text}")

        except Exception as e:
            print(f"Error creating schema in {url}: {str(e)}")

if __name__ == "__main__":
    # Node info acquired on the Access step of the docs
    node_urls = ["https://node1.example.com", "https://node2.example.com", "https://node3.example.com"]
    # Tokens acquired on the Generate Tokens step of the docs
    node_jwts = ["jwt_token_1", "jwt_token_2", "jwt_token_3"]
    # Example given on step 4
    schema_payload = {}

    create_schema(node_urls, node_jwts, schema_payload)

```

</TabItem> 
<TabItem value="typescript" label="TypeScript">

```TypeScript
// placeholder
```
</TabItem> 
</Tabs>
</details>
6. ✅ You can now move on to the next steps, [Encryption with nilQL](encryption.md) and [SV: Uploading & Retrieving Data](upload-retrieve.md) in order to upload some records and test your schema.
7. ❓ Did you run into any problems and want to edit/rework your schema? Use the [Delete Schema endpoint](../../api/nildb/overview.md) to remove it, then make your adjustments and repeat step 5. Remember, you can always reach out to us if you get stuck!
