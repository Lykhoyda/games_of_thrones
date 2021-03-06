import {Pagination} from '@material-ui/lab'
import React from 'react'
import styled from '@emotion/styled'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {useTheme} from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import {PAGINATION_STEPS} from '../utils/constants'

function PaginationCustom({setPage, page}) {
  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.up('md'))

  const handleChange = (event, value) => {
    setPage(value)
  }

  return (
    <PaginationWrapper>
      <Pagination
        count={PAGINATION_STEPS}
        page={page}
        variant="outlined"
        siblingCount={matchesMD ? 2 : 0}
        shape="rounded"
        onChange={handleChange}
      />
    </PaginationWrapper>
  )
}

PaginationCustom.propTypes = {
  setPage: PropTypes.func,
  page: PropTypes.number,
}

const PaginationWrapper = styled('div')`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`

export {PaginationCustom}
