const quote_text = document.getElementById('js-quote-text');
const quote_img = document.getElementById('js-quote-img');
const quote_descript = document.getElementById('js-quote-descript');
const quote_onclick = document.querySelector('#js-new-quote');
//const quotes = ['quote1','quote2','quote3'];
const endpoint = 'https://ghibliapi.herokuapp.com/films'
// let current_num = 0;
// let random_num = 0;

quote_onclick.addEventListener('click', async function(event)
{
    // do {
    //  random_num = Math.floor(Math.random() * 3);
    // } while (random_num === current_num);

    // current_num = random_num;
    // console.log(random_num);

    console.log('function has run')
    try {
        const response = await fetch(endpoint);
        const json = await response.json();
        const jsonChoice = json[Math.floor(Math.random() * json.length)];
        console.log(jsonChoice);
        display_quote(jsonChoice);

    } catch (error) {
        console.error(error);
    }
});

function display_quote(quote)
{
    quote_text.innerHTML = quote.title + "<br>" + quote.original_title;
    quote_img.src = quote.image;
    quote_descript.innerHTML = quote.description + "<br><br>Directed by " + quote.director + "<br>Released in " + quote.release_date;
}