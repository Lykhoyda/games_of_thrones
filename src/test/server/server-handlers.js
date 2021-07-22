import {rest} from 'msw'
import housesDatta from 'test/data/houses.json'

const apiURL = process.env.REACT_APP_GOT_API_URL

export const serverHandlers = [
  rest.get(`${apiURL}/houses`, async (req, res, ctx) => {
    return res(ctx.json(housesDatta))
  }),
]
