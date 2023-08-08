import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            // Authorization: `Client-ID xmkDE33ybBcPd9yU0Iz-KG2j-OmdDDJdvU4faPC8uUY`
        },
        params:{
            query: term
        }
    });
    return response.data.results;
}

export default searchImages;