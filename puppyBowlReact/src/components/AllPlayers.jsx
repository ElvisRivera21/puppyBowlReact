// AllPlayers.jsx
import React, { useState, useEffect } from 'react';
import { fetchPlayers } from './ajaxHelpers';

const AllPlayers = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchPlayers();
                setPlayers(data); // Assuming your API returns an array of players
            } catch (error) {
                console.error('Error fetching players', error);
            }
        };

        fetchData();
    }, []);
    
    return (
        <div>
            {players.map((player) => (
                <div key={player.id}>
                    <h4>{player.name}</h4>
                    {/* Render other player details */}
                </div>
            ))}
        </div>
    );
};

export default AllPlayers;