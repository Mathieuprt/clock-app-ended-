// Appel de l'API pour générer des citations en utilisant XHR

const quoteText = document.getElementById('quote-text')
const quoteTitle = document.getElementById('quote-title')
const quoteBtn = document.getElementById('refresh')

const urlQuote = 'https://programming-quotes-api.herokuapp.com/quotes/random';

quoteBtn.addEventListener('click', () => {

    const xhr = new XMLHttpRequest();

    xhr.open("GET", urlQuote)

    xhr.setRequestHeader('Accept', 'application/json')

    xhr.onload = function(){
        if(xhr.status === 200){

            let jsonData = xhr.responseText

            // console.log(jsonData)
            let jsObject = JSON.parse(jsonData)

            // console.log(jsObject)

            quoteText.innerText = jsObject.en;
            quoteTitle.innerText = jsObject.author;

        } else if (xhr.status != 200){
            alert('Un souci est apparu lors de la requête')
        }
    }

    xhr.send();
})


// Appel de l'API pour la gestion de l'heure et affichage étendu en utilisant une fonction Async

const hour = document.getElementById('hour')
const timezone = document.getElementById('timezone')
const dayYear = document.getElementById('dayYear')
const dayWeek = document.getElementById('dayWeek')
const weekNumber = document.getElementById('weekNumber')
const bst = document.getElementById('bst')

// Variable concernant le message de bienvenue

const title = document.getElementById('clock-section__heading')


async function getTime(){

    let response = await fetch('http://worldtimeapi.org/api/ip',{
        headers: {'Accept': "application/json"}
    })

    let data = await response.json();

    // On assigne les données aux emplacaments de l'affichage étendu

    let timezoneData = data.timezone;
    let dayYearData = data.day_of_year;
    let dayWeekkData = data.day_of_week;
    let weekNumberData = data.week_number;
    let datetime = data.datetime.substring(11,16);
    let bstData = data.abbreviation;

    hour.textContent = datetime
    timezone.textContent = timezoneData;
    dayYear.textContent = dayYearData;
    dayWeek.textContent = dayWeekkData;
    weekNumber.textContent = weekNumberData;
    bst.textContent = bstData

    // Changement de message de bienvenue et de l'image de fond en fonction de l'heure

    const datetimeTitle = parseInt(datetime)
    const infosSection = document.getElementById('infos-section')

    switch(true){

        case datetimeTitle >= 5 && datetimeTitle <= 12:
            title.textContent = 'Good Morning'
            title.classList.add('day-theme')
            break;

        case datetimeTitle >= 12 && datetimeTitle <= 18:
            title.textContent = 'Good Afternoon'
            title.classList.add('day-theme')
            break;

        default:
            title.textContent = 'Good Evening'
            title.classList.add('night-theme')
            infosSection.classList.add('night-theme')
            document.body.classList.add('night-theme')
            break;

    }


    // Appel de l'API pour l'affichage de la ville


    const locationTitle = document.getElementById('location')

    const responselocation = await fetch('https://api.ipbase.com/v2/info?apikey=3XRHLCOd7lmx9ul15Aqtmw1G868fOLKDiBUxIKTC');

    const dataLocation = await responselocation.json()

    const cityName = dataLocation.data.location.city.name;
    const countryName = dataLocation.data.location.country.name

    locationTitle.textContent = ' In ' + cityName + ' , ' + countryName;


}

document.addEventListener("DOMContentLoaded", getTime, false)










