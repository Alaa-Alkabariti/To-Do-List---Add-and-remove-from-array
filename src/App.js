import React, { Component } from "react";
import { Fragment } from "react";
import "./App.css";
import toDo from './Images/toDo.png'

class App extends Component {
  constructor() {
    super();
    this.state = {
      toDoList: [
        "Answer all Your Emails at the End of the Day",
        "Create a Backup for Your Files",
        "Keep Your Portfolio Updated",
      ],
      newItem: " ",
      message: "",
    };
  }

  changeInInput(event) {
    this.setState({ newItem: event.target.value });
  }

  /*  addItem(event) {
    event.preventDefault();
    this.setState((prveState) => ({
      toDoList: [...prveState.toDoList, this.state.newItem],
    }));
  } */

  addItem(event) {
    event.preventDefault();
    const newItem = this.newItem.value;

    const isOnTheList = this.state.toDoList.includes(newItem);

    //if isOnTheList == true
    if (isOnTheList) {
      this.setState({ message: "This item is already on the list" });
    } else {
      //if isOnTheList == false
      newItem !== " " &&
        this.setState({
          toDoList: [...this.state.toDoList, newItem],
          //to reset the message value to be empty when add a new not repeated valur to the list
          message: "",
        });
    }

    

    this.addForm.reset();
  }

  //remove tem method starts here
  removeItem(el) {
    console.log('event')
    console.log(el)
    const toDoList = this.state;
    const newToDoList = this.state.toDoList.filter(toDoItem => {
      return toDoItem !== el;
    })
    /* console.log(("remove" + item)); */
    this.setState({
      toDoList : [...newToDoList]
    })

    if(this.state.toDoList.length === 0){
      this.setState({message : "You’ve Done All Your Tasks"})
  }
  }
  //remove item method ends here

  render() {
    const { toDoList } = this.state;
    return (
      <Fragment>
        <div className="container">
          <h1>To Do List</h1>
          <img className="todoIcon" src={toDo} alr="to do list icon" />
          <form
            ref={(input) => {
              this.addForm = input;
            }}
            className="names"
          >
            <input
              type="text"
              placeholder="Enter New Name"
              /*  onChange={(event) => this.changeInInput(event)} */
              ref={(input) => {
                this.newItem = input;
              }}
            />
            <i class="addIcon fa fa-plus" aria-hidden="true"></i>
            <button onClick={(event) => this.addItem(event)}>Add</button>
          </form>
          <div className="listOfNames">
            {(this.state.message !== " "  || toDoList === 0 ) && <span>{this.state.message}</span>}
            <table id="customers">
              {/* <caption>To Do List</caption> */}
              <tr>
                <th>#</th>
                <th>Item</th>
                <th>Action</th>
              </tr>
              <tbody>
                {toDoList.map((el) => {
                  return (
                    <tr key={el}>
                      <th>1</th>
                      <td>{el}</td>
                      <td>
                        <button
                        type="button"
                          onClick={() => this.removeItem(el)}
                          className="deleteButton"
                        >
                          <i
                            class="deleteIcon fa fa-trash"
                            aria-hidden="true"
                          ></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
