/** @jsxImportSource @emotion/react */

import React from 'react'
import styled from '@emotion/styled'
import {rgba} from 'emotion-rgba'
import * as colors from 'styles/colors'
import {Link} from 'react-router-dom'
import {getIdFromURL} from '../utils/url'

function HousesRow({house}) {
  return (
    <Link to={`/house/${getIdFromURL(house.url)}`} css={{
      textDecoration: 'none',
      color: colors.text,
    }}>
      <Row>
        {house.name}
      </Row>
    </Link>
  )
}

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
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: ${rgba(colors.grey, 0.85)};
  }
`

export {HousesRow}
