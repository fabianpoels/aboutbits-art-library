import Artwork from '@/types/artwork'
import ArtworkResponse from '@/types/artworkResponse'

const ART_API_URL = 'https://api.artic.edu/api/v1'
const minimalFields = 'id,title,artist_title,place_of_origin'
const allFields = `${minimalFields},date_start,dimensions,medium_display,department_title,artwork_type_title,image_id`

const pageSize = 10
const defaultPage = 1

export async function fetchArtworks({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined }
}): Promise<ArtworkResponse> {
  const search = searchParams?.search || null
  const page = searchParams?.page || defaultPage

  try {
    let url = `${ART_API_URL}/artworks?limit=${pageSize}&page=${page}&fields=${minimalFields}`
    if (search) {
      url = `${ART_API_URL}/artworks/search?q=${search}&size=${pageSize}&page=${page}&fields=${minimalFields}`
    }

    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  } catch (error) {
    console.error('Error fetching artworks:', error)
    throw error
  }
}

export async function fetchArtworkDetails(id: string): Promise<Artwork> {
  try {
    const response = await fetch(`${ART_API_URL}/artworks/${id}?fields=${allFields}`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    return { ...data.data, iiif_url: data.config.iiif_url }
  } catch (error) {
    console.error('Error fetching artwork details:', error)
    throw error
  }
}
