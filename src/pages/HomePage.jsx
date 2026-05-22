import { useNavigate } from 'react-router-dom'
import { container, heading, description, button } from '../styles/homePageStyles'

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div style={container}>
      <h1 style={heading}>
        도서 관리 시스템에 오신 것을 환영합니다!
      </h1>
      <p style={description}>
        이 시스템을 사용하여 도서를 등록하고 관리할 수 있습니다.
      </p>
      <button
        onClick={() => navigate('/books')}
        style={button}
      >
        도서 목록 보기
      </button>
    </div>
  )
}
