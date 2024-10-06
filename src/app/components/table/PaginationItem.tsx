import Link from 'next/link'

export default function PaginationItem({
  pageNumber,
  active,
  href
}: {
  pageNumber: number | string
  active: boolean
  href: string
}) {
  const notALink = typeof pageNumber === 'string'

  let extraClasses =
    'leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
  if (active) {
    extraClasses =
      'text-grey-900 border border-gray-300 bg-gray-100 hover:bg-gray-100 hover:text-gray-1000'
  }
  if (notALink) {
    extraClasses = 'text-grey-900 border border-gray-300 bg-gray-100'
  }

  return (
    <li>
      {active || notALink ? (
        <button
          disabled={active || notALink}
          className={`flex items-center justify-center px-3 h-8 ${extraClasses}`}
        >
          {pageNumber}
        </button>
      ) : (
        <Link
          className={`flex items-center justify-center px-3 h-8 ${extraClasses}`}
          href={href}
        >
          {pageNumber}
        </Link>
      )}
    </li>
  )
}
