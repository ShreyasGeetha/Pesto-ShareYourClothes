const userProf = {
  imageUrl:
    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80',
}

const UserImageLg = () => {
  return (
    <>
      <div className="hidden relative rounded-full overflow-hidden lg:inline-block">
        <img className="relative rounded-full w-40 h-40" src={userProf.imageUrl} alt="" />
        <label
          htmlFor="desktop-user-photo"
          className="absolute inset-0 w-full rounded-full h-full bg-red-50 bg-opacity-75 flex items-center justify-center text-sm font-medium text-black opacity-0 hover:opacity-100 focus-within:opacity-100"
        >
          <span>Change</span>
          <span className="sr-only"> user photo</span>
          <input
            type="file"
            id="desktop-user-photo"
            name="user-photo"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
          />
        </label>
      </div>
    </>
  );
}

export default UserImageLg;