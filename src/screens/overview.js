import React, {useEffect} from 'react'
import {useHouses} from '../utils/houses'
import {HousesRow} from '../components/houses-row'
import {FullPageSpinner, HousesUL, Wrapper} from '../components/lib'
import styled from '@emotion/styled'
import {getIdFromURL} from '../utils/url'
import gotLogoGold from 'assets/got-logo-gold.png'
import {PaginationCustom} from '../components/pagination'
import {Grid} from '@material-ui/core'

function OverviewScreen() {
  const [page, setPage] = React.useState(1)
  const {data: houses, refetch, isLoading} = useHouses(page)

  useEffect(() => {
    refetch(page)
  }, [page, refetch])

  if (isLoading) return <FullPageSpinner />

  return (
    <Wrapper>
      <Header>
        <Logo src={gotLogoGold} />
      </Header>
      <HousesUL>
        <Grid container direction="row" justifyContent="center" spacing={3}>
          {houses?.map(house => (
            <Grid
              key={`${house.name}-${getIdFromURL(house.url)}`}
              item
              xs={12}
              sm={6}
              md={4}
            >
              <ListItem aria-label={house.name}>
                <HousesRow house={house} />
              </ListItem>
            </Grid>
          ))}
        </Grid>
      </HousesUL>
      <PaginationCustom page={page} setPage={setPage} />
    </Wrapper>
  )
}

const Header = styled('header')`
  text-align: center;
`

const ListItem = styled('li')`
  display: flex;
  justify-content: center;
`

const Logo = styled('img')`
  margin: 20px auto 40px auto;
  display: block;
  max-width: 320px;
  width: 100%;
`

export {OverviewScreen}
