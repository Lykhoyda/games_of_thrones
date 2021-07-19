import {Route} from 'react-router-dom'
import {OverviewScreen} from 'screens/overview'
import {HouseScreen} from './screens/house'

localStorage.removeItem('page')

function App() {
  return (
    <>
      <Route exact path='/' component={OverviewScreen} />
      <Route path='/house/:houseId' component={HouseScreen} />
    </>
  )
}

export default App
