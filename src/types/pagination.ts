interface Pagination {
  total?: number,
  limit: number,
  offset: number,
  total_pages: number,
  current_page: number,
  next_url?: string
}

export default Pagination