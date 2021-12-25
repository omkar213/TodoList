import React from "react";
import "../App.css";
import "./styles.css";

class Todolist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
        editFlag: false,
      },
    };
  }

  //This function records the input given by user
  handleInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
        editFlag: false,
      },
    });
  };

  addItem = (e) => {
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: "",
          editFlag: false,
        },
      });
    }
    // console.log(newItem) just to test if value is storing in the newItem or not
  };

  handleListItemChange = (e, item) => {
    console.log(e, item);
    // change the item.text in this.state.items based on item.key
  };

  printListItem = (item) => {
    return (
      <li key={item.key}>
        <input
          value={item.text}
          disabled={!item.editFlag}
          className={`${item.editFlag ? "editInput" : "disabledInput"}`}
          onChange={(e) => this.handleListItemChange(e, item)}
        />
        <button className="btn delete-btn" onClick={(e) => this.removeListItem(e, item)}>
          Delete
        </button>
        {/* {this.showEditSave(item)} */}
        {item.editFlag ? (
          <button className="btn save-btn" onClick={(e) => this.saveListItem(e, item)}>
            Save
          </button>
        ) : (
          <button className="btn edit-btn" onClick={(e) => this.editListItem(e, item)}>
            Edit
          </button>
        )}
      </li>
    );
  };

  saveListItem = (e, item) => {};

  editListItem = (e, item) => {
    console.log(e, item);
    const newList = this.state.items.map((task) => {
      // Pick the clicked task and make its editFlag = true
      if (task.key === item.key) {
        return { ...task, editFlag: true };
      }
      return task;
    });
    console.log(this.state.items);
    this.setState({ items: newList });
  };

  removeListItem = (e, item) => {
    console.log({ e, item });
    // filter out the item.key
  };

  printList = () => {
    return (
      <div className="list">
        <p>{this.state.items.map(this.printListItem)}</p>
      </div>
    );
  };

  render() {
    return (
      <>
        <div className="form-container">
          <input
            className="text-type"
            type="text"
            placeholder="Enter Text"
            value={this.state.currentItem.text}
            onChange={this.handleInput}
          />

          <button className="btn" onClick={this.addItem}>
            Add Task
          </button>

          {this.printList()}
        </div>
      </>
    );
  }
}

export default Todolist;
