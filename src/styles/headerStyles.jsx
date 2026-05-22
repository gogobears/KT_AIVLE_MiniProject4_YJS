export const header = {
  background: '#1565c0',
  color: '#fff',
  height: '56px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 28px',
  boxShadow: '0 2px 6px rgba(0,0,0,.25)',
  position: 'sticky',
  top: 0,
  zIndex: 100,
}

export const brand = {
  color: '#fff',
  fontWeight: 700,
  fontSize: '18px',
  letterSpacing: '.3px',
}

export const nav = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
}

export const linkBase = {
  color: '#fff',
  fontSize: '15px',
  opacity: .9,
  transition: 'opacity .15s',
}

export const activeLink = (isActive) => ({
  ...linkBase,
  opacity: isActive ? 1 : .8,
  fontWeight: isActive ? 600 : 400,
  borderBottom: isActive ? '2px solid #fff' : '2px solid transparent',
  paddingBottom: '2px',
})

export const btnNew = {
  background: '#e91e63',
  color: '#fff',
  border: 'none',
  padding: '8px 18px',
  borderRadius: '4px',
  fontWeight: 600,
  fontSize: '14px',
  cursor: 'pointer',
  transition: 'background .15s',
}
