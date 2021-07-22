import styled from '@emotion/styled'
import backgroundImage from 'assets/wallpaper.jpeg'
import * as colors from '../styles/colors'
import loadingSpinner from 'assets/loader-spinner.png'
import {keyframes} from '@emotion/react'
import {device} from '../styles/media-queries'

const Wrapper = styled('div')`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
`

const PageBackground = styled('div')`
  min-height: 100vh;
  height: 100%;
  background-color: ${colors.black};
  padding: 0 20px;

  @media ${device.md} {
    background: url(${backgroundImage}) no-repeat center;
    background-size: cover;
  }
`

const HousesUL = styled('ul')`
  color: ${colors.text};
  list-style: none;
  padding: 0;
  display: flex;
`

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    opacity: 1;
    filter: none
  }

  50% {
    opacity: .45;
    filter: alpha(opacity=45)
  }

  100% {
    transform: rotate(359deg);
    opacity: 1;
    filter: none
  }
`

const Spinner = styled('div')`
  height: 46px;
  width: 46px;
  background: url(${loadingSpinner}) no-repeat;
  animation: ${rotateAnimation} 2s infinite
    cubic-bezier(0.455, 0.03, 0.515, 0.955);
`

const FullPageSpinnerWrapper = styled('div')`
  position: fixed;
  z-index: 999;
  height: 46px;
  width: 46px;
  overflow: auto;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  &:before {
    content: '';
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(${colors.grey}, 0.8);
`

function FullPageSpinner() {
  return (
    <FullPageSpinnerWrapper>
      <Spinner />
    </FullPageSpinnerWrapper>
  )
}

export {HousesUL, PageBackground, Spinner, Wrapper, FullPageSpinner}
