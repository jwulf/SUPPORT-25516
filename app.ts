import {Camunda8} from '@camunda8/sdk'

const camunda = new Camunda8({
    CAMUNDA_AUTH_STRATEGY: 'NONE'
})

const zbc = camunda.getZeebeGrpcApiClient({
    zeebeGrpcSettings: {
        ZEEBE_GRPC_CLIENT_MAX_RETRIES: 5
    }
})

zbc.createProcessInstance({
    bpmnProcessId: 'does-not-exist',
    variables: {},
}).then(console.log)
.catch(e => {
    console.log('createProcessInstance threw error', e)
})
