
export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=LVNNSPAPr5wM2zIKLkGNlU3jWvZ9BdMA`;

    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map( ( gif ) => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.fixed_height.url,
        }
    })

    return gifs;
}