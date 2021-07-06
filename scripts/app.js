const cityform =document.querySelector('form');
const card = document.querySelector('.card');
const details=document.querySelector('.details');
const time=document.querySelector('.time');
const icon=document.querySelector('.icon img');

const updateUI = (data)=>{

    const {citydetails , weather} = data;

    details.innerHTML = `
    <h2 class="my-3">${citydetails.EnglishName}</h2>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;c</span>
        </div>
    `;

    const iconsrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src',iconsrc);
    
    let timesrc = weather.IsDayTime ? 'img/day.svg' :'img/night.svg';
    time.setAttribute('src',timesrc);

    if(card.classList.contains('d-none'))
        card.classList.remove('d-none');
};

const updatecity = async(city)=>{

    const citydetails = await getcity(city);
    const weather = await getweather(citydetails.Key);

    return {citydetails ,weather};

};

cityform.addEventListener('submit', e =>{
    e.preventDefault();

    const city=cityform.city.value.trim();
    cityform.reset();

    updatecity(city)
        .then(data => updateUI(data))
        .catch(err => alert('Invalid city',err));

    localStorage.setItem('city',city);

});

if(localStorage.getItem('city'))
    updatecity(localStorage.getItem('city'))
    .then(data => updateUI(data))
    .catch(err => alert('invalid'));