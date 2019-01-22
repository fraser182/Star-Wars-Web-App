const FilmDetailView = function(){

};

FilmDetailView.prototype.createFilmDetail = function(film){
  const filmDiv = document.createElement('div');
  filmDiv.id = 'film-div'

  const filmImage = document.createElement('img');
  filmImage.src =`./images/${film.title}.jpg`;
  filmImage.alt = `${film.title}'s image`;
  filmImage.id = 'filmImage';
  filmDiv.appendChild(filmImage);

  const header = document.createElement('h1');
  header.textContent = film.title;

  filmDiv.appendChild(header);

  // BUTTON TO SHOW HIDE INFO BELOW
  const button = document.createElement('button');
  button.setAttribute('type','button');
  button.classList.add('btn', 'btn-info');
  button.textContent = 'More Info';

  // Adds a "-" between any whitespace so that the .id doesnt have to deal with any whitespace
  const regex = / /g;
  const moreInfoDivId = film.title.replace(regex, "-");

  button.setAttribute('data-target', `#${moreInfoDivId}`); //
  button.setAttribute('data-toggle', 'collapse');
  filmDiv.appendChild(button);

  const moreInfoDiv = document.createElement('div');
  moreInfoDiv.id = moreInfoDivId // id struggles with whitespace
  moreInfoDiv.classList.add('collapse');

  filmDiv.appendChild(moreInfoDiv);

  const moreInfoList = document.createElement('ul');
  // moreInfoList.classList.add('collapse')
  moreInfoDiv.appendChild(moreInfoList)


  const episodeItem = document.createElement('li');
  episodeItem.textContent = `Episode: ${film.episode_id}`;
  moreInfoDiv.appendChild(episodeItem);

  const directorItem = document.createElement('li');
  directorItem.textContent = `Director: ${film.director}`;
  moreInfoDiv.appendChild(directorItem);

  const producerItem = document.createElement('li');
  producerItem.textContent = `Producer(s): ${film.producer}`;
  moreInfoDiv.appendChild(producerItem);

  const releaseDateItem = document.createElement('li');
  releaseDateItem.textContent = `Release Date: ${film.release_date}`;
  moreInfoDiv.appendChild(releaseDateItem);


  const openingCrawlItem = document.createElement('li');
  openingCrawlItem.textContent = `Opening Crawl: ${film.opening_crawl}`;
  moreInfoDiv.appendChild(openingCrawlItem);


  return filmDiv;
}

module.exports = FilmDetailView;
