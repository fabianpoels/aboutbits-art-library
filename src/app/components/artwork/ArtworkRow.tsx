export default function ArtworkRow({ field, value }: { field: string; value: string | undefined }) {
  return (
    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <dt className="text-sm font-bold leading-6 text-gray-900">{field}</dt>
      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{value}</dd>
    </div>
  )
}
