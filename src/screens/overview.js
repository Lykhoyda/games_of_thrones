import React, {useEffect} from 'react'
import {useHouses} from '../utils/houses'
import {HousesRow} from '../components/houses-row'
import {HousesUL, Spinner} from '../components/lib'
import styled from '@emotion/styled'
import {getIdFromURL} from '../utils/url'
import gotLogoGold from 'assets/got-logo-gold.png'
import {PaginationCustom} from '../components/pagination'

function OverviewScreen() {
  const [page, setPage] = React.useState(1)
  const {data: houses, refetch, isLoading} = useHouses(page)

  useEffect(() => {
    refetch(page)
  }, [page, refetch])

  if (isLoading) {
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    )
  }

  return (
    <MainContent>
      <Header>
        <Logo src={gotLogoGold} />
      </Header>
      <HousesUL>
        {houses?.map(house => (
          <li key={`${house.name}-${getIdFromURL(house.url)}`} aria-label={house.name}>
            <HousesRow house={house} />
          </li>))}
      </HousesUL>
      <PaginationCustom page={page} setPage={setPage} />
    </MainContent>
  )
}

const MainContent = styled('div')`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  padding: 0 0 40px 0;
`

const Header = styled('header')`
  text-align: center;
`

const Logo = styled('img')`
  margin: 20px auto;
  display: block;
  max-width: 320px;
  width: 100%;
`

const SpinnerContainer = styled('li')`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
`

export {OverviewScreen}
