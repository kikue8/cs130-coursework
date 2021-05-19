const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

// Note: AudioPlayer is defined in audio-player.js
const audioFile = 'https://p.scdn.co/mp3-preview/bfead324ff26bdd67bb793114f7ad3a7b328a48e?cid=9697a3a271d24deea38f8b7fbfa0e13c';
const audioPlayer = AudioPlayer('.player', audioFile);

const search = (ev) => {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

const getTracks = (term) => {
    let url = `https://www.apitutor.org/spotify/simple/v1/search?type=track&q=${term}&limit=5`
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then(tracks => {
            if (tracks.length !== 0){
                document.querySelector("#track-section").innerHTML = '<h1>Songs</h1>';
                for (const track of tracks){
                    document.querySelector("#track-section").innerHTML += `<section class="track-item preview" 
                    data-index="${track.preview_url}">
                    <img src="${track.album.image_url}">
                    <i class="fas play-track fa-play" aria-hidden="true"></i>
                    <div class="label">
                        <h3>${track.name}</h3>
                        <p>
                            ${track.artist.name}
                        </p>
                    </div>
                </section>`
                }
                const trackElements = document.querySelectorAll('.track-item.preview');
                    for (const elem of trackElements) {
                        elem.onclick = playTracks;
                    }
            }
            else{
                document.querySelector("#track-section").innerHTML = '<h1>Songs</h1><p>no tracks to display<p>'
            }
        });
};

const getAlbums = (term) => {
    let url = `https://www.apitutor.org/spotify/simple/v1/search?type=album&q=${term}`
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then(albums => {
            if (albums.length !== 0){
                document.querySelector("#albums").innerHTML = ' ';
                for (const album of albums){
                    document.querySelector("#albums").innerHTML += `<section class="album-card" id="${album.id}">
                    <div>
                        <img src="${album.image_url}">
                        <h3>${album.name}</h3>
                        <div class="footer">
                            <a href="${album.spotify_url}" target="_blank">
                                view on spotify
                            </a>
                        </div>
                    </div>
                </section>`
                }
            }
            else{
                document.querySelector("#albums").innerHTML = '<p>no albums to display<p>'
            }
        });
};

const getArtist = (term) => {
    let url = `https://www.apitutor.org/spotify/simple/v1/search?type=artist&q=${term}&limit=1`
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then(artists => {
            if (artists.length !== 0){
                document.querySelector("#artist-section").innerHTML = '<h1>Top Result</h1>';
                for (const artist of artists){
                    document.querySelector("#artist-section").innerHTML += `<section class="artist-card" id="${artist.id}">
                        <div>
                            <img src="${artist.image_url}">
                            <h3>${artist.name}</h3>
                            <div class="footer">
                                <a href="${artist.spotify_url}" target="_blank">view on spotify</a>
                            </div>
                        </div>
                    </section>`;
                }
            }
            else{
                document.querySelector("#artist-section").innerHTML = `<h1>Top Result</h1>
                    <p>no artist found<p>`
            }
        });
    };

const playTracks = (ev) => {
    const elem = ev.currentTarget;
    const preview_url = String(elem.dataset.index)
    document.querySelector('#track').src = preview_url
    audioPlayer.setAudioFile(preview_url);
    audioPlayer.play();
}

document.querySelector('#search').onkeyup = (ev) => {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
};