import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodosItem extends Component {
    getStyle=()=>{
        return{
            background:'#f4f4f4',
            padding:'10px',
            borderBottom:'1px #CCC dotted',
            textDecoration:this.props.todo.completed?'line-through':'none'
        }
    }

    render() {
        const{id, title}=this.props.todo;
        const btnStyle ={
            background: '#ff0000',
            color:'#fff',
            border:'none',
            padding: '5px 9px',
            borderRadius:'50%',
            cursor:'pointer',
            float:'right'
        }        
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>{' '}
                    {title}
                   <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>X</button>
                </p>
            </div>
        )
    }
}

//PropTypes
TodosItem.propTypes = {
    todo:PropTypes.object.isRequired
}


export default TodosItem
