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
import PropTypes from 'prop-types'

function HousesRow({house}) {
  const [imgSrc] = useState(() => getHouseImage(house.name))
  const classes = useStyles()

  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea className={classes.cardActionArea}>
        <CardMedia
          className={classes.mediaCard}
          component="img"
          alt={house.name}
          height="140"
          image={imgSrc}
          title={house.name}
        />
        <CardContent>
          <Typography
            className={classes.text}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {house.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Link
          to={`/house/${getIdFromURL(house.url)}`}
          css={{
            textDecoration: 'none',
            color: colors.text,
          }}
        >
          <Button className={classes.learnMore} size="small" color="primary">
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

const useStyles = makeStyles({
  root: {
    maxWidth: '345px',
    backgroundColor: rgba(colors.grey, 0.9),
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
  cardActionArea: {
    textAlign: 'center',
  },
  text: {
    fontFamily: 'got-font',
  },
})

HousesRow.propTypes = {
  house: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }),
}

export {HousesRow}
