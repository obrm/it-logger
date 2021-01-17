import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTech } from '../../actions/techAction';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = ({ addTech }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = () => {
    if (firstName === '' && lastName === '') {
      M.toast({
        html: 'Please enter the first and last name.',
        classes: 'red accent-4',
      });
    } else if (firstName === '') {
      M.toast({
        html: 'Please enter the first name.',
        classes: 'red accent-4',
      });
    } else if (lastName === '') {
      M.toast({
        html: 'Please enter the last name.',
        classes: 'red accent-4',
      });
    } else {
      addTech({ firstName, lastName });
      M.toast({
        html: `Technician ${firstName} ${lastName} was added successfully.`,
      });
      // Clear fields
      setFirstName('');
      setLastName('');
    }
  };

  return (
    <div id="add-tech-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4 className="green-text text-darken-4">New Technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor="lastName" className="active">
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className={`${
            firstName !== '' &&
            lastName !== '' &&
            'modal-close waves-effect waves-light'
          } btn green darken-4`}
        >
          Submit
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '30%',
  height: '40%',
};

AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired,
};

export default connect(null, { addTech })(AddTechModal);
