import Pagination from '@/types/pagination'

import PaginationItem from './PaginationItem'

import Link from 'next/link'

export default function TablePagination({
  pagination,
  search,
}: {
  pagination: Pagination
  search: string | null
}) {
  const getPageNumbers = () => {
    const pageNumbers = []
    const maxPagesToShow = 5
    const totalPages = pagination.total_pages
    const currentPage = pagination.current_page

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
      }
      return pageNumbers
    }

    let startPage = Math.max(currentPage - 2, 1)
    const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages)

    if (endPage - startPage < maxPagesToShow - 1) {
      startPage = Math.max(endPage - maxPagesToShow + 1, 1)
    }

    if (startPage > 1) {
      pageNumbers.push(1)
      if (startPage > 2) {
        pageNumbers.push('...')
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i)
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push('...')
      }
      pageNumbers.push(totalPages)
    }

    return pageNumbers
  }

  const getHref = (page: string | number) => {
    let href = `/artworks?page=${page}`
    if (search) href = `${href}&search=${search}`
    return href
  }

  const from = pagination.offset + 1
  const to = Math.min(
    pagination.offset + pagination.limit,
    pagination.total || pagination.offset + pagination.limit
  )

  return (
    <nav
      className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-6"
      aria-label="Table navigation"
    >
      <span className="text-sm font-normal text-gray-500 mb-4 md:mb-0 block w-full md:inline md:w-auto">
        Showing{' '}
        <span className="font-semibold text-gray-900">
          {from}-{to}
        </span>{' '}
        of <span className="font-semibold text-gray-900">{pagination.total}</span>
      </span>
      <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
        <li>
          <Link
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
            href={getHref(1)}
          >
            Previous
          </Link>
        </li>
        {getPageNumbers().map((pageNumber, index) => (
          <PaginationItem
            key={index}
            pageNumber={pageNumber}
            active={pageNumber === pagination.current_page}
            href={getHref(pageNumber)}
          />
        ))}
        <li>
          <Link
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
            href={getHref(pagination.current_page + 1)}
          >
            Next
          </Link>
        </li>
      </ul>
    </nav>
  )
}
