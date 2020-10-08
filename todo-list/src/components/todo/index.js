import React from 'react'
import { connect } from 'react-redux';
import './styles.css';

// import Counter from '../counter'

import * as selectors from '../../reducers/';


const Todo = ({
    index,
    description,
    completed
}) => (
<div className="container">
    <div className="name">
        Index: {index}
    </div>
    <div className="description">
        
        Descripcion: {description}
    </div>
    <div className="description">
        
        Completado: {completed}
    </div>
</div>
)

// connect para dispatchToProps para complete
// connect para stateToProps para descripcion

export default connect(
    (state, index)=> ({
        description: selectors.getTodo(state, index).description,
        completed: selectors.getTodo(state, index).completed,
    }),
    undefined
)(Todo);