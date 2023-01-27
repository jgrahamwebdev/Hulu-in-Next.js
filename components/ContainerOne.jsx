/* This example requires Tailwind CSS v2.0+ */

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="relative bg-gray-50">  
      <main className="lg:relative">
        <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Movies and shows</span>{' '}
              <span className="block text-[#3498db] xl:inline">anytime anywhere</span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#3498db] px-8 py-3 text-base font-medium text-white hover:bg-[#2980b9] md:py-4 md:px-10 md:text-lg"
                >
                  Get started
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-gray-800 hover:bg-gray-700 px-8 py-3 text-base font-medium text-white hover:text-[#3498db] md:py-4 md:px-10 md:text-lg"
                >
                  Try free for 30 days
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="/img/people-1.jpg"
            alt=""
          />
        </div>
      </main>
    </div>
  )
}