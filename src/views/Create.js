import { useState } from "react";
import {BACKEND} from "../constants";

function Create(props){
    const [name, setName] = useState("")
    const [score, setScore] = useState(0);

    const postResult = async ()=>{
        console.log(`Hello World ${name} ${score}`);
        const postData= {
            name,
            highscore:parseInt(score)
        };
        const url = `${BACKEND}/user`;
        try{
            await fetch(url,{
                method: 'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(postData)
            });
            alert("Score Created Successfully");
            reset();
        }
        catch(e){
            alert(e.message);
        }        
    }

    const reset = ()=>{
        setName("")
        setScore(0);
    }

    return (
        <div className="container-fluid">
            <div className="card">
            <div className="card-header">
                New Highscore
            </div>
            <div className="card-body">
                <h5 className="card-title">Create New User Highscore</h5>
                
                <div className="row">
                    <label>Name</label>
                    <input type="text" className="form-control" id="playerName" placeholder="Player Name" value={name} onChange={(e)=>setName(e.target.value)} />
                </div>

                <div className="row">
                    <label>High Score</label>
                    <input type="number" className="form-control" id="highScore" placeholder="High Score" value={score} onChange={(e)=>setScore(e.target.value)} />
                </div>

                <button type="button" onClick={postResult} className="btn btn-primary">Save Highscore</button>
            </div>
        </div>
        </div>
    );
}
export default Create;