import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()

  return (
    <div className="nav-fix">
      <header className="header">
        <h1 onClick={() => navigate('/')}>Profile</h1>
        <ul>
          <li>
            <button onClick={() => navigate('/grade')}>Others</button>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default Navbar
