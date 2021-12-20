import React from "react";
import '../App.css';

class Todolist extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            items:[],
            currentItem:{
                text:'',
                key:''
            }
        }
    }
    
    //This function records the input given by user 
    handleInput = (e) =>{
        this.setState({
            currentItem:{
                text: e.target.value,
                key: Date.now()
            }
        })
    }
    addItem = (e) =>{
        e.preventDefault();
        const newItem = this.state.currentItem;
        if(newItem.text!==""){
            const newItems=[...this.state.items,newItem];
            this.setState({
                items: newItems,
                currentItem:{
                    text:'',
                    key:''
                }
            })
        }
        // console.log(newItem) just to test if value is storing in the newItem or not
    }

    printList =(item) =>{
        return <li key={item.key}>{item.text}</li>
    }
    removetodo =(item) =>{
        const newlist = this.state.items.splice(item.key);
        this.printList(newlist);
    }
    render(){
        return(
            <>
               <form className="form-container" onSubmit={this.addItem}>
                   <input className="text-type" type='text' placeholder="Enter Text" value={this.state.currentItem.text} 
                    onChange={this.handleInput}/>
                   <button className="btn" type="submit">Add Task</button>
                   <div className="list">
                       <p>{this.state.items.map(this.printList)}<button className="delete" onClick={() => this.removetodo}>Delete</button></p>
                   </div>    
               </form>
              
               
            </>
        );
    }
}

export default Todolist;