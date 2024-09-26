

const Navbar = ({setCategory}) => {
  return (
    <div>
      <nav className="navbar navbar-expand-xl bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <span className="badge bg-warning text-dark fs-4">NewsFlash</span>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("technology")} style={{cursor:'pointer'}}>
            Technology
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("business")} style={{cursor:'pointer'}}>
            Business
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("health")} style={{cursor:'pointer'}}>
            Health
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("sports")} style={{cursor:'pointer'}}>
            Sports
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("science")} style={{cursor:'pointer'}}>
            Science
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("entertainment")} style={{cursor:'pointer'}}>
            Entertainment
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
