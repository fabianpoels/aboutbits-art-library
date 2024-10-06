import Artwork from '@/types/artwork'

import ArtworksTableRow from './ArtworksTableRow'

export default function Table({ artworks }: { artworks: Artwork[] }) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Artist
            </th>
            <th scope="col" className="px-6 py-3">
              Country
            </th>
          </tr>
        </thead>
        <tbody>
          {artworks.map((artwork) => (
            <ArtworksTableRow key={artwork.id} artwork={artwork} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
