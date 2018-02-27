function displayPage () {
  //categories (display curated picks (my picks) from server)
  //top5 (fetch from gPodder API)


  fetch('https://gpodder.net/toplist/5.json')
  .then(function(response){
    return response.json();
  }).then(function(json){
    let topFivePodcasts = json;

    //do stuff with top5podcasts -> call function displayTopFive(topFivePodcasts)
    displayTopFive();
    topFivePodcasts.forEach(function (element) {
      if (element.title === 'This American Life') {
        element.logo_url = 'static/images/podcast-big-logo.png';
      }
      addRow(element)
    });

  });
  // .catch(function(error){
  //   res.status(500).json({error: 'Failed to get data'});
  // });


}

displayPage();

function searchAll() {
  //search bar input - perform fetch with query
}

function displayTopFive() {
  //display top5 on front page
  const displayContainer = document.querySelector('.table-container');

  let displayTable = document.createElement('table');
  displayTable.setAttribute('class', 'table pod-table');

  displayTable.innerHTML = `
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">Podcasts</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  `

  //displayContainer.appendChild('displayTable');



  //call displayPodcast() when one is clicked

}



function addRow(input) {
  const table = document.querySelector('.pod-table');
  const row = table.insertRow(-1);
  row.innerHTML = `
  <td width="30%">
    <img src=${input.logo_url} alt="podcast-logo" class="pod-img">
    </td>
    <td class="pod-table-text" width="70%">${input.title}</td>
  `
}

// displayTopFive();
// addRow();

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


//credit <div>Icons made by <a href="https://www.flaticon.com/authors/icomoon" title="Icomoon">Icomoon</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
//credit <div>Icons made by <a href="https://www.flaticon.com/authors/plainicon" title="Plainicon">Plainicon</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
