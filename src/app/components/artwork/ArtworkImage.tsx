import Artwork from '@/types/artwork'

export default function ArtworkImage({ artwork }: { artwork: Artwork }) {
  const imageUrl = `${artwork.iiif_url}/${artwork.image_id}/full/843,/0/default.jpg`

  return (
    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <dt className="text-sm font-bold leading-6 text-gray-900">Image</dt>
      <dd className="mt-1 sm:col-span-2 sm:mt-0">
        <img src={imageUrl} alt={`${artwork.title} by ${artwork.artist_title}`} />
      </dd>
    </div>
  )
}
