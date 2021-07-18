import {client} from "./api-client";
import {useQuery} from "react-query";

function useHouses(pageNumber = 1) {
    const {data} = useQuery({
        queryKey: 'houses',
        queryFn: () => client(`houses?page=${encodeURIComponent(pageNumber)}&pageSize=15`).then(data=> data)
    })
    return data
}

function useHouse(houseId) {
    const {data} = useQuery({
        queryKey: ['house', {houseId}],
        queryFn: () => client(`houses/${houseId}`).then(data=> data)
    })
    return data
}

export {useHouses, useHouse}
