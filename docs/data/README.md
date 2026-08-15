# Initiatives Directory Data

`initiatives.json` contains the seed data for the Regional & Local Initiatives
directory on the Resources page.

## Adding entries

Add a new object to the JSON array. The JS renderer groups by `region` and
sorts alphabetically within each group.

## Schema

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| name | string | yes | Full name, optionally with acronym prefix |
| acronym | string | no | Short form (e.g. "AKTEA") |
| region | string | yes | One of: Africa, Asia-Pacific, Europe, Latin America & Caribbean, Mediterranean & Black Sea, North America, Global |
| country | string | no | Leave empty for multi-country networks |
| focus | string | yes | One-line focus area |
| description | string | yes | 1–2 sentence description |
| url | string | yes | Homepage URL |
| verified | string\|null | yes | ISO date (YYYY-MM-DD) of last verification, or null if not yet verified |

## Verification

All seed entries have `verified: null` — URLs and descriptions need manual
verification against the live sites before the date is set.

<!-- WANTED: Caribbean-specific entry (e.g. CERMES gender programme or Caribbean Network of Fisherfolk Organisations women's strand). Also wanted: South Asia-specific entry (e.g. BOBP-IGO gender work or Bay of Bengal Programme). -->
