const table = document.querySelector('.pod-table');

const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", goHome);

const dropdownCategories = document.querySelectorAll(".category");
dropdownCategories.forEach(element => element.addEventListener("click", pickCategory));

const randomPick = document.getElementById('random');
randomPick.addEventListener("click", pickRandomCategory);

const searchField = document.getElementById('submit-search');
searchField.addEventListener("click", searchAll);

displayPage();

function displayPage() {
  //categories (display curated picks (my picks) from server)
  //top10 (fetch from gPodder API)
  fetch('https://gpodder.net/toplist/10.json')
  .then(function(response){
    return response.json();
  }).then(function(json){
    let topTenPodcasts = json;
    document.getElementById('table-head').innerText = 'POPULAR PODCASTS';
    document.getElementById('table-body').innerHTML = '';

    topTenPodcasts.forEach(function (element) {
      if (element.title === 'This American Life') {
        element.logo_url = 'static/images/podcast-big-logo.png';
      } else if(element.logo_url === null) {
        element.logo_url = 'static/images/podcast-big-logo.png';
      }
      addRow(element)
    });
  });
  // .catch(function(error){
  //   res.status(500).json({error: 'Failed to get data'});
  // });
}

function addRow(input) {
  //inserts row in display table
  const row = table.insertRow(-1);
  row.setAttribute('id', 'table-row');
  row.innerHTML = `
  <td class="td1" width="18%">
    <img src=${input.logo_url} alt="podcast-logo" class="pod-img">
    </td>
    <td class="pod-table-text td2"  id=${input.url} width="75%"><a href=#>${input.title}</a></td>
  `
  row.addEventListener("click", getPodcast);
}




function goHome(event) {
  event.preventDefault();
  displayPage();
}



function searchAll(event) {
  //search bar input - perform fetch with query
  event.preventDefault();
  const searchInput = document.getElementById('search-input').value;
  getPodcastsInSearch(searchInput);
}

function getPodcastsInSearch(searchInput){
  fetch(`https://gpodder.net/search.json?q=${searchInput}`)
  .then(function(response){
    return response.json();
  }).then(function(json){
    let results = json;
    displayCategory(results, searchInput);
  }).catch(function(error){
    res.status(500).json({error: 'Failed to get data'});
  });
}


function pickRandomCategory(event) {
  //when lucky spin: pick random podcast
  //fetch from gPodder API
  event.preventDefault();
  fetch('https://gpodder.net/api/2/tags/100.json')
  .then(function(response){
    return response.json();
  }).then(function(json){
    let results = json;
    const randomCategory = results[Math.floor(Math.random()*results.length)];
    const randomTag = randomCategory.tag;
    getRandomPodcastFromRandomCategory(randomTag)
  }).catch(function(error){
    res.status(500).json({error: 'Failed to get data'});
  });
}

function getRandomPodcastFromRandomCategory(tag) {
  fetch(`https://gpodder.net/api/2/tag/${tag}/100.json`)
  .then(function(response){
    return response.json();
  }).then(function(json){
    let results = json;
    const randomPodcast = results[Math.floor(Math.random()*results.length)];
    displayPodcast(randomPodcast);
  }).catch(function(error){
    res.status(500).json({error: 'Failed to get data'});
  });
}


function pickCategory(event) {
  //choose category (eventListener)
  //go to category page
  event.preventDefault();
  const category = event.target;
  const categoryTitle = category.innerText;
  const tag = category.getAttribute('id');
  getPodcastsInCategory(tag, categoryTitle);
}

function getPodcastsInCategory(input, title) {
  //category page with list of podcasts in pickCategory
  //fetch category from gPodder API
  let top = title;
  fetch (`https://gpodder.net/api/2/tag/${input}/10.json`)
  .then(function(response){
    return response.json();
  }).then(function(json){
    let results = json;
    displayCategory(results, top);
  });
}

function displayCategory(input, title) {
  document.getElementById('table-head').innerText = title;
  document.getElementById('table-body').innerHTML = '';

  input.forEach(function(element){
    if (element.title === 'This American Life') {
      element.logo_url = 'static/images/podcast-big-logo.png';
    } else if(element.logo_url === null) {
      element.logo_url = 'static/images/podcast-big-logo.png';
    }
    addRow(element)
  });
}



function getPodcast(event) {
  event.preventDefault();
  const target = this.childNodes;
  const targetUrl = target[3].id;

  fetch(`https://gpodder.net/api/2/data/podcast.json?url=${targetUrl}`)
  .then(function(response){
    return response.json();
  }).then(function(json){
    let results = json;
    displayPodcast(results);
  }).catch(function(error){
    res.status(500).json({error: 'Failed to get data'});
  });
}

function displayPodcast(input) {
  //display chosen podcast:
  //url, description, link to listen at gPodder (or show episode data?)
  //rate and review
  document.getElementById('table-head').innerText = input.title;
  document.getElementById('table-body').innerHTML = '';

  document.getElementById('table-body').innerHTML = `
    <tr>
      <td class="td1" width="30%">
        <img src=${input.logo_url} alt="podcast-logo" class="pod-img">
      </td>
      <td class="pod-table-text td2" id="description" width="75%"><h5>${input.description}</h5></td>
    </tr>
    <tr>
      <td class="td1" width="18%"></td>
      <td class="pod-table-text td2" id="website" width="75%"><a href=${input.website} target="_blank">Go to ${input.title}</a></td>
    </tr>
    <tr>
      <td class="td1" width="18%"></td>
      <td class="pod-table-text td2" id="gPodderUrl" width="75%"><a href=${input.mygpo_link} target="_blank">Listen at gPodder</a></td>
    </tr>
  `
}


function reviewPodcast() {
  //review podcast
  //but where to store it? server side storage?
}


//no longer needed functions
//-------
// function displayTopFive() {
//   //display top5 on front page
//   const displayContainer = document.querySelector('.table-container');
//
//   let displayTable = document.createElement('table');
//   displayTable.setAttribute('class', 'table pod-table');
//
//   displayTable.innerHTML = `
//     <thead>
//       <tr>
//         <th scope="col"></th>
//         <th scope="col">Podcasts</th>
//       </tr>
//     </thead>
//     <tbody>
//     </tbody>
//   `
//   //displayContainer.appendChild('displayTable');
//   //call displayPodcast() when one is clicked
//
// }

//credit <div>Icons made by <a href="https://www.flaticon.com/authors/icomoon" title="Icomoon">Icomoon</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
//credit <div>Icons made by <a href="https://www.flaticon.com/authors/plainicon" title="Plainicon">Plainicon</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
