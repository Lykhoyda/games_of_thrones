import {setupServer} from 'msw/node'
import {serverHandlers} from './server-handlers'

const server = setupServer(...serverHandlers)

export * from 'msw'
export {server}
