import Link from 'next/link'

import Artwork from '@/types/artwork'

export default function Header({ artwork }: { artwork: Artwork | null }) {

  if (artwork) {
    return (
      <div className="flex flex-row">
        <div className="text-4xl font-extrabold leading-none tracking-tight">
          <Link href={'/artworks'}>Artworks</Link>
        </div>
        <div className="text-4xl font-extrabold leading-none tracking-tight ml-3">{'>'}</div>
        <div className="text-4xl font-extrabold leading-none tracking-tight ml-3">{artwork.title}</div>
      </div>
    )
  } else {
    return (
      <div>
        <h1 className="text-4xl font-extrabold leading-none tracking-tight">Artworks</h1>
      </div>
    )
  }
}
