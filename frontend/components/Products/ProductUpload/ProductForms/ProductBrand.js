import { useDispatch, useSelector } from "react-redux";


const ProductBrand = () => {

  const dispatch = useDispatch();
  const productBrandError = useSelector(state => state.productBrandError)


  const setProductBrand = async (e) => {
    
    await dispatch(setProductBrand(e.target.value))
  }
  
  return (
    <>
      <div>
        <div className="flex">
          <div className="mr-1">
            <label htmlFor="productBrand" className="tracking-wider font-semibold font-serif text-sm  block  text-gray-700">
              Product Brand 
            </label>
          </div>
          
        </div>
        <div className="mt-1">
          <input
            id="ProductBrand"
            name="ProductBrand"
            type="ProductBrand"
            autoComplete=""
            onChange={setProductBrand}
            placeholder='Enter your ProductBrand'
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {productBrandError && <p className="text-xs italic text-red-500 font-bold">Please enter a Product Brand.</p>}
        </div>
      </div>
    </>
  );
}

export default ProductBrand;