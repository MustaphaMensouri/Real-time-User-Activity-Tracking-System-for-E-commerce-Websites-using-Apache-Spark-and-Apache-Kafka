import React  from 'react';
import { Link } from 'react-scroll';
import CardLogin from './Login/CardLogin.jsx';



const Header = () => {

  const [open, setOpen] = React.useState(false);
  
  const handlLogin = ()=>{
    setOpen(true)
  }

//   const {email, password} = login_info;

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (

    <div>

      <header className='shadow-md py-4 px-4 sm:px-10 bg-white font-sans min-h-[70px] fixed w-full top-0 z-50'>
      
        <div className='flex flex-wrap items-center justify-between gap-4'>
          <a href='/home'  
            className="text-xl font-bold leading-none tracking-tight  md:text-4xl lg:text-4xl ">

                Fash  

              <mark className="px-2 text-white bg-red-600 rounded red:bg-blue-500">ion</mark> 
          
          </a>      

      <div className='flex items-center max-sm:ml-auto lg:order-1'>
        {/* // this the targit svg here is the work */}
        <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24"
          className="mr-4 cursor-pointer hover:fill-[#ff0011] inline" onClick={handlLogin}>
          <circle cx="10" cy="7" r="6" data-original="#000000" />
          <path
            d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
            data-original="#000000" />
        </svg>
        <span className="relative ">
          <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px"
            className="cursor-pointer hover:fill-[#ff0011] inline" viewBox="0 0 512 512">
            <path
              d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
              data-original="#000000"></path>
          </svg>
          <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">0</span>
        </span>
        <button id="toggle" className='lg:hidden ml-7'>
          <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"></path>
          </svg>
        </button>
      </div>

      <ul id="collapseMenu" className='lg:!flex lg:space-x-4 max-lg:space-y-2 max-lg:hidden max-lg:w-full'>
        <li className='max-lg:border-b max-lg:py-2 px-3'>
          <a href='/' className='hover:text-[#ff0011] text-[#ff0011] font-bold block text-xl'>Home</a>
        </li>
        <li className='max-lg:border-b max-lg:py-2 px-3'><a href='/'
            className=' hover:text-[#ff0011] text-gray-600 font-bold block text-xl'>Team</a>
        </li>
        <li className='max-lg:border-b max-lg:py-2 px-3'><a href='/'
            className='hover:text-[#ff0011] text-gray-600 font-bold block text-xl'>Feature</a>
        </li>
        <li className='max-lg:border-b max-lg:py-2 px-3'><a href='/'
            className='hover:text-[#ff0011] text-gray-600 font-bold block text-xl'>Blog</a>
        </li>
        <li 
            className='max-lg:border-b max-lg:py-2 px-3'>
            <Link 
              to='bestsellersid'
              smooth={true}
              duration={500}
              className='hover:text-[#ff0011] text-gray-600 font-bold block text-xl'>
              Category
            </Link>
        </li>
        <li className='max-lg:border-b max-lg:py-2 px-3'><a href='/'
            className='hover:text-[#ff0011] text-gray-600 font-bold block text-xl'>Contact</a>
        </li>
      </ul>
    </div>
  </header>
  {open && <CardLogin open={open} setOpen={setOpen} handleSubmit={handleSubmit} />}
    </div>
  )
}

export default Header
