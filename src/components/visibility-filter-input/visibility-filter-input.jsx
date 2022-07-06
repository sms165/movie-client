import React from 'react';
import { connect } from 'react-redux';

import Form from 'react-bootstrap/Form';


// redux
import { useDispatch, useSelector } from "react-redux";

import { setFilter } from '../../actions/actions';


export function VisibilityFilterInput(props) {
    const visibilityFilter = useSelector((state) => state.visibiltyFilter);

    const dispatch = useDispatch();

  return <Form.Control
    onChange={e => props.setFilter(e.target.value)}
    value={props.visibilityFilter}
    placeholder="filter"
  />;
}

