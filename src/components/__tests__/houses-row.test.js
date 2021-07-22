import React from 'react'
import {HousesRow} from '../houses-row'
import {render, screen} from '@testing-library/react'
import {buildHouse} from '../../test/generate'
import {Router} from 'react-router-dom'
import {createMemoryHistory} from 'history'
import * as urlUtils from 'utils/url'

const houseData = buildHouse()
const history = createMemoryHistory()

test('it renders the house data', () => {
  jest.spyOn(urlUtils, 'getIdFromURL').mockImplementation(value => value)

  render(
    <Router history={history}>
      <HousesRow house={houseData} />
    </Router>,
  )

  expect(screen.getByText(houseData.name)).toBeInTheDocument()
  expect(screen.getByRole('link', {name: /learn more/i})).toHaveAttribute(
    'href',
    `/house/${houseData.url}`,
  )
})
