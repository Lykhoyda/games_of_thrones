import styled from '@emotion/styled'
import backgroundImage from 'assets/wallpaper.jpeg'
import * as colors from '../styles/colors'
import {rgba} from 'emotion-rgba'
import loadingSpinner from 'assets/loader-spinner.png'
import {keyframes} from '@emotion/react'

const PageBackground = styled('div')`
  min-height: 100vh;
  height: 100%;
  background: url(${backgroundImage}) no-repeat center;
  background-size: auto;
  background-color: ${colors.black};
  background-position-y: top;
  padding: 20px 0;
`

const HousesUL = styled('ul')`
  color: ${colors.text};
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-rows: auto;
  grid-gap: 1em;
  grid-template-columns: 1fr 1fr 1fr;
`

const Row = styled('div')`
  padding: 10px 20px;
  background: ${rgba(colors.grey, 0.7)};
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25),
  0 2px 2px rgba(0, 0, 0, 0.20),
  0 4px 4px rgba(0, 0, 0, 0.15),
  0 8px 8px rgba(0, 0, 0, 0.10),
  0 16px 16px rgba(0, 0, 0, 0.05);
  min-height: 150px;
  display: flex;
  flex-direction: column;
  align-content: center;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: ${rgba(colors.grey, 0.85)};
  }
`

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    opacity: 1;
    -ms-filter: none;
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
  animation: ${rotateAnimation} 2s infinite cubic-bezier(0.455, .03, .515, .955);
`

export {HousesUL, PageBackground, Spinner}
