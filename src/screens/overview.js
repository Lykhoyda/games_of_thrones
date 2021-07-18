import React from 'react'
import {useHouses} from '../utils/houses'
import {HousesRow} from '../components/houses-row'
import {HousesUL} from '../components/lib'
import styled from '@emotion/styled'

function OverviewScreen() {
  const houses = useHouses()

  return (
    <Grid>
      <SidebarLeft>
        Left
      </SidebarLeft>
      <MainContent>
    <HousesUL>
      {houses?.map(house => {
        return (
          <li key={house.name} aria-label={house.name}>
            <HousesRow house={house} />
          </li>)
      })}
    </HousesUL>
      </MainContent>
      <SidebarRight>
        Right
      </SidebarRight>
    </Grid>
  )
}

const Grid = styled.div({
  display: 'grid',
  gridTemplateAreas: `"sidebarLeft mainContent sidebarRight"`,
  gridTemplateColumns: '20% 1fr 20%',
  gridTemplateRows: 'auto'
})

const MainContent = styled.div({
  'grid-area': 'mainContent',
  textAlign: 'center'
})

const SidebarLeft = styled.div({
  'grid-area': 'sidebarLeft'
})

const SidebarRight = styled.div({
  'grid-area': 'sidebarRight'
})

export {OverviewScreen}
