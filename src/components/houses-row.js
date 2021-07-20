/** @jsxImportSource @emotion/react */
import React, {useState} from 'react'
import {rgba} from 'emotion-rgba'
import * as colors from 'styles/colors'
import {Link} from 'react-router-dom'
import {getIdFromURL} from '../utils/url'
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core'
import {getHouseImage} from '../utils/images'

const useStyles = makeStyles({
  root: {
    maxWidth: '345px',
    backgroundColor: rgba(colors.grey, 0.90),
    color: colors.text,
  },
  card: {
    maxWidth: '345px',
    backgroundColor: colors.grey,
    color: colors.text,
  },
  mediaCard: {
    objectFit: 'contain',
    marginTop: '10px',
  },
  learnMore: {
    color: colors.text,
  },
  cardActions: {
    justifyContent: 'flex-end',
  },
})

function HousesRow({house}) {
  const [imgSrc] = useState(() => getHouseImage(house.name))
  const classes = useStyles()

  return (
    <Card className={classes.root} variant='outlined'>
      <CardActionArea>
        <CardMedia className={classes.mediaCard}
                   component='img'
                   alt='Contemplative Reptile'
                   height='140'
                   image={imgSrc}
                   title='Contemplative Reptile'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {house.name}
          </Typography>
          <Typography variant='body2' color='inherit' component='p'>
            {house.words}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Link to={`/house/${getIdFromURL(house.url)}`} css={{
          textDecoration: 'none',
          color: colors.text,
        }}>
          <Button className={classes.learnMore} size='small' color='primary'>
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export {HousesRow}
