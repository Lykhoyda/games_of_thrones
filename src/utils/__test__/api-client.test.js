import {server, rest} from 'test/server'
import {client} from '../api-client'

const apiURL = process.env.REACT_APP_GOT_API_URL

jest.mock('react-query')

test('calls fetch at the endpoint with the arguments for GET requests', async () => {
  const endpoint = 'test-endpoint'
  const mockResult = {mockValue: 'SOME_VALUE'}

  server.use(
    rest.get(`${apiURL}/${endpoint}`, async (req, res, ctx) => {
      return res(ctx.json(mockResult))
    }),
  )

  const result = await client(endpoint)

  expect(result).toEqual(mockResult)
})

test('when data is provided, it is stringifies and the method defaults to POST', async () => {
  const endpoint = 'test-endpoint'
  server.use(
    rest.post(`${apiURL}/${endpoint}`, async (req, res, ctx) => {
      return res(ctx.json(req.body))
    }),
  )
  const data = {a: 'b'}
  const result = await client(endpoint, {data})
  expect(result).toEqual({data})
})

test(`correctly rejects the promise if there's an error`, async () => {
  const testError = {message: 'Test error'}
  const endpoint = 'test-endpoint'
  server.use(
    rest.get(`${apiURL}/${endpoint}`, async (req, res, ctx) => {
      return res(ctx.status(400), ctx.json(testError))
    }),
  )

  const error = await client(endpoint).catch(e => e)

  expect(error).toEqual(testError)
})
