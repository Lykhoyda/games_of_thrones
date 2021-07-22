import faker from 'faker'

function buildHouse() {
  return {
    name: faker.name.findName(),
    url: faker.internet.url(),
  }
}

export {buildHouse}
