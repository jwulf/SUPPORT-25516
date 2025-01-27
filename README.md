# SUPPORT-25516

Reproducer for SUPPORT-25516.

## Explanation

Setting `ZEEBE_GRPC_CLIENT_MAX_RETRIES` controls the transparent operation retry. Without setting this explicitly, it defaults to -1 (infinite retries, no error throw).

In this reproducer, we set it to 5, and connect to a non-existent broker. After five attempts to create a process instance, the SDK will throw.

## To Run

* Checkout from git
* Install deps: `npm i`
* Ensure no broker is running on localhost
* Run reproducer: `bun app.ts`

## Output

```
10:34:35.247 | zeebe |  ERROR: [createProcessInstance]: 14 UNAVAILABLE: No connection established. Last error: Failed to connect (2025-01-27T21:34:35.245Z)
10:34:36.253 | zeebe |  ERROR: [createProcessInstance]: Attempt 2 (max: 5).
10:34:36.254 | zeebe |  ERROR: [createProcessInstance]: 14 UNAVAILABLE: No connection established. Last error: Failed to connect (2025-01-27T21:34:36.247Z)
10:34:38.255 | zeebe |  ERROR: [createProcessInstance]: Attempt 3 (max: 5).
10:34:38.259 | zeebe |  ERROR: [createProcessInstance]: 14 UNAVAILABLE: No connection established. Last error: Failed to connect (2025-01-27T21:34:36.247Z)
10:34:42.261 | zeebe |  ERROR: [createProcessInstance]: Attempt 4 (max: 5).
10:34:42.262 | zeebe |  ERROR: [createProcessInstance]: 14 UNAVAILABLE: No connection established. Last error: Failed to connect (2025-01-27T21:34:38.757Z)
10:34:50.264 | zeebe |  ERROR: [createProcessInstance]: Attempt 5 (max: 5).
10:34:50.268 | zeebe |  ERROR: [createProcessInstance]: 14 UNAVAILABLE: No connection established. Last error: Failed to connect (2025-01-27T21:34:44.775Z)
10:35:00.269 | zeebe |  ERROR: [createProcessInstance]: Attempt 6 (max: 5).
10:35:00.271 | zeebe |  ERROR: [createProcessInstance]: 14 UNAVAILABLE: No connection established. Last error: Failed to connect (2025-01-27T21:34:53.031Z)
createProcessInstance threw error 26 |  * error is not necessarily a problem in gRPC itself.
27 |  * @param status
28 |  */
29 | function callErrorFromStatus(status, callerStack) {
30 |     const message = `${status.code} ${constants_1.Status[status.code]}: ${status.details}`;
31 |     const error = new Error(message);
                           ^
error: 14 UNAVAILABLE: No connection established. Last error: Failed to connect (2025-01-27T21:34:53.031Z)
 code: "14"

      at callErrorFromStatus (/Users/jwulf/workspace/SUPPORT-25516/node_modules/@grpc/grpc-js/build/src/call.js:31:23)
      at onReceiveStatus (/Users/jwulf/workspace/SUPPORT-25516/node_modules/@grpc/grpc-js/build/src/client.js:284:41)
      at /Users/jwulf/workspace/SUPPORT-25516/node_modules/@grpc/grpc-js/build/src/call-interface.js:78:35
      at onReceiveStatus (/Users/jwulf/workspace/SUPPORT-25516/node_modules/@grpc/grpc-js/build/src/call-interface.js:73:23)
      at onReceiveStatus (/Users/jwulf/workspace/SUPPORT-25516/node_modules/@grpc/grpc-js/build/src/client-interceptors.js:360:141)
      at onReceiveStatus (/Users/jwulf/workspace/SUPPORT-25516/node_modules/@grpc/grpc-js/build/src/client-interceptors.js:422:77)
      at /Users/jwulf/workspace/SUPPORT-25516/node_modules/@grpc/grpc-js/build/src/resolving-call.js:175:31
      at processTicksAndRejections (native:7:39)
      at makeUnaryRequest (/Users/jwulf/workspace/SUPPORT-25516/node_modules/@grpc/grpc-js/build/src/client.js:244:30)
      at /Users/jwulf/workspace/SUPPORT-25516/node_modules/@camunda8/sdk/dist/zeebe/lib/GrpcClient.js:488:38
      at processTicksAndRejections (native:7:39)
```