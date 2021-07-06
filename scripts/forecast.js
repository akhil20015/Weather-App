const key = 'RC3TGAAo7DUpN2YYAYe5EYSeYo7oYx5J';

const getweather = async (id)=>{

    const base='http://dataservice.accuweather.com/currentconditions/v1/';
    const query=`${id}?apikey=${key}`;

    const response = await fetch(base+query);
    const data = await response.json();

    return data[0];
}

const getcity= async (city)=>{

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query= `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data=await response.json();

    return data[0];
};

