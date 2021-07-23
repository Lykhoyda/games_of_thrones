import {rest} from 'msw'
import housesData from 'test/data/houses.json'

const apiURL = process.env.REACT_APP_GOT_API_URL

export const serverHandlers = [
  rest.get(`${apiURL}/houses`, async (req, res, ctx) => {
    return res(ctx.json(housesData))
  }),

  rest.get(`${apiURL}/houses/:houseId`, async (req, res, ctx) => {
    const {houseId} = req.params

    return res(ctx.json(housesData[parseInt(houseId) - 1]))
  }),
]
