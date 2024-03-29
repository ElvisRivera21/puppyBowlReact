import React, { useState, useEffect } from 'react';
import { fetchPlayers } from './ajaxHelpers'; // Assuming fetchPlayers is correctly implemented
import { useNavigate } from 'react-router-dom';


const AllPlayers = () => {
    const [players, setPlayers] = useState([]);//setting player state
    const navigate = useNavigate();//navigate hook

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchPlayers();
                console.log('API Response:', data);

                // Update the state based on the response structure
                setPlayers(data.success && data.data ? data.data.players : []);
            } catch (error) {
                console.error('Error fetching players', error);
            }
        };

        fetchData();
    }, []);
    console.log('Players State:', players); // Log the state of the 'players' variable

    return (
        <div>
            <h2>The Players</h2>
            {players.length === 0 ? (
                <p>Loading players...</p>
            ) : (
                <ul>
                    {players.map((player) => (
                        <li key={player.id} onClick={() => navigate(player.id)}>
                            <h4>{player.name}</h4>
                            <p>Team: {player.team}</p>
                            {/* Render other player details */}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AllPlayers;