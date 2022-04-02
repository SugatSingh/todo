import React from 'react';
import { todolist } from './sampletodolist';

const TodoMain = () => {
    const [people, setPeople] = React.useState(todolist);
    const [person, setPerson] = React.useState({todo: ''});
    const deleteOne = (id)=>{
        let newpeople = people.filter((person)=>person.id!==id);
        setPeople(newpeople);
    }

    const deleteAll = ()=>{
        setPeople([]);
    }

    const changeMessage = (id)=>{
        let newpeople = people.map((person)=>{
            if(person.id === id){
                person = {...person, message:"Changed Message"};
                return person;
            }
            return person;
        }) 
        /*let newpeople = people.filter((person)=>{
            if(person.id!==id){
                {...person, message:"Changed Message"};
            }
        } */
        setPeople(newpeople);
        console.log(newpeople);
    }

    const formHandler = (e)=>{
        e.preventDefault();
        setPeople([...people, {...person, id: people.length+1}]);
        setPerson({message: ''});
    }

    return (
        <>
        <div className="row">
        {
            people.map((person)=>{
                return(
                <div key={person.id} className="col-xl-3 text-center card" style={{ padding: '10px'}}>
                    <h3>{person.name}</h3>
                    <h4>{person.age}</h4>
                    <h6>{person.message}</h6>
                    <button className="btn btn-outline-danger" onClick={()=>deleteOne(person.id)}>Delete</button><br></br>
                    <button className="btn btn-outline-info" onClick={()=>changeMessage(person.id)}>Change Message</button>
                    <br></br>
                </div>);
            })
        }
        <br></br>
        <button className="btn btn-danger" onClick={deleteAll}>Delete All</button>
        <div className="col-xl-12"><br></br><hr></hr></div>
        <h4>Add Person Form</h4>
        <div className="row">
        <form className="form row" onSubmit={formHandler}>
            <label htmlFor="Message" className="col-xl-3">Message : </label>
            <div className="col-xl-8"><input className="form-control" name="message" id="message"  value={person.message} onChange={(e)=>setPerson({...person,message:e.target.value})}></input><br></br></div>
            <button className="btn btn-info" type="submit" onSubmit={formHandler}>Add</button>
        </form>
        </div>
        </div>
        <br></br>
        <hr></hr>
        </>
    )
}

export default TodoMain
