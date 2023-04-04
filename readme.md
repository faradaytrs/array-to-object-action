# Transform array to key-value object

Transform array with keys and values to key-value object.

**Use cases**

You have data in the following format:

```json
[
  {
    "key": "key1",
    "value": "value1"
  },
  {
    "key": "key2",
    "value": "value2"
  }
]
```

And you need to transform it to the following:

```json
{
  "key1": "value1",
  "key2": "value2"
}
```

**Workflow YAML**

```yaml
- name: Array to Object Action
  uses: faradaytrs/array-to-object-action@v1.0.0
  with:

    # Array to transform
    data: ${{ toJSON(myArray) }}

    # Key property in array
    keyProperty: key

    # Value property in array
    valueProperty: value

    # Output name, defaults to "data"
    output: data
````