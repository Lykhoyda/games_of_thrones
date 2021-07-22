import {client} from './api-client'
import {useQuery} from 'react-query'

// Hardcode the values as this data is missing from API
const API_HOUSES_AMOUNT = 444
const PAGE_SIZE = 15
const PAGINATION_STEPS = Math.round(API_HOUSES_AMOUNT / PAGE_SIZE)

const useHouses = (pageNumber = 1) => {
  const {data, isLoading, refetch} = useQuery({
    queryKey: ['houses'],
    queryFn: () =>
      client(
        `houses?page=${encodeURIComponent(pageNumber)}&pageSize=${PAGE_SIZE}`,
      ).then(data => data),
  })

  return {data, refetch, isLoading}
}

function useHouse(houseId) {
  const {data, isLoading} = useQuery({
    queryKey: ['house', {houseId}],
    queryFn: () => client(`houses/${houseId}`).then(data => data),
  })

  return {data, isLoading}
}

export {useHouse, useHouses, PAGINATION_STEPS}
