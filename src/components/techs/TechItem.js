import React from 'react';
import { connect } from 'react-redux';
import { deleteTech } from '../../actions/techAction';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem = ({ tech, deleteTech }) => {
  const onDelete = () => {
    deleteTech(tech.id);

    M.toast({
      html: `${tech.firstName} ${tech.lastName} was deleted successfully.`,
    });
  };

  return (
    <li className="collection-item">
      <div className="green-text text-darken-4">
        {tech.firstName} {tech.lastName}
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons green-text text-darken-3">delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
};

export default connect(null, { deleteTech })(TechItem);
