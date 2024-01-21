// AllPlayers.jsx
import React, { useState, useEffect } from 'react';
import { fetchPlayers } from './ajaxHelpers';

const AllPlayers = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchPlayers();
                setPlayers(data.data); // Assuming 'data' has a 'data' property containing the array
            } catch (error) {
                console.error('Error fetching players', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array to run the effect only once on component mount

    return (
        <div>
            <h1>All Players</h1>
            {Array.isArray(players) ? (
                players.map((player) => (
                    <div key={player.id}>
                        {/* Render player information here */}
                        <p>{player.name}</p>
                    </div>
                ))
            ) : (
                <p>No players to display</p>
            )}
        </div>
    );
};

export default AllPlayers;