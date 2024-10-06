import { fetchArtworks } from '@/api/api'

import { redirect } from 'next/navigation'

import ArtworksTable from '@/app/components/table/ArtworksTable'
import ArtworksTablePagination from '@/app/components/table/ArtworksTablePagination'
import Header from '@/app/components/Header'

async function searchArtworks(formData: FormData) {
  'use server'
  const searchQuery = formData.get('search')?.toString() || ''
  if (searchQuery === '') {
    redirect('/artworks')
  }
  redirect(`/artworks?search=${encodeURIComponent(searchQuery)}`)
}

async function clearSearch() {
  'use server'
  redirect('/artworks')
}

export default async function Index({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined }
}) {
  const { data, pagination } = await fetchArtworks({ searchParams })
  const search = searchParams && searchParams.search ? searchParams.search : null

  return (
    <div>
      <Header artwork={null} />
      <div className="py-4">
        <form className="max-w-lg my-4" action={searchArtworks}>
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              name="search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500"
              placeholder="Search artwork"
              defaultValue={searchParams.search}
            />
            <div className="absolute end-2.5 bottom-2.5">
              <button
                type="submit"
                className="text-white  bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2"
              >
                Search
              </button>
              {searchParams.search && (
                <button
                  type="submit"
                  formAction={clearSearch}
                  className="text-gray-700 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium text-sm px-4 py-2 rounded-r-lg ml-2"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </form>
        <ArtworksTable artworks={data} />
        <ArtworksTablePagination pagination={pagination} search={search} />
      </div>
    </div>
  )
}
