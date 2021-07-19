/** @jsxImportSource @emotion/react */
import React from 'react'
import {useHouse} from '../utils/houses'
import {useParams, useHistory} from 'react-router-dom'
import styled from '@emotion/styled'
import * as colors from 'styles/colors'
import {rgba} from 'emotion-rgba'
import {Link} from '@material-ui/core'
import {PageBackground} from '../components/lib'
import {getHouseImage} from '../utils/images'
// ancestralWeapons: [""]
// cadetBranches: []
// coatOfArms: "A golden wreath, on a blue field with a gold border(Azure, a garland of laurel within a bordure or)"
// currentLord: ""
// diedOut: ""
// founded: ""
// founder: ""
// heir: ""
// name: "House Algood"
// overlord: "https://www.anapioficeandfire.com/api/houses/229"
// region: "The Westerlands"
// seats: [""]
// swornMembers: []
// titles: [""]
// url: "https://www.anapioficeandfire.com/api/houses/1"
// words: ""


function HouseScreen() {
  const {houseId} = useParams()
  const {data: house, isLoading} = useHouse(houseId)
  const history = useHistory()


  if(isLoading){
    return null
  }

  return (
    <PageBackground>
      <Wrapper>
        <Link color='inherit' onClick={() => history.goBack()}>Go back</Link>
        <Grid>
          <div>
            <HouseLogo src={getHouseImage(house.name)} alt={`house-${house.name}`} />
          </div>
          <div>
            <HouseName>{house.name} {house.region}</HouseName>
            <HouseInfo>
              Region: {house.region}
            </HouseInfo>
          </div>
        </Grid>
      </Wrapper>
    </PageBackground>
  )
}

const Wrapper = styled('div')`
  max-width: 1200px;
  width: 100%;
  padding: 20px;
  margin: auto;
  color: white;

  height: 100%;
`

const Grid = styled('div')`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 30% 1fr;
  background-color: ${rgba(colors.grey, 0.8)};
`

const HouseLogo = styled('img')`
  display: block;
  max-width: 320px;
  width: 100%;
  margin-top: 20px;
  padding: 20px;
`

const HouseName = styled('h2')`
  font-size: 18px;
  text-align: center;
`

const HouseInfo = styled('div')`
  font-size: 16px;
`

export {HouseScreen}
