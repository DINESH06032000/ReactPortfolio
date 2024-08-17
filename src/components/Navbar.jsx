import { Outlet,Link } from "react-router-dom";

function Navbar(){
    return(
        <>
        
        <nav className="navbar navbar-expand-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="">DINESH</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav m-auto d-flex navgap">
              <li className="nav-item px-3">
                <Link to="/" className="routerlink">             
                Home
                </Link>
              </li>
              <li className="nav-item  px-3">
                <Link to="/education" className="routerlink">
                Education
                </Link>
              </li>
              <li className="nav-item  px-3">
                <Link to='/experience' className="routerlink">
                Experience
                </Link>
              </li>
              <li className="nav-item  px-3">
                <Link to='/project' className="routerlink">
                Project
                </Link>
              </li>
              <li className="nav-item  px-3">
                <Link to='/contact' className="routerlink">
                Contact
                </Link>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
      <Outlet/>

        </>
    )
}
export default Navbar;