class Forecast
{
    constructor()
    {
        this.key='RC3TGAAo7DUpN2YYAYe5EYSeYo7oYx5J';
        this.weatheruri='http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityuri='http://dataservice.accuweather.com/locations/v1/cities/search';
    }

    async updatecity(city)
    {
        const citydetails = await this.getcity(city);
        const weather = await this.getweather(citydetails.Key);
        return {citydetails ,weather};
    }

    async getcity(city)
    {
        const query= `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityuri + query);
        const data=await response.json();

        return data[0];
    }
 
    async getweather(id)
    {
        const query=`${id}?apikey=${this.key}`;
        const response = await fetch(this.weatheruri + query);
        const data = await response.json();

        return data[0];
    }

}
