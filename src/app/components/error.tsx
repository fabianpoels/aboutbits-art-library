export default function Error() {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600">
            Error
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
            Something went wrong
          </p>
          <p className="mb-4 text-lg font-light text-gray-500">
            Something unexpectedly went wrong. Let&apos;s fix that by getting you back to the start.
          </p>
          <a
            href="/artworks"
            className="inline-flex text-white bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
          >
            Back to Artworks
          </a>
        </div>
      </div>
    </section>
  )
}
