import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SDA: Querying Data

1. 🔍 You can check out the available queries for your org via `GET /queries` - see the [List Queries endpoint](../../api/nildb/list-the-organizations-queries.api.mdx) page for details.
2. 🧰 Then, using the query id and any variables required you are ready to setup the payload for executing the query:

<details>
<summary>Example `POST /queries/execute` Payload</summary>

```JSON
{
  "id": "dfcee886-231d-4a9d-9bdd-857f74XXXXX",
  "variables": {
    "service": "Netflix"
  }
}
```

</details>


3. 🏁 You can now use the `POST /queries/execute` endpoint to retrieve the results - check out the [Execute Queries endpoint](../../api/nildb/execute-the-specified-query.api.mdx) page for details. You can find an example below:
    - 1️⃣ Node info acquisition details can be found on the [Access](access.md) page
    - 2️⃣ Token acquisition details can be found on the [Generatin API Tokens](generate-tokens.md) page

<details>
<summary>Code Sample</summary>

<Tabs>
  <TabItem value="python" label="Python">

```python
"""NilDB API integration"""
import requests
from typing import Dict, List, Optional

class NilDBAPI:
    def __init__(self, node_config: Dict):
        self.nodes = node_config

    def query_execute(self, node_name: str, query_id: str, variables: Optional[dict] = None) -> List[Dict]:
        """Execute a query on the specified node with advanced filtering."""
        try:
            node = self.nodes[node_name]
            headers = {
                'Authorization': f'Bearer {node["jwt"]}',
                'Content-Type': 'application/json'
            }

            payload = {
                "id": query_id,
                "variables": variables if variables is not None else {}
            }

            response = requests.post(
                f"{node['url']}/queries/execute",
                headers=headers,
                json=payload
            )

            if response.status_code == 200:
                return response.json().get("data", [])
            return []
        except Exception as e:
            print(f"Error executing query on {node_name}: {str(e)}")
            return []
```

</TabItem> 
<TabItem value="typescript" label="TypeScript">

```TypeScript
// placeholder
```
</TabItem> 
</Tabs>
</details>