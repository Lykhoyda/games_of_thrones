import styled from '@emotion/styled'

import backgroundImage from 'assets/wallpaper.jpeg'
import * as colors from '../styles/colors'

const PageBackground = styled.div({
  background: `url(${backgroundImage})`,
  minHeight: '100vh',
  height: '100%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
})

const HousesUL = styled.ul({
  color: colors.text,
  listStyle: 'none',
  padding: '0',
  display: 'grid',
  gridTemplateRows: 'masonry',
  gridGap: '1em',
  gridTemplateColumns: '1fr 1fr 1fr'
})

export {HousesUL, PageBackground}
