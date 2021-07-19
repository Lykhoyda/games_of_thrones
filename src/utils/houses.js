import {client} from './api-client'
import {useInfiniteQuery, useQuery} from 'react-query'

// As an Api doesn't return the data about the current and total page
// I decided to hardcode this values
const HOUSES_AMOUNT = 444
const PAGE_SIZE = 15
const PAGES = Math.round(HOUSES_AMOUNT / PAGE_SIZE)
console.log(PAGES)
let paginator = 1

const fetchInfiniteHouses = ({pageParam = paginator}) => {
  if(pageParam) {
    return client(`houses?page=${encodeURIComponent(pageParam)}&pageSize=${PAGE_SIZE}`).then(res => {
      ++paginator
      return res
    })
  }
}

function useHousesInfinite() {
  const {data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, error} = useInfiniteQuery(
    'houses',
    fetchInfiniteHouses,
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.length) {
          return paginator
        }
        return undefined
      },
    },
  )
  return {data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, error}
}

function useHouse(houseId) {
  const {data, isLoading} = useQuery({
    queryKey: ['house', {houseId}],
    queryFn: () => client(`houses/${houseId}`).then(data => data),
  })

  return {data, isLoading}
}

export {useHouse, useHousesInfinite}
