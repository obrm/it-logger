import React from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { deleteLog, setCurrent } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const LogItem = ({ log, deleteLog, setCurrent }) => {
  const onDelete = () => {
    deleteLog(log.id);

    M.toast({
      html: `Log deleted successfully.`,
    });
  };

  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger text-darken-2 ${
            log.attention
              ? 'red-text text-accent-4'
              : 'green-text text-darken-4'
          }`}
          style={{ fontWeight: log.attention && 'bold' }}
          onClick={() => setCurrent(log)}
        >
          {log.message}
        </a>
        <br />
        <span className="green-text text-darken-4">
          <span className="green-text text-darken-4">
            <strong>ID #{log.id}</strong> Last updated by
            <strong> {log.tech}</strong>
          </span>{' '}
          on <Moment format="DD/MM/YYYY HH:mm:ss">{log.date}</Moment>
        </span>
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons green-text text-darken-3">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
