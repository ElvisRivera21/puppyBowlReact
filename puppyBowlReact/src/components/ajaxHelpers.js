//ajaxHelpers.js





export const fetchPlayers = async () => {
    try {
        const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF-B-elvis/players');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching players', error);
        throw error; // Rethrow the error to propagate it further
    }
};