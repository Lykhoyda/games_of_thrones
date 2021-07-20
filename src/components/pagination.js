import {Pagination} from '@material-ui/lab'
import React from 'react'
import styled from '@emotion/styled'
import {PAGINATION_STEPS} from '../utils/houses'

function PaginationCustom({setPage ,page}) {
  const handleChange = (event, value) => {
    setPage(value)
  }

  return (
    <PaginationWrapper>
      <Pagination count={PAGINATION_STEPS} page={page} variant='outlined' shape='rounded' onChange={handleChange} />
    </PaginationWrapper>
  )
}

const PaginationWrapper = styled('div')`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`

export {PaginationCustom}
