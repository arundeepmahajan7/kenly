import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../actions/auth';
import { searchUsers } from '../actions/search';

class Navbar extends React.Component {
  logOut = () => {
    localStorage.removeItem('token');
    this.props.dispatch(logoutUser());
  };

  handleSearch = (e) => {
    const searchText = e.target.value;

    this.props.dispatch(searchUsers(searchText));
  };

  render() {
    const { auth, results } = this.props;
    return (
      <div className="bg-primary">
      <nav className="nav navbar-default bg-primary">
        <div className="bg-primary">
          <Link to="/login">
            <img className="img-circle"
              src="https://image000.flaticon.com/png/128/2065/2065203.png"
              alt="logo" style={{height:"80px"} }
            />
          </Link>
        </div><div className="search-container">
          <img
            className="search-icon"
            src="https://image000.flaticon.com/png/128/149/149071.png"
            alt="search-icon"
          />
          <input placeholder="Search" onChange={this.handleSearch} />

          {results.length > 0 && (
            <div className="search-results">
              <ul>
                {results.map((user) => (
                  <li className="search-results-row" key={user._id}>
                    <Link to={`/user/${user._id}`}>
                      <img
                        src="https://image000.flaticon.com/png/128/149/149071.png"
                        alt="user-dp"
                      />
                      <span>{user.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <Link to="/login"><h1 className="text-white shadow" >Let's talk</h1> </Link>
        <div className="nav">
          {auth.isLoggedin && (
            <div className="user">
              <Link to="/settings">
                <img
                  src="https://image000.flaticon.com/png/128/149/149071.png"
                  alt="user-dp"
                  id="user-dp"
                />
              </Link>
              <span className="text-white text-center">{auth.user.name}</span>
            </div>
          )}
          

          <div className="nav-links bg-primary">
            <ul>
              {!auth.isLoggedin && (
                <li className="bg-primary">
                  <Link to="/login" className="bg-primary"><button className="btn btn-light">Log In</button></Link>
                </li>
              )}
              {auth.isLoggedin && <li onClick={this.logOut}><button className="btn btn-danger">Log out</button></li>}
              {!auth.isLoggedin && (
                <li className="bg-primary">
                  <Link to="/signup"><button className="btn btn-light">Sign Up</button></Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    results: state.search.results,
  };
}
export default connect(mapStateToProps)(Navbar);
