import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
// import * as actions from '../../actions/addTodo';


export const AddTodo = ({ onClick }) => (
  <button className='add-button' onClick={onClick}>
    {'+'}
  </button>
);


// export default connect(
//   undefined,
//   dispatch => ({
//     onClick() {
//       dispatch('ADD_TODO');
//     },
//   })
// )(AddTodo);