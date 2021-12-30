import React, { useState } from 'react';
import './ApplicationForm.css';

const ApplicationForm = (props) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    email: '',
  });

  const {
    firstName,
    lastName,
    address1,
    address2,
    city,
    state,
    zip,
    phone,
    email,
  } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      address1,
      address2,
      city,
      state,
      zip,
      phone,
      email,
    };
    window.location.href = '/checkout';
    // localStorage.setItem('user', JSON.stringify(user));
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="form-header">
        <h1>Application Form</h1>
      </div>

      <div className="form-body">
        <div className="horizontal-group">
          <div className="form-group left">
            <label htmlFor="firstname" className="label-title">
              First name:*
            </label>
            <input
              type="text"
              id="firstname"
              className="form-input"
              placeholder="enter your first name"
              required="required"
              value={firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
          </div>
          <div className="form-group right">
            <label htmlFor="lastname" className="label-title">
              Last name:*
            </label>
            <input
              type="text"
              id="lastname"
              className="form-input"
              placeholder="enter your last name"
              required="required"
              value={lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="address" className="label-title">
            Address Line1:*
          </label>
          <input
            type="text"
            id="address"
            className="form-input"
            placeholder="street name and number"
            required="required"
            value={address1}
            onChange={(e) =>
              setFormData({ ...formData, address1: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="address" className="label-title">
            Address Line2:
          </label>
          <input
            type="text"
            id="address"
            className="form-input"
            placeholder="suite, appartment"
            value={address2}
            onChange={(e) =>
              setFormData({ ...formData, address2: e.target.value })
            }
          />
        </div>

        <div className="flex">
          <div className="form-group flexElem">
            <label htmlFor="city" className="label-title">
              City*
            </label>
            <input
              type="text"
              id="city"
              className="form-input"
              placeholder="city"
              required="required"
              value={city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
            />
          </div>
          <div className="form-group flexElem">
            <label htmlFor="state" className="label-title">
              State*
            </label>
            <input
              type="text"
              className="form-input"
              id="state"
              placeholder="state"
              required="required"
              value={state}
              onChange={(e) =>
                setFormData({ ...formData, state: e.target.value })
              }
            />
          </div>
          <div className="form-group flexElem">
            <label htmlFor="zip" className="label-title">
              Zip code*
            </label>
            <input
              type="text"
              className="form-input"
              id="zip"
              placeholder="zip code"
              required="required"
              value={zip}
              onChange={(e) =>
                setFormData({ ...formData, zip: e.target.value })
              }
            />
          </div>
        </div>
        <div className="horizontal-group">
          <div className="form-group left">
            <label htmlFor="phone" className="label-title">
              Phone number:*
            </label>
            <input
              type="number"
              id="phone"
              className="form-input"
              placeholder="555-555"
              required="required"
              value={phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
          <div className="form-group right">
            <label htmlFor="email" className="label-title">
              Email address:*
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="john@doe.com"
              required="required"
              value={email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
        </div>
        <div className="form-footer">
          <input type="submit" value="Join Us" className="btn" />
        </div>
      </div>
    </form>
  );
};

export default ApplicationForm;
