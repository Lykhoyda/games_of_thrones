/** @jsxImportSource @emotion/react */
import React from 'react'
import {useHouse} from '../utils/houses'
import {useHistory, useParams} from 'react-router-dom'
import styled from '@emotion/styled'
import {
  Button,
  Divider,
  List,
  ListItem,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core'
import {FullPageSpinner, PageBackground, Wrapper} from '../components/lib'
import {getHouseImage} from '../utils/images'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import {UNKNOWN} from '../utils/constants'
import {device} from '../styles/media-queries'

function HouseScreen() {
  const {houseId} = useParams()
  const {data: house = {}, isLoading} = useHouse(houseId)
  const {seats, name, region, words, diedOut, founded} = house
  const history = useHistory()
  const classes = useStyles()

  const renderListItem = (columnName, data) => (
    <ListItem data-testid={columnName}>
      {columnName}: {data || UNKNOWN}
    </ListItem>
  )

  if (isLoading) return <FullPageSpinner />

  return (
    <PageBackground>
      <Wrapper>
        <Button
          variant="contained"
          color="default"
          className={classes.goBackButton}
          onClick={() => history.goBack()}
          startIcon={<ArrowBackIcon />}
        >
          Go back
        </Button>
        <Paper className={classes.root}>
          <Grid>
            <LogoColumn>
              <HouseLogo src={getHouseImage(name)} alt={`house image`} />
              <Typography
                className={classes.text}
                gutterBottom
                align="center"
                variant="h5"
                component="h5"
              >
                Region {region}
              </Typography>
            </LogoColumn>
            <div>
              <Typography
                className={classes.text}
                gutterBottom
                align="center"
                variant="h4"
                component="h2"
              >
                {name}
              </Typography>
              <Typography
                gutterBottom
                align="center"
                variant="h4"
                component="h2"
              >
                {words}
              </Typography>
              <Divider />
              <Content className={classes.listItems}>
                <List>
                  {renderListItem('Died Out', diedOut)}
                  {renderListItem('Founded', founded)}
                  {renderListItem('Seats', seats.join(','))}
                </List>
              </Content>
            </div>
          </Grid>
        </Paper>
      </Wrapper>
    </PageBackground>
  )
}

const useStyles = makeStyles({
  goBackButton: {
    margin: '20px 0',
  },
  root: {
    minHeight: '85vh',
  },
  link: {
    display: 'block',
    marginBottom: '20px',
  },
  text: {
    fontFamily: 'got-font',
  },
})

const Grid = styled('div')`
  padding-top: 20px;
  display: grid;
  grid-template-columns: auto;

  @media ${device.md} {
    grid-template-columns: 30% 1fr;
  }
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
  margin: 0 0 25px 0;
`

const Content = styled('div')`
  margin-top: 20px;
`

export {HouseScreen}
