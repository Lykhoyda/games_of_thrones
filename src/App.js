import React from 'react'
import {Route} from 'react-router-dom'
import {OverviewScreen} from 'screens/overview'
import {HouseScreen} from 'screens/house'
import {FullPageSpinner} from './components/lib'

function App() {
  return (
    <React.Suspense fallback={<FullPageSpinner />}>
      <Route exact path='/' component={OverviewScreen} />
      <Route path='/house/:houseId' component={HouseScreen} />
    </React.Suspense>
  )
}

export default App
