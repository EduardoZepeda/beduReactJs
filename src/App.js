import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TodoForm from './TodoForm';
import ListItems from './ListItems';

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
        todos: [...this.state.todos, {
          value: this.state.value.trim(),
          completed: false}
        ]
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

  toggleCompleted = index => {
    this.setState({
      todos: this.state.todos.map((todo, i)=>
        index === i ? {...todo, completed: !todo.completed} : todo
    )
    })
  }
  render(){
    return(
      <React.Fragment>
        <Typography variant="h2" align="center" gutterBottom>Todo list</Typography>
        <Grid container justify="center">
          <Grid item>
            <TodoForm
              updateValue = {this.updateValue}
              saveTodo = {this.saveTodo}
              value = {this.state.value}
            />
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item md={8}>
            <ListItems
              todos = {this.state.todos}
              toggleCompleted = {this.toggleCompleted}
              deleteTodo = {this.deleteTodo}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}

export default App;
