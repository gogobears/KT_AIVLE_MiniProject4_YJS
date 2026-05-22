import { Link, useNavigate, useLocation } from 'react-router-dom'
import { header, brand, nav, activeLink, btnNew } from '../styles/headerStyles'

export default function Header() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const active = (path) => activeLink(pathname === path)

  return (
    <header style={header}>
      <Link to="/" style={brand}>도서관리</Link>
      <nav style={nav}>
        <Link to="/"      style={active('/')}>홈</Link>
        <Link to="/books" style={active('/books')}>도서 목록</Link>
        <button
          onClick={() => navigate('/books/new')}
          style={btnNew}
          onMouseEnter={e => (e.target.style.background = '#c2185b')}
          onMouseLeave={e => (e.target.style.background = '#e91e63')}
        >
          새 도서 등록
        </button>
      </nav>
    </header>
  )
}
