import Logo from '../../assets/Logo.png'
import home from '../../assets/home.png'
/* import lock from '../../assets/lock.png'
import key from '../../assets/key.png'
import box from '../../assets/box.png'
import exit from '../../assets/exit.png'
import { Link } from 'react-router-dom'; */

const Sidebar = () => {
  /* Как запилю роуты доделаю */

  return (
    <>
      <div className='w-[16%] h-full flex flex-col items-start gap-4 px-3 py-6 relative bg-secondary border-r-2 border-secondaryM'>
        <img src={Logo} alt="Logo" className='pl-1 py-3 w-36' />
        <div className='w-full flex flex-col justify-between h-full'>
          <nav className='px-1'>
            <a href="" className='flex items-center gap-4 hover:bg-[#f1f1f1] p-5 rounded-xl'>
              <img src={home} alt="Home" className='w-6 h-6' />
              <span className='text-xl font-medium'>Главная</span>
            </a>
          </nav>

          <div className='flex flex-col pl-6 py-3 border-t-[1px] border-gray-400/60'>
            <a href="" className='font-medium text-lg'>Документация</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar