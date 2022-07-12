import React from 'react';
import { useLocation } from "react-router-dom";

import Form from 'react-bootstrap/Form';


// import action
import{setFilter} from "../../actions/actions";

// redux
import { useDispatch, useSelector } from "react-redux";


 function VisibilityFilterInput(props) {
    const dispatch = useDispatch();
    const { visibilityFilter } = useSelector((state) => state.visibilityFilter);
    const location = useLocation();
  console.log(location);

 let inputText= "";

  if(location.pathname =='/'){
      inputText="Search by movie title"
  }else if(location.pathname =='/movies/director'){
    inputText="Search by movie director"
  }else{
      inputText="Search by actor name"
  }

    const handleChange = (e) => {
        dispatch(setFilter(e.target.value))
    }

  return <Form.Control
    onChange={handleChange}
    value={props.visibilityFilter}
    placeholder= {inputText}
    className='filter-input'
  />;
}

export default VisibilityFilterInput

// export default connect(
//   null,
//   { setFilter }
// )(VisibilityFilterInput);