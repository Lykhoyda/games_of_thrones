import {screen, within} from '@testing-library/react'
import {render} from 'test/app-test-utils'
import App from '../App'
import houseData from 'test/data/houses.json'
import {getIdFromURL} from '../utils/url'

test('render page with single house data', async () => {
  const testHouse = houseData[1]
  const houseId = getIdFromURL(testHouse.url)
  const route = `house/${houseId}`
  await render(<App />, {route})

  expect(screen.getByRole('button', {name: /go back/i})).toBeInTheDocument()
  expect(screen.getByRole('img', {name: /house image/i})).toBeInTheDocument()
  expect(
    screen.getByRole('heading', {name: testHouse.name}),
  ).toBeInTheDocument()
  expect(
    screen.getByRole('heading', {name: `Region ${testHouse.region}`}),
  ).toBeInTheDocument()

  const inDataList = within(screen.getByRole('list'))
  expect(inDataList.getByTestId(/diedOut/i)).toHaveTextContent(
    testHouse.diedOut,
  )
  expect(inDataList.getByTestId(/founded/i)).toHaveTextContent(
    testHouse.founded,
  )
  expect(inDataList.getByTestId(/seats/i)).toHaveTextContent(
    testHouse.seats.join(','),
  )
})
