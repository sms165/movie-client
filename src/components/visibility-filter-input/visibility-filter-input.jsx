import React from 'react';
import { connect } from 'react-redux';

import Form from 'react-bootstrap/Form';

// import action
import{setFilter} from "../../actions/actions";

// redux
import { useDispatch, useSelector } from "react-redux";



function VisibilityFilterInput(props) {
  return <Form.Control
    onChange={e => props.setFilter(e.target.value)}
    value={props.visibilityFilter}
    placeholder="Search by title"
  />;
}

export default connect(
  null,
  { setFilter }
)(VisibilityFilterInput);