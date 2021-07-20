/** @jsxImportSource @emotion/react */
import React from 'react'
import {useHouse} from '../utils/houses'
import {useParams, useHistory} from 'react-router-dom'
import styled from '@emotion/styled'
import {Divider, Link, makeStyles, Paper, Typography} from '@material-ui/core'
import {PageBackground} from '../components/lib'
import {getHouseImage} from '../utils/images'

const useStyles = makeStyles({
  root: {
    minHeight: '85vh'
  },
  link: {
    display: 'block',
    marginBottom: '20px',
  },
})

function HouseScreen() {
  const {houseId} = useParams()
  const {data: house = {}, isLoading} = useHouse(houseId)
  const {seats, name, region, words} = house
  const history = useHistory()
  const classes = useStyles()

  if (isLoading) {
    return null
  }

  const renderListItem = (data, heading) => {
    return data && (
        <>
          <Typography variant='body1' component='div'>
            {heading}:
          </Typography>
          <ul>
            {data?.map(title => {
              return <li>{title}</li>
            })}
          </ul>
        </>
      )
    }


  return (
    <PageBackground>
      <Wrapper>
        <Link className={classes.link} color='inherit' onClick={() => history.goBack()}>Go back</Link>
        <Paper className={classes.root}>
          <Grid>
            <LogoColumn>
              <HouseLogo src={getHouseImage(name)} alt={`house-${name}`} />
              <Typography gutterBottom align='left' variant='h5' component='div'>
                Region {region}
              </Typography>
            </LogoColumn>
            <div>
              <Typography gutterBottom align='center' variant='h3' component='h2'>
                {name}
              </Typography>
              <Typography gutterBottom align='center' variant='h4' component='h2'>
                {words}
              </Typography>
              <Divider />

              {renderListItem(seats, 'Seats')}
            </div>
          </Grid>
        </Paper>
      </Wrapper>
    </PageBackground>
  )
}

const Wrapper = styled('div')`
  max-width: 1200px;
  width: 100%;
  padding: 0 20px;
  margin: auto;
  color: white;
  height: 100%;
`

const Grid = styled('div')`
  padding-top: 20px;
  display: grid;
  grid-template-columns: 30% 1fr;
`

const LogoColumn = styled('div')`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
`

const HouseLogo = styled('img')`
  display: block;
  max-width: 240px;
  width: 100%;
  margin-top: 20px;
  padding: 20px;
`

export {HouseScreen}
