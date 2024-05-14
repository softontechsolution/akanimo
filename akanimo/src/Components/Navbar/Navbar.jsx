
import logo from '../../assets/ak-logo.png'

const Navbar = () => {
  return (
    <div className='w-full h-24 mx-auto flex justify-between items-center font-outfit border-b-[1px] border-b-gray-600'>
      <div>
        <img src={logo} alt='logo' className='h-6'/>
      </div>
      <div>
        <ul className='flex items-center gap-10'>
            <li className='text-base text-gray-200 tracking-wide cursor-pointer hover:text-purple-700 duration-300'>Home</li>
            <li className='text-base text-gray-200 tracking-wide cursor-pointer hover:text-purple-700 duration-300'>Music</li>
            <li className='text-base text-gray-200 tracking-wide cursor-pointer hover:text-purple-700 duration-300'>Concerts</li>
            <li className='text-base text-gray-200 tracking-wide cursor-pointer hover:text-purple-700 duration-300'>Merch</li>
            <li className='text-base text-gray-200 tracking-wide cursor-pointer hover:text-purple-700 duration-300'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar