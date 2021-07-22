import {client} from './api-client'
import {useQuery} from 'react-query'
import {PAGE_SIZE} from './constants'

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

export {useHouse, useHouses}
