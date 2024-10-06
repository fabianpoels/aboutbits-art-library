interface Artwork {
  // minimal fields
  id: number
  title: string
  artist_title: string
  place_of_origin: string

  // all fields
  date_start?: string
  dimensions?: string
  medium_display?: string
  department_title?: string
  artwork_type_title?: string
  image_id?: string
  iiif_url?: string
}

export default Artwork
