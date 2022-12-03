import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import {BACKEND} from "../constants";

function Details(props){
    let {id} = useParams();
    const [user,setUser] = useState();
    const [name, setName] = useState("")
    const [highscore, setHighScore] = useState(0);

    const updateResult = async ()=>{
        let payload = {
            name,
            highscore:parseInt(highscore)
        };
        const url = `${BACKEND}/user/${id}`;
        try{
            const response = await fetch(url,{
                method: 'PUT',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(payload)
            });
            console.log(response);

        }
        catch(e){
            console.error(e);
        }
    }

    useEffect(()=>{
        if(user === undefined){
            getUser(id).then(user=>{
                setUser(user);
            });
        }
    });

    return (
        <div className="container-fluid">
            <div className="card">
                <div className="card-header">
                    Update Highscore
                </div>
                <div className="card-body">
                    <h5 className="card-title">Update User Highscore</h5>
                    
                    <div className="row">
                        <label>Name</label>
                        <label>{user?.name || 'Hello World'}</label>
                    </div>

                    <div className="row">
                        <label>High Score</label>
                        <label>{user?.highscore | 0}</label>
                    </div>
                </div>
            </div>
            <br />

            <div className="card">
                <div className="card-header">
                    Update Highscore
                </div>
                <div className="card-body">
                    <h5 className="card-title">Update User Highscore</h5>
                    
                    <div className="row">
                        <label>Name</label>
                        <input type="text" className="form-control" id="playerName" placeholder="Player Name" value={name} onChange={(e)=>setName(e.target.value)} />
                    </div>

                    <div className="row">
                        <label>High Score</label>
                        <input type="number" className="form-control" id="highScore" placeholder="High Score" value={highscore} onChange={(e)=>setHighScore(e.target.value)} />
                    </div>

                    <button type="button" onClick={updateResult} className="btn btn-primary">Update Highscore</button>
                </div>
            </div>
        </div>
    );
}
async function getUser(id){    
    const url=`${BACKEND}/user/${id}`;
    const result = await fetch(url);
    const content = await result.text();
    return JSON.parse(content);
}
export default Details;