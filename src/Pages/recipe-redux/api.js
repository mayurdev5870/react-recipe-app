import axios from 'axios';

const YOUR_APP_KEY = "d9f1f6b5932228d6731a867129dcda50";
const YOUR_APP_ID = "2af70288";

export const getRecipe = async (query) =>{
    const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
   return await axios.get(url);
};
