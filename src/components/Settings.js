import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editUser, clearAuthState } from '../actions/auth';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.auth.user.name,
      password: '',
      confirmPassword: '',
      editMode: false,
    };
  }

  handleChange = (fieldName, val) => {
    this.setState({
      [fieldName]: val,
    });
  };

  handleSave = () => {
    const { password, confirmPassword, name } = this.state;
    const { user } = this.props.auth;

    this.props.dispatch(editUser(name, password, confirmPassword, user._id));
  };

  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }
  render() {
    const { user, error } = this.props.auth;
    const { editMode } = this.state;
    return (
      <div className="settings text-center">
        <div className="img-container container container-fluid">
          <img
            src="https://image000.flaticon.com/png/128/149/149071.png"
            alt="user-dp"
          />
        </div>

        {error && <div className="alert error-dailog">{error}</div>}
        {error === false && (
          <div className="alert success-dailog text-center">
            Successfully updated profile!
          </div>
        )}
        <div className="field text-center">
          <div className="field-label text-center">Email</div>
          <div className="field-value">{user.email}</div>
        </div>

        <div className="field text-center">
          <div className="field-label text-center">Name</div>
          {editMode ? (
            <input
              type="text"
              onChange={(e) => this.handleChange('name', e.target.value)}
              value={this.state.name}
            />
          ) : (
            <div className="field-value">{user.name}</div>
          )}
        </div>

        {editMode && (
          <div className="field">
            <div className="field-label">New password</div>

            <input
              type="password"
              onChange={(e) => this.handleChange('password', e.target.value)}
              value={this.state.password}
            />
          </div>
        )}

        {editMode && (
          <div className="field text-center">
            <div className="field-label">Confirm password</div>

            <input
              type="password"
              onChange={(e) =>
                this.handleChange('confirmPassword', e.target.value)
              }
              value={this.state.confirmPassword}
            />
          </div>
        )}
  <div className="text-center">
        <div className="btn-grp">
          {editMode ? (<div className="text-center">
           <button className="btn btn-primary text-center" onClick={this.handleSave}>
              Save
            </button>
            </div>
        ) : (
          <div class="text-center">
            <button
              className="button edit-btn text-center"
              onClick={() => this.handleChange('editMode', true)}
            >
              Edit profile
            </button>
            </div>
          )}

          {editMode && (
            <div
              className="go-back"
              onClick={() => this.handleChange('editMode', false)}
            >
              Go back
            </div>
          )}
        </div>
      </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    auth,
  };
}
export default connect(mapStateToProps)(Settings);
