# SUPPORT-25516

Reproducer for SUPPORT-25516

## To Run

* Checkout from git
* Install deps: `npm i`
* Ensure no broker is running on localhost
* Run reproducer: `bun app.ts`

## Output

```
10:26:15.069 | zeebe |  ERROR: [createProcessInstance]: 14 UNAVAILABLE: No connection established. Last error: Failed to connect (2025-01-27T21:26:15.067Z)
10:26:16.075 | zeebe |  ERROR: [createProcessInstance]: Attempt 2 (max: -1).
10:26:16.076 | zeebe |  ERROR: [createProcessInstance]: 14 UNAVAILABLE: No connection established. Last error: Failed to connect (2025-01-27T21:26:16.069Z)
10:26:17.079 | zeebe |  ERROR: [createProcessInstance]: Attempt 3 (max: -1).
10:26:17.083 | zeebe |  ERROR: [createProcessInstance]: 14 UNAVAILABLE: No connection established. Last error: Failed to connect (2025-01-27T21:26:16.069Z)
10:26:18.086 | zeebe |  ERROR: [createProcessInstance]: Attempt 4 (max: -1).
10:26:18.093 | zeebe |  ERROR: [createProcessInstance]: 14 UNAVAILABLE: No connection established. Last error: Failed to connect (2025-01-27T21:26:16.069Z)
```