/** @jsxImportSource @emotion/react */
import React from 'react'
import {useHouse} from '../utils/houses'
import {useParams} from 'react-router-dom'

function HouseScreen() {
  const {houseId} = useParams()
  const house = useHouse(houseId)

  return (
    <div css={{color: 'white'}}>
      <div>'house page' {house?.url}</div>
      <div>'house name' {house?.name}</div>
    </div>
  )
}

export {HouseScreen}
