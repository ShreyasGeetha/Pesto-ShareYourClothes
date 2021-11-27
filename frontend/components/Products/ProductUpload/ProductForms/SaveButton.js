import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { errorProductBrand, errorProductCategory, errorProductColor, errorProductDescription, errorProductDropLocation, errorProductName, errorProductPickupTime, errorProductSize, getProductImageS3Link } from "../../../../redux/actions/productUploadActions";

const SaveButton = () => {

  const productName = useSelector(state => state.productName)
  const productBrand = useSelector(state => state.productBrand)
  const productCategory = useSelector(state => state.productCategory)
  const productColor = useSelector(state => state.productColor)
  const productSize = useSelector(state => state.productSize)
  const productPickupTime = useSelector(state => state.productPickupTime)
  const productDescription = useSelector(state => state.productDescription)
  const productDropLocation = useSelector(state => state.productDropLocation)
  const productImage = useSelector(state => state.productImage)
  const productImageAlt = useSelector(state => state.productImageAlt)
  const createProductImage = useSelector(state => state.createProductImage)
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin
  const dispatch = useDispatch();

  const productUploadSaveHandler = async (e) => {
    e.preventDefault()
    // const config = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   }      
    // }
    // const {data} = await axios.post(
    //     '/api/products', {name:'hello'},
    //   config)
    // console.log('upload products',data)
    console.log("save button clicked",productImageAlt)
    await dispatch(getProductImageS3Link(productImage.value))
    if (createProductImage.productImage !== '') {
      const prod = {
        name: productName.value,
        brand: productBrand.value,
        category: productCategory.value,
        color: productColor.value,
        description: productDescription.value,
        dropLocation: productDropLocation.value,
        pickupTime: productPickupTime.value,
        imageSrc: createProductImage.productImage,
        imageAlt: productImageAlt.value,
        sizes: productSize.value,
        isVisible: true,
        user: userInfo._id,        
      }
      const config = {
      header: {
        'Content-Type': 'application/json'
      }      
    }
 
    const {data} = await axios.post(
      '/api/products',
      prod,
      config)
      console.log('has all the product data been collected', prod)
    }
    


    // var validation = true;
    // if (productName) {
    //   console.log('this prints and works')
    // } else {
    //   console.log('illappa work agtailla')
    // }
    // if (productName.productName === '' || productName === '') {
    //   await dispatch(errorProductName())
    //   validation = false
    // }
    // if (productBrand.productBrand === '' || productBrand === '') {
    //   await dispatch(errorProductBrand())
    //   validation = false
    // }
    // if (productCategory.productCategory === '' || productCategory === 'Choose Category') {
    //   await dispatch(errorProductCategory())
    //   validation = false
    // }
    // if (productColor.productColor === '' || productColor === 'Select Color') {
    //   await dispatch(errorProductColor())
    //   validation = false
    // }
    // if (productSize.productSize === '' || productSize === 'Select Size') {
    //   await dispatch(errorProductSize())
    //   validation = false
    // }
    // if (productPickupTime.productPickupTime === '' || productPickupTime === 'Select Pickup Time') {
    //   await dispatch(errorProductPickupTime())
    //   validation = false
    // }
    // if (productDescription.productDescription === '' || productDescription === '') {
    //   await dispatch(errorProductDescription())
    //   validation = false
    // }
    // if (productDropLocation.productDropLocation === '' || productDropLocation === '') {
    //   await dispatch(errorProductDropLocation())
    //   validation = false
    // }
    // if (validation) {
    //   console.log('all fields are updated')
    // } else {
    //   console.log('Hey, fill in Mandatory fields')
    // }
    // console.log('The chosen product Category is: ', productCategory)
  }

  return (
    <>
      <button
        type="submit"
        onClick={productUploadSaveHandler}
        className="ml-3 inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-gray-50 hover:bg-header  focus:ring-2 focus:ring-offset-2 hover:text-white focus:ring-header"
      >
            Save
          </button>
    </>
  );
}

export default SaveButton;