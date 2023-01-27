/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
    return (
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="/img/collage.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-gray-700 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Enjoy on your TV</h1>
          <p className="mt-6 max-w-3xl text-xl text-indigo-100">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
          </p>
        </div>
      </div>
    )
  }