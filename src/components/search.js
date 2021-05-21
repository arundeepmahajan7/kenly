<div className="search-container">
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