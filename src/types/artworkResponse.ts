import Artwork from './artwork'
import Pagination from './pagination'

interface ArtworkResponse {
  pagination: Pagination,
  data: Array<Artwork>,
}

export default ArtworkResponse