export const page = {
  width: '100%',
}

export const headerRow = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '28px',
}

export const title = {
  fontSize: '22px',
  fontWeight: 700,
}

export const countText = {
  fontSize: '13px',
  color: '#999',
  marginTop: '3px',
}

export const primaryButton = {
  background: '#1976d2',
  color: '#fff',
  border: 'none',
  padding: '10px 22px',
  borderRadius: '6px',
  fontWeight: 600,
  fontSize: '14px',
  cursor: 'pointer',
}

export const errorBox = {
  background: '#ffebee',
  border: '1px solid #ef9a9a',
  borderRadius: '6px',
  padding: '14px 18px',
  color: '#c62828',
  marginBottom: '24px',
  fontSize: '14px',
}

export const emptyState = {
  textAlign: 'center',
  padding: '80px 0',
  color: '#9e9e9e',
}

export const emptyIcon = {
  fontSize: '56px',
  marginBottom: '16px',
}

export const emptyHeading = {
  fontSize: '17px',
  fontWeight: 600,
  marginBottom: '8px',
}

export const emptyDescription = {
  fontSize: '14px',
  marginBottom: '24px',
}

export const emptyButton = {
  background: '#1976d2',
  color: '#fff',
  border: 'none',
  padding: '11px 26px',
  borderRadius: '6px',
  fontWeight: 600,
  cursor: 'pointer',
}

export const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gap: '24px',
}

export const card = {
  background: '#fff',
  borderRadius: '10px',
  overflow: 'hidden',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  transition: 'box-shadow .22s, transform .22s',
}

export const cardHovered = {
  boxShadow: '0 12px 32px rgba(0,0,0,.18)',
  transform: 'translateY(-4px)',
}

export const cardNormal = {
  boxShadow: '0 2px 8px rgba(0,0,0,.10)',
  transform: 'translateY(0)',
}

export const coverWrapper = {
  width: '100%',
  aspectRatio: '1 / 1',
  overflow: 'hidden',
  position: 'relative',
  background: '#f0f0f0',
  flexShrink: 0,
}

export const coverImg = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
}

export const placeholderWrapper = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
}

export const placeholderIcon = {
  fontSize: '40px',
}

export const placeholderText = {
  fontSize: '12px',
  fontWeight: 700,
  color: '#555',
  textAlign: 'center',
  padding: '0 10px',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
}

export const infoWrapper = {
  padding: '12px 14px 14px',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}

export const infoTitle = {
  fontWeight: 700,
  fontSize: '15px',
  marginBottom: '5px',
  color: '#1a1a1a',
  display: '-webkit-box',
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
}

export const infoDesc = {
  fontSize: '12px',
  color: '#777',
  lineHeight: 1.55,
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
}

export const infoFooter = {
  marginTop: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

export const dateText = {
  fontSize: '11px',
  color: '#bbb',
}

export const badgePrimary = {
  fontSize: '10px',
  background: '#e3f2fd',
  color: '#1565c0',
  padding: '2px 7px',
  borderRadius: '20px',
  fontWeight: 600,
}

export const badgeSecondary = {
  fontSize: '10px',
  background: '#f5f5f5',
  color: '#999',
  padding: '2px 7px',
  borderRadius: '20px',
}

export const overlay = {
  position: 'absolute',
  inset: 0,
  background: 'rgba(0,0,0,.45)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
}

export const overlayBtn = (bg) => ({
  background: bg,
  color: '#fff',
  border: 'none',
  padding: '7px 16px',
  borderRadius: '5px',
  fontSize: '13px',
  fontWeight: 600,
  cursor: 'pointer',
})
