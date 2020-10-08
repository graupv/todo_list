import React, { useState } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as actions from '../../actions/addTodo';


export const AddTodo = ({ onClick }) => {
  const [description, changeDescription] = useState('');
  return (
  <div className="add">
    <div className="text">
      <input value={description} onChange={e => changeDescription(e.target.value)} type="text"/>
    </div>
  <button className='add-button' onClick={() => {onClick(description)}}>
    {'+'}
  </button>
  </div>
)};


export default connect(
  undefined,
  dispatch => ({
    onClick(description) {
      dispatch(actions.addTodo(description));
    },
  })
)(AddTodo);