// https://api.nytimes.com/svc/topstories/v2/world.json?api-key=yourkey

// ouojEXD0rC4Z63zoTPDY41GWWqU6cscY

//https://api.nytimes.com/svc/topstories/v2/science.json?api-key=yourkey

let url = 'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=ouojEXD0rC4Z63zoTPDY41GWWqU6cscY';

let CovidNews = document.getElementById("CovidNews");

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);

    data.results.slice(0, 5).map(article => {
        console.log(article.title);

        let a = document.createElement("a");
        a.setAttribute('href', article.url);
        a.innerHTML = article.title; 

        let p = document.createElement("p");
        p.innerHTML = article.abstract;

        let img = document.createElement("img");
        img.setAttribute('src', article.multimedia[0].url)

        
        CovidNews.appendChild(a);
        CovidNews.appendChild(p);
        CovidNews.appendChild(img);
        
    });

})