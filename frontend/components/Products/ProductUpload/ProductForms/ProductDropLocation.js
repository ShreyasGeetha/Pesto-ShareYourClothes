const ProductDropLocation = () => {
  return (
    <>
      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
        <label htmlFor="about" className="tracking-wider font-semibold font-serif text-sm  block  text-gray-700sm:mt-px sm:pt-2">
          Drop Location
        </label>
        <div className="mt-1 sm:mt-0 sm:col-span-2">
          <textarea
            id="dropLocation"
            name="dropLocation"
            rows={3}
            className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
            defaultValue={''}
          />
          <p className="mt-2 text-sm font-semibold tracking-wider text-gray-500">Please write full address, with landmarks.</p>
        </div>
      </div>
    </>
  );
}

export default ProductDropLocation;