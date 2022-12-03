import {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import {BACKEND} from '../constants';



function AllUsers(props){
    const [players, setPlayers] = useState();

    const getAllPlayers = async ()=>{
        const url=`${BACKEND}/users`;
        try {
            const result = await fetch(url);
            const content = await result.text();
            setPlayers(JSON.parse(content).users);
        }
        catch(e){
            // TODO: This should gracefully handle the error
            // might make sense to put on an error label
            console.error(e.message);
            alert(e.message);
        }
    }

    const getPlayersContent = (players) => {
        let content = [];
        if(players===undefined){
            return content;
        }
        for(let i=0; i<players.length; i++){
            const player = players[i];
            const data = <tr key={player.id}>
            <td>{i+1}</td   >
            <td w>{player.id}</td>
            <td>{player.name}</td>
            <td>{player.highscore}</td>
            <td>
                <Link className="btn btn-primary" to={"/"+player.id}>Details</Link>
            </td>
            <td>
                <button onClick={ ()=>{
                     deletePlayer(player.id);
                } } className='btn btn-danger'>Delete</button>
            </td>
        </tr>;
            content.push(data)
        }
    
        return content
    }

    const deletePlayer = async (id)=> {
        const url=`${BACKEND}/user/${id}`;
        try{
            await fetch(url,{
                method:"DELETE"
            });
            await getAllPlayers();
        }
        catch(e){
            alert(e.message);
        }
    }

    useEffect(()=>{        
        getAllPlayers();
    },[]);
    return (
            <div>
            <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Highscore</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {players && getPlayersContent(players)}                            
            </tbody>
            </table>
        </div>
    );
}
export default AllUsers;