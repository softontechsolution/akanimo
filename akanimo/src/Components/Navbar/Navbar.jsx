
import logo from '../../assets/ak-logo.png'

const Navbar = () => {
  return (
    <div className='w-full h-29 mx-auto flex justify-between items-center font-outfit'>
      <div>
        <img src={logo} alt='logo' />
      </div>
      <div>
        <ul className='flex items-center gap-10'>
            <li className='text-base text-gray-400 tracking-wide cursor-pointer hover:text-gold-400 duration-300'>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
      </div>
        <div className='nav-connect'>Connect With Me</div>
    </div>
  )
}

export default Navbar