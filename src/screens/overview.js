import React from 'react'
import {useHousesInfinite} from '../utils/houses'
import {HousesRow} from '../components/houses-row'
import {HousesUL, Spinner} from '../components/lib'
import styled from '@emotion/styled'
import useInfiniteScroll from 'react-infinite-scroll-hook'
import {getIdFromURL} from '../utils/url'
import gotLogoGold from 'assets/got-logo-gold.png'

function OverviewScreen() {
  const {data, fetchNextPage, hasNextPage, isLoading, error} = useHousesInfinite()
  const [sentryRef] = useInfiniteScroll({
    loading: isLoading,
    hasNextPage,
    onLoadMore: fetchNextPage,
    disabled: !!error,
    rootMargin: '0px 0px 600px 0px',
  })


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
        {data?.pages.map((page) =>
          page.map(house =>
            (
              <li key={`${house.name}-${getIdFromURL(house.url)}`} aria-label={house.name}>
                <HousesRow house={house} />
              </li>)))}

      </HousesUL>
      {(isLoading || hasNextPage) && (
        <SpinnerContainer ref={sentryRef}>
          <Spinner />
        </SpinnerContainer>
      )}
    </MainContent>
  )
}

const MainContent = styled('div')`
  max-width: 1200px;
  width: 100%;
  margin: auto;
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
