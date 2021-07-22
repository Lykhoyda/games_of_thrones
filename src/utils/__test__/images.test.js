import {getHouseImage} from '../images'
import {buildHouse} from '../../test/generate'

test('it should return proper image src if the house name is exists in the image data', () => {
  const testHouseName = 'stark'
  const src = getHouseImage(testHouseName)

  expect(src).toEqual(`${testHouseName}.png`)
})

test('it should random image src if the house name is NOT exists in the image data', () => {
  const house = buildHouse()
  const src = getHouseImage(house.name)

  expect(src).toBeTruthy()
})
