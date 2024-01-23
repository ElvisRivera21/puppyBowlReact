//ajaxHelpers.js


const baseURL ='https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-pt-sf-b-elvis/players/'


export const fetchPlayers = async () => {
    try {
        const response = await fetch(baseURL);
        const data = await response.json();
      
        return data;
       
    } catch (error) {
        console.error('Error fetching players', error);
        throw error; // Rethrow the error to propagate it further
    }
};

export const fetchPlayerById = async (playerId) => {
    try {
        const response = await fetch(`${baseURL}${playerId}`);
        const data = await response.json();
        console.log(response);
        return data;
    } catch (error) {
        console.error(`Error fetching player with ID ${playerId}`, error);
        throw error; // Rethrow the error to propagate it further
    }
};

