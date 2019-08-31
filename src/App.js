import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: '',
      todos: []
    }
  }

  saveTodo = () => {
    if(this.state.value.trim()){
      this.setState({
        value:'',
        todos: [...this.state.todos, this.state.value.trim()]
      })
    }
  }

  updateValue = event =>{
    this.setState({value: event.target.value})
  }

  deleteTodo = index => {
    const newTodos = [...this.state.todos]
    newTodos.splice(index, 1)
    this.setState({
      todos: newTodos
    })
  }

  render(){
    const listItems = this.state.todos.map((element, index)=>{
      return(
        <ListItem button key={index}>
          <Checkbox/>
          <ListItemText primary={element}/>
          <ListItemSecondaryAction>
            <IconButton onClick={this.deleteTodo.bind(this, index)}>
              <DeleteIcon/>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      )
    })
    return(
      <React.Fragment>
        <Typography variant="h2" align="center" gutterBottom>Todo list</Typography>
        <Grid container justify="center">
          <Grid item>
            <form onSubmit={e=>{
              e.preventDefault()
              this.saveTodo()
            }}>
              <TextField
                type = "text"
                placeholder="Add to do"
                value = {this.state.value}
                onChange = {this.updateValue}
                />
              </form>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item md={8}>
          <List>
            <ListItem button>
              <Checkbox/>
              <ListItemText primary="Check the prework!!!"/>
              <ListItemSecondaryAction>
                <IconButton>
                  <DeleteIcon/>
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            {listItems}
          </List>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}

export default App;
