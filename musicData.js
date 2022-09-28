
// creates a search term container that calls in API
let searchterm = ''



const updateTerm = () => {
    searchterm = document.getElementById('searchInput').value;
    if (!searchterm || searchterm == '') {
        alert('enter a search term')
    }

    else {
        //checkes for previous entries and removes the results
        // while (mysongContainer.firstChild){
        //     mysongContainer.removeChild(mysongContainer.firstChild);
        // }

        // fetch calls an API with a syncronous request.
        // the variable is called songs 
        // here the term=rock is what gives us a result this can be a song or any artist on itunes
        const url = `https://itunes.apple.com/search?term=${searchterm}`
        fetch(url)
            // the (.then) method executes when a fetch returns a data from the api 
            .then((response) => response.json())
            // there can be many .thens

            //than this new then extracts the data from the json and logs into console.
            .then((data) => {
                //console.log(data.result); 
                const artists = data.results;
                // here we use the map mathod to store our data into the "result" variable 
                return artists.map(result => {
                    const article = document.createElement('arcticle')
                    const artist = document.createElement('p')
                    const song = document.createElement('p')
                    const img = document.createElement('img')
                    const audio = document.createElement('audio')
                    const audioSource = document.createElement('source')
                    // now I add the innerHTML to the names that are correspoding on the back end data that can be seen
                    // in the console like "artistName" and add it to element thats just "artist"
                    artist.innerHTML = result.artistName
                    song.innerHTML = result.trackName
                    // here I pull the albom img from the JSON code on the api by using artworkUrl100
                    img.src = result.artworkUrl100
                    // pulls the audio source from the previewUrl in JSON
                    audioSource.src = result.previewUrl
                    // audio makes a player
                    audio.setAttribute('controls', '')
                    
                    // I need to append all the above elemnts to be a child of the "article"
                    article.appendChild(artist)
                    article.appendChild(song)
                    article.appendChild(img)
                    article.appendChild(audio)
                    article.appendChild(audioSource)
                    // now I since this article has all the elements insde 
                    // I add it to the main container in HTML page "main id=songs"
                    const mysongContainer = document.getElementById('songs');
                    // now I have to add the the articles to mysongContainer
                    mysongContainer.appendChild(article)
                })
            })
            // when there is an error 
            .catch(error => console.log("Request failed:", error))

    }

}
// binds the button to search for our updateTerm const
const searchButton = document.querySelector('button')
searchButton.addEventListener('click', updateTerm)
const play= document.querySelector('audio')
play.addEventListener(audio.play)


