import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';

const ListItems = (props) => {
  const listItems = props.todos.map((element, index)=>{
    return(
      <ListItem onClick = {()=>props.toggleCompleted(index)} button key={index}>
        <Checkbox checked={element.completed}/>
        <ListItemText primary={element.value}/>
        <ListItemSecondaryAction>
          <IconButton onClick={props.deleteTodo.bind(this, index)}>
            <DeleteIcon/>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )
  })
  return(
    <List>
      {listItems}
    </List>
  )
}
export default ListItems
