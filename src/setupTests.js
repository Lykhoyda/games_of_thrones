import '@testing-library/jest-dom'
import {server} from 'test/server'

beforeAll(() => server.listen({onUnhandledRequest: 'error'}))
afterAll(() => server.close())
afterEach(() => server.resetHandlers())
