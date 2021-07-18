import {OverviewScreen} from 'screens/overview'
import {Route } from 'react-router-dom'
import {PageBackground} from './components/lib'
import {HouseScreen} from './screens/house'

function App() {
  return (
    <PageBackground>
      <Route exact path='/' component={OverviewScreen} />
      <Route path='/house/:houseId' component={HouseScreen} />
    </PageBackground>
  )
}

export default App
