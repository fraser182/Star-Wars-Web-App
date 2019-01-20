const FilmDetailView = function(){

};

FilmDetailView.prototype.createFilmDetail = function(film){
  const filmDiv = document.createElement('div');

  const header = document.createElement('h1');
  header.textContent = film.title;

  filmDiv.appendChild(header);

  const detailList = document.createElement('ul');

  const episodeItem = document.createElement('li');
  episodeItem.textContent = `Episode: ${film.episode_id}`;
  detailList.appendChild(episodeItem);

  const directorItem = document.createElement('li');
  directorItem.textContent = `Director: ${film.director}`;
  detailList.appendChild(directorItem);

  const releaseDateItem = document.createElement('li');
  releaseDateItem.textContent = `Release Date: ${film.release_date}`;
  detailList.appendChild(releaseDateItem);

  filmDiv.appendChild(detailList);

  return filmDiv;
}

module.exports = FilmDetailView;
