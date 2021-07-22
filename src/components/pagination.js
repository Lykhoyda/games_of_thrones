import {Pagination} from '@material-ui/lab'
import React from 'react'
import styled from '@emotion/styled'
import {PAGINATION_STEPS} from '../utils/houses'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

function PaginationCustom({setPage ,page}) {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.up('md'));
  const handleChange = (event, value) => {
    setPage(value)
  }

  return (
    <PaginationWrapper>
      <Pagination count={PAGINATION_STEPS} page={page} variant='outlined'  siblingCount={matchesMD ? 2 : 0} shape='rounded' onChange={handleChange} />
    </PaginationWrapper>
  )
}

const PaginationWrapper = styled('div')`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`

export {PaginationCustom}
