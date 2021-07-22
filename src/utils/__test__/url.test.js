import {getIdFromURL} from '../url'
import faker from 'faker'

test('It will return data after the last slash', () => {
  const randomId = faker.datatype.uuid()
  const url = `https://localhost/fake/${randomId}`
  const id = getIdFromURL(url)

  expect(id).toEqual(randomId)
})
