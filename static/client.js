function displayPage () {
  const searchBar = document.createElement('div');
  searchBar.setAttribute(id, 'searchBar');
  //searchBar

  //categories (display curated picks (my picks) from server)
  //top5 (fetch from gPodder API)


  fetch('https://gpodder.net/toplist/5.json')
  .then(function(response){
    return response.json();
  }).then(function(json){
    let topFivePodcasts = json;

    //do stuff with top5podcasts -> call function displayTopFive(topFivePodcasts)

  }). catch(function(error){
    res.status(500).json({error: 'Failed to get data'});
  });


  //luckySpin
  //home button
  //
}

function displayTopFive() {
  //display top5 on front page
  //call displayPodcast()
}

function pickRandom() {
  //when lucky spin: pick random podcast
  //fetch from gPodder API
 // link to gPodder-player
}

function displayCategories() {
  //get categories from server
  //fetch categories from storage on server
  //display clickable categories - dropdown??


}

function pickCategory() {
  //choose category (eventListener)
  //go to category page
}

function displayPodcastsInCategory() {
  //category page with list of podcasts in pickCategory
  //fetch category from gPodder API
  //pick a podcast
}

function displayPodcast() {
  //display chosen podcast:
  //fetch podcast from gPodder API
  //url, description, link to listen at gPodder (or show episode data?)
  //rate and review
}

function reviewPodcast() {
  //review podcast
  //but where to store it? server side storage?
}
