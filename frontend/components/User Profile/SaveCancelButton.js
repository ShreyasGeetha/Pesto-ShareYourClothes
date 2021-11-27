import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile, updateUserProfileImage } from "../../redux/actions/userActions";
import Link from 'next/link';


const SaveCancelButton = () => {

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const email = useSelector(state => state.email);
  const password = useSelector(state => state.password);
  const userName = useSelector(state => state.userName);

  const updateUserInfo = async (e) => {
    e.preventDefault()
    console.log('On Save', userImage)
    await dispatch(updateUserProfile({
      id: userInfo._id,
      name: userName,
      email: email,
      password: password      
    }))
    
    
  }

  return (
    <>
      <div className="pt-6 divide-y divide-gray-200">      
        <div className="mt-4 py-4 px-4 flex justify-end sm:px-6">
          <Link href="/">
            <a>
              <button
                type="button"
                className="bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
              >
                Cancel
              </button>
            </a>
          </Link>
          <button
            type="submit"
            onClick={updateUserInfo}
            className="ml-5 bg-sky-700 border border-gray-300 border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-black hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default SaveCancelButton;