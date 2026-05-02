import UserCircleIcon from "../../../components/svg/UserCircleIcon.tsx";


function MainLayoutProfileDropDownLink() {
  return (
    <div className='flex items-center gap-x-2 p-2'>
      <UserCircleIcon
        width='40' height='40' strokeWidth='1'
      />

      <div className='flex flex-col space-y-1'>
        <p className='font-medium'>
          کاربر سامانه
        </p>
      </div>
    </div>
  )
}

export default MainLayoutProfileDropDownLink