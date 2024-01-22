// NewPlayerForm .jsx
import React, { useState } from 'react';
import { createNewPlayer } from './ajaxHelpers';


const NewPlayerForm = ({ onPlayerCreated }) => {
    const [name, setName] = useState('');
    const [team, setTeam] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const newPlayer = await createNewPlayer({ name, team });
            //createNewPlayer returns the newly created player object

            // Update UI and notify parent component
            onPlayerCreated(newPlayer);

            //Reset input fields
            setName('');
            setTeam('');
        } catch (error) {
            crossOriginIsolated.error('Error creating new player', error);
        }
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <h2>Create New Player</h2>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <br />
            <label>
                Team:
                <input type="text" value={team} onChange={(e) => setTeam(e.target.value)} required />
            </label>
            <br />
            <button type="submit">Create Player</button>
        </form>
    );

};

export default NewPlayerForm;