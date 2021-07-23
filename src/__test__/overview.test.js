import {screen, waitForElementToBeRemoved, within} from '@testing-library/react'
import {render} from 'test/app-test-utils'
import App from '../App'
import houseData from 'test/data/houses.json'
import userEvent from '@testing-library/user-event'

test('render page with houses', async () => {
  await render(<App />)

  expect(screen.getAllByRole('img')[0]).toHaveAttribute(
    'src',
    'got-logo-gold.png',
  )

  expect(screen.queryAllByRole('link')).toHaveLength(houseData.length)
  expect(screen.getAllByText(/learn more/i)).toHaveLength(houseData.length)

  const inFirstHouseElement = within(screen.queryAllByRole('listitem')[0])

  expect(
    inFirstHouseElement.getByRole('heading', houseData[0].name),
  ).toBeInTheDocument()

  expect(inFirstHouseElement.getByRole('img')).toHaveAttribute('src')
  expect(
    inFirstHouseElement.getByRole('link', {name: /learn more/i}),
  ).toBeInTheDocument()

  const inSecondHouseElement = within(screen.queryAllByRole('listitem')[3])
  userEvent.click(inSecondHouseElement.getByRole('link', {name: /learn more/i}))

  await waitForElementToBeRemoved(screen.getByText(/loading/i))

  expect(window.location.href).toEqual('http://localhost/house/4')
})
