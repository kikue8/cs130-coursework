const tracks = [
    {
      "id": "0rKtyWc8bvkriBthvHKY8d",
      "name": "SLOW DANCING IN THE DARK",
      "preview_url": "https://p.scdn.co/mp3-preview/483355f39bb264b9828633561ab14a7a48e75270?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b27360ba1d6104d0475c7555a6b2"
    },
    {
      "id": "0baNzeUcPQnQSagpe8T0mD",
      "name": "worldstar money (interlude)",
      "preview_url": "https://p.scdn.co/mp3-preview/09f670f51d5fa9db0cdb5499a661d5445026fc38?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b2738e947f66f6d4eeaa56a28767"
    },
    {
      "id": "6Ed1q0X8oSKSm4IIhiQbYg",
      "name": "Daylight",
      "preview_url": "https://p.scdn.co/mp3-preview/698a400b59f139ec6581c8538992bc7f51fec4b3?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b2730e991b59cee17246a5e604d0"
    },
    {
      "id": "7wvwXi9Z66dcH5t202vVkN",
      "name": "Will He",
      "preview_url": "https://p.scdn.co/mp3-preview/f29439922f983c524e24e51065530b4b36938b3e?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b2738e947f66f6d4eeaa56a28767"
    },
    {
      "id":"6Vgtvd7I5yopJdBuxqjBd2",
      "name":"Your Man",
      "preview_url":"https://p.scdn.co/mp3-preview/a9eaf189f409998fb9315b9405c8cda91b6ea9fe?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url":"https://i.scdn.co/image/ab67616d0000b27323c552a7a4fdafac02e08c34"
    },
    {
      "id":"6TodWdTSDfzwgYynTZSvJn",
      "name":"Midsummer Madness",
      "preview_url":"https://p.scdn.co/mp3-preview/43916581b41394a77e64ebc0aff0c0c301a40abf?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url":"https://i.scdn.co/image/ab67616d0000b2734aedbebc17bc6ebccad220e9"
    },
    {
      "id":"39oeKRgsLeynDIbWuXyA47",
      "name":"CAN'T GET OVER YOU (feat. Clams Casino)",
      "preview_url":"https://p.scdn.co/mp3-preview/755f1516d26d7020470468e66a0f922b7cb656cd?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url":"https://i.scdn.co/image/ab67616d0000b27360ba1d6104d0475c7555a6b2"
    },
    {
      "id":"3xaugmCyXrVkrDTXbFkMW3",
      "name":"Sanctuary",
      "preview_url":"https://p.scdn.co/mp3-preview/d7f259f680fd18e4bb673013e257ab58967ed725?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url":"https://i.scdn.co/image/ab67616d0000b273a67b20cc424172b849896a99"
    },
    {
      "id":"2hfoyc7ve6xM4ZEiNIiU1B",
      "name":"Gimme Love",
      "preview_url":"https://p.scdn.co/mp3-preview/840e3f3b22b0d039d68180b7b3ae3332a610f0c4?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url":"https://i.scdn.co/image/ab67616d0000b273b6d007e03bcf0712d7735bd7"
    },
    {
      "id":"1DMEzmAoQIikcL52psptQL",
      "name":"TEST DRIVE",
      "preview_url":"https://p.scdn.co/mp3-preview/c7d8c051043d53a2ecd3aba7916cec3860456454?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url":"https://i.scdn.co/image/ab67616d0000b27360ba1d6104d0475c7555a6b2"
    },
    {
      "id":"435yU2MvEGfDdmbH0noWZ0",
      "name":"worldstar money (interlude)",
      "preview_url":"https://p.scdn.co/mp3-preview/09f670f51d5fa9db0cdb5499a661d5445026fc38?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url":"https://i.scdn.co/image/ab67616d0000b2733a927e16c14f2aeb7c004e19"
    },
    {
      "id": "1VGzxJnVQND7Cg5H5wGj14",
      "name": "YEAH RIGHT",
      "preview_url": "https://p.scdn.co/mp3-preview/c93897405a1809244b633a5599ac341bf0e8f3c3?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b27360ba1d6104d0475c7555a6b2"
    },
];


// Part 1: 
for (const track of tracks){
  let template = `
    <div data-index="${tracks.indexOf(track)}" onclick="playSong(event);">
        <img src="${track.image_url}" />
        <h2>${track.name}</h2>
    </div>`;
document.querySelector('main').innerHTML += template
}

// Part 2: 
const playSong = (ev) => {
  console.log(ev.currentTarget.dataset.index);
  const idx = Number(ev.currentTarget.dataset.index);
  const currentTrack = tracks[idx];
  console.log(currentTrack);
  document.querySelector('#audio-source').src = currentTrack.preview_url
  const audio = document.querySelector('audio');
  audio.load();
  audio.play();
};
