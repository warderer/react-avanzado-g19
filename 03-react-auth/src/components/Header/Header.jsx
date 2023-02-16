import './Header.scss'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'

const Header = () => {
  const { isAuth, logout } = useContext(AuthContext)
  return (
    <nav className='header'>
      <Link to='/' className='header__logo'>LOGO</Link>
      <ul className='header__nav-list'>
        <li className='header__list-item'>
          <Link to='/' className='header__item-link header__item-link--is-active'>Home</Link>
        </li>
        {
          !isAuth
            ? (
              <>
                <li className='header__list-item'>
                  <Link to='/login' className='header__item-link'>Login</Link>
                </li>
                <li className='header__list-item'>
                  <Link to='/signup' className='header__item-link'>Signup</Link>
                </li>
              </>
              )
            : (
              <>
                <li className='header__list-item'>
                  <Link to='/dashboard' className='header__item-link'>Dashboard</Link>
                </li>
                <li className='header__list-item'>
                  <Link to='/secret' className='header__item-link'>Secret</Link>
                </li>
                <li className='header__list-item'>
                  <Link to='/signup' className='header__item-link' onClick={logout}>Logout</Link>
                </li>
              </>
              )
        }

      </ul>
    </nav>
  )
}
export default Header
