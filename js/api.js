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

// Appel de l'API pour la gestion de l'heure et affichage étendu en utilisant Async

const clockHour = document.getElementById('hour')
const timezone = document.getElementById('timezone')
const dayYear = document.getElementById('dayYear')
const dayWeek = document.getElementById('dayWeek')
const weekNumber = document.getElementById('weekNumber')



// const urlClock = 'http://worldtimeapi.org/api/ip';

// const request = new XMLHttpRequest();

// request.open("GET", urlClock)

// request.setRequestHeader('Accept', 'application/json')

// request.onload = function(){
//     if(request.status === 200){

//         let responseData = request.response;

//         let data = JSON.parse(responseData)

//         let timezoneData = data.timezone;
//         let dayYearData = data.day_of_year;
//         let dayWeekkData = data.day_of_week;
//         let weekNumberData = data.week_number;

//         // Création de l'objet Date
//         let datetime = data.datetime;

//         console.log(datetime)
//         let dateObjet = JSON.parse(datetime)

//         console.log(dateObjet)

//         timezone.innerText = timezoneData;
//         dayYear.innerText = dayYearData;
//         dayWeek.innerText = dayWeekkData;
//         weekNumber.innerText = weekNumberData;
//     }


// }
// request.send()



async function getTime(){

    let response = await fetch('https://worldtimeapi.org/api/ip',{
        headers: {'Accept': "application/json"}
    })

    let data = await response.json();

    // On assigne les données aux emplacaments de l'affichage étendu

    let timezoneData = data.timezone;
    let dayYearData = data.day_of_year;
    let dayWeekkData = data.day_of_week;
    let weekNumberData = data.week_number;
    let datetime = data.datetime;

    let dateTimeObj = new Date()

    // clockHour.innerText = datetime
    timezone.innerText = timezoneData;
    dayYear.innerText = dayYearData;
    dayWeek.innerText = dayWeekkData;
    weekNumber.innerText = weekNumberData;

}

getTime();





