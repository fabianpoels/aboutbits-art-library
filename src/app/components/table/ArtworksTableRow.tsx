import Link from 'next/link'

import Artwork from '@/types/artwork'

export default function TableRow({ artwork }: { artwork: Artwork }) {

  return (
    <tr key={artwork.id} className="bg-white border-b">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        <Link href={`/artworks/${artwork.id}`}>{artwork.title}</Link>
      </th>
      <td className="px-6 py-4">{artwork.artist_title}</td>
      <td className="px-6 py-4">{artwork.place_of_origin}</td>
    </tr>
  )
}
