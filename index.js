function getRandom(maxSeason, maxEpisode, season, episode){
    season.innerText = Math.floor(Math.random() * (maxSeason - 1) + 1);
    episode.innerText = Math.floor(Math.random() * (maxEpisode - 1) + 1);
}

const seasons = document.getElementById("seasons");
const episodes = document.getElementById("episodes");
const season = document.getElementById("season");
const episode = document.getElementById("episode");
const button = document.getElementById("generate");
const MAX = 10;

button.onclick = e => {
    getRandom(seasons.value, episodes.value, season, episode);
}