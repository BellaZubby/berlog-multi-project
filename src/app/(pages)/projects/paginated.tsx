import React, { useState } from 'react'
import { imageTypes } from './projectData'

type Props = {}

const Paginated = (data:imageTypes[], limit:number) => {
    const [currentPage, setPage] =useState(1)

    const getPaginatedData = () => {
        const startIndex = (currentPage -1) * limit
        
        const endIndex = startIndex + limit

        return data.slice(startIndex, endIndex)
    }

    const paginatedData = getPaginatedData()

    // handle previous
    const prevPage = () => {
        if (currentPage > 1) {
            setPage(previousPage => previousPage - 1)
        }
    }

    // handle next

    const nextPage = () => {
        if (currentPage < Math.ceil(data.length/limit)) {
            setPage(previousPage => previousPage + 1)
        }
    }
 return {nextPage, prevPage, paginatedData, currentPage}
}

export default Paginated