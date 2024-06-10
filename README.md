# Lerning supabase.

`npx tsx supabase.ts`

## query all

```json
{
  "data": [
    {
      "id": 1,
      "name": "United Kingdom",
      "cities": [
        {
          "id": 1,
          "name": "London"
        },
        {
          "id": 2,
          "name": "Manchester"
        }
      ]
    },
    {
      "id": 2,
      "name": "United States",
      "cities": [
        {
          "id": 3,
          "name": "Los Angeles"
        },
        {
          "id": 4,
          "name": "New York"
        }
      ]
    }
  ],
  "error": null
}
```

### query with null, .eq('id', null);, ..... when is not with .single() function

```json
{
  "data": null,
  "error": {
    "code": "22P02",
    "details": null,
    "hint": null,
    "message": "invalid input syntax for type integer: \"null\""
  }
}
```

### query with a id that not exists, .eq('id', 14); when is not with .single() function

```json
{
  "data": [],
  "error": null
}
```

## with .single() function

### query with a id that not exists, .eq('id', 14);

```json
{
  "data": null,
  "error": {
    "code": "PGRST116",
    "details": "The result contains 0 rows",
    "hint": null,
    "message": "JSON object requested, multiple (or no) rows returned"
  }
}
```

### query with null, .eq('id', null);,

```json
{
  "data": null,
  "error": {
    "code": "22P02",
    "details": null,
    "hint": null,
    "message": "invalid input syntax for type integer: \"null\""
  }
}
```
