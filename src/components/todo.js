import React, { useState } from 'react';
import { tododata } from '../sampledata';


const Todo = () => {
    const [todolist, setTodoList] = useState(tododata);
    const [formshow, setFormShow] = useState(false);
    const [todo, setTodo] = useState({title:'', detail:''});
   const addToTodo = (e)=>{
        e.preventDefault();
        console.log("Todo");
        setTodoList([...todolist, {...todo, id: todolist.length+1}]);
        setTodo({title:'', detail:''});
   }
   
   const removeTodo = (id)=>{
        let newtodolist = todolist.filter((person)=>person.id!==id);
        setTodoList(newtodolist);
   }

  return (
      <>
      <div className='row mainbox'>
          <div className='col-xl-3'></div>
            <div className='col-xl-6'>
                <div className='card' style={{padding: '20px'}}>
                    <h4 className='centertext'>TODO</h4>
                    {(todolist.length==0) && <div className='card'><h5 className='centertext' style={{color: 'red'}}>No Todo yet.</h5></div>}
                    {
                        todolist.map((todo)=>{return <div key={todo.id} style={{margin: '5px'}}>
                            <div className="accordion" id={"accordionExample"+todo.id}>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id={"headingOne"+todo.id}>
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapseOne"+ todo.id} aria-expanded="true" aria-controls={"collapseOne"+todo.id}>
                                        <input type="checkbox" id={"check"+todo.id} style={{margin: '10px', height:'20px', width:'20px'}} onClick={()=>removeTodo(todo.id)}></input>
                                        {todo.title} 
                                    </button>
                                    </h2>
                                    <div id={"collapseOne"+todo.id} className="accordion-collapse collapse" aria-labelledby={"headingOne"+todo.id} data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        {todo.detail}
                                    </div>
                                    </div>
                                </div>
                            </div>       
                        </div>})
     
                    }
                    <button className='btn btn-danger' style={{margin: '10px'}} onClick = {()=>setFormShow(true)}><i className='fa fa-plus' style={{color: 'white'}}></i></button>
                    {formshow && 
                    <div className='card' style={{margin: '10px', padding:'10px'}}>
                        <form className='form' onSubmit={addToTodo}>
                            <label htmlFor='todoinput' className='col-xl-3'>Title:</label>
                            <input className='form-control' value={todo.title} name="todo" id="todoinput" onChange={(e)=>{setTodo({...todo,title: e.target.value})}}/>
                            <label htmlFor='todoinput'>Details:</label>
                            <input className='form-control' value={todo.detail} name="detail" id="detailinput" onChange={(e)=>{setTodo({...todo, detail: e.target.value})}}/>
                            <br/>
                            <button className='btn btn-success' onSubmit={addToTodo}>Add</button>
                        </form>
                        <div style={{marginTop: '10px'}}>
                        <button className='btn btn-danger' onClick={()=>{setFormShow(false)}}>Close</button>
                        </div>
                    </div>}
                </div>
            </div>          
          <div className='col-xl-3'></div>
      </div>
      
      

      </>
  )
}


export default Todo
