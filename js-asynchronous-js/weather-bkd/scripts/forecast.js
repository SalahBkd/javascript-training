const apiKey = 'CtAi61h7QPvyVR9XXYPhgadP55nFjJfW';

const fetchLocationKey = async (cityName) => {
    const response = 
        await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${cityName}`);

    if(response.status !== 200) {
        throw new Error("cannot fetch the data");
    }

    const data = await response.json();
    return data;
}

const fetchDataFor = async (locationKey) => {
    const response = 
    await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`);

    if(response.status !== 200) {
        throw new Error("cannot fetch the data");
    }

    const data = await response.json();
    return data;
}
