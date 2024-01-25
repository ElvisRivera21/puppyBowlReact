// SinglePlayer.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPlayerById } from './ajaxHelpers'; // Make sure to import this function

const SinglePlayer = () => {
    const { id } = useParams();
    const [player, setPlayer] = useState(null);

    useEffect(() => {
        const fetchSinglePlayer = async () => {
            try {
                const data = await fetchPlayerById(`${ id }`);
                setPlayer(data.success && data.data ? data.data.player : null);
            } catch (error) {
                console.error('Error fetching single player', error);
            }
        };

        fetchSinglePlayer();
    }, [id]);

    return (
        <div>
            <h2>Single Player</h2>
            {player ? (
                <div>
                    <h4>{player.name}</h4>
                    <p>Team: {player.team}</p>
                    {/* Render other player details */}
                </div>
            ) : (
                <p>Loading player details...</p>
            )}
        </div>
    );
};

export default SinglePlayer;