const url = 'https://imdb188.p.rapidapi.com/api/v1/searchIMDB';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '7454eaa6c9mshc4505b4749479dcp1384a2jsn145576c379bf',
		'x-rapidapi-host': 'imdb188.p.rapidapi.com'
	}
};

async function getData(){
    try {
        const cardContainer = document.getElementById('card-container'); 
        const response = await fetch(url, options);
        const { data } = await response.json();
        console.log(data);
        for(let i=0; i<data.length; i++){
            const card = document.createElement('div');
            card.className = 'card';
            const poster = document.createElement('img');
            poster.src = data[i].image;
            poster.className = 'poster'
            const title = document.createElement('h2');
            title.innerText = data[i].title;
            const cast = document.createElement('p');
            cast.innerText = data[i].stars
            const button = document.createElement('button');
            button.innerText = 'Watch Now';
            button.className = 'watch-button'; 
            card.appendChild(poster);
            card.appendChild(title);
            card.appendChild(cast);
            card.appendChild(button);
            cardContainer.appendChild(card);
        }
    } catch (error) {
        console.error(error);
    }
}

getData();

