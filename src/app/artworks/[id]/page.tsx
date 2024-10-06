import { fetchArtworkDetails } from '@/api/api'

import Header from '@/app/components/Header'
import ArtworkImage from '@/app/components/artwork/ArtworkImage'
import ArtworkRow from '@/app/components/artwork/ArtworkRow'

export default async function Page({ params }: { params: { id: string } }) {
  const artwork = await fetchArtworkDetails(params.id)

  return (
    <div>
      <Header artwork={artwork} />
      <div className="py-4">
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            {artwork.department_title}
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            {artwork.artwork_type_title}
          </p>
        </div>
        <div className="mt-6 border-gray-100">
          <dl className="divide-y divide-gray-100">
            <ArtworkRow field="Artist" value={artwork.artist_title} />
            <ArtworkRow field="Origin" value={artwork.place_of_origin} />
            <ArtworkRow field="Dimensions" value={artwork.dimensions} />
            <ArtworkRow field="Medium" value={artwork.medium_display} />
            <ArtworkImage artwork={artwork} />
          </dl>
        </div>
      </div>
    </div>
  )
}
