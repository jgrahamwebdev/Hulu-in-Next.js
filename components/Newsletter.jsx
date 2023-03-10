export default function Example() {
    return (
      <div className="bg-[#3498db]">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="inline text-3xl font-bold tracking-tight text-gray-900 sm:block sm:text-4xl">
            Want updates on latest shows and movies? 
          </h2>
          <p className="inline text-3xl font-bold tracking-tight text-white sm:block sm:text-4xl">
            Sign up for our newsletter.
          </p>
          <form className="mt-8 sm:flex">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full rounded-md border-gray-300 px-5 py-3 placeholder-gray-500 sm:max-w-xs"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-gray-800 hover:bg-gray-700 px-5 py-3 text-base font-medium text-white hover:text-[#3498db]"
              >
                Notify me
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }