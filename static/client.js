const table = document.querySelector('.pod-table');

function displayPage () {
  //categories (display curated picks (my picks) from server)
  //top10 (fetch from gPodder API)
  fetch('https://gpodder.net/toplist/10.json')
  .then(function(response){
    return response.json();
  }).then(function(json){
    let topFivePodcasts = json;

    topFivePodcasts.forEach(function (element) {
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
  const row = table.insertRow(-1);
  row.innerHTML = `
  <td width="18%">
    <img src=${input.logo_url} alt="podcast-logo" class="pod-img">
    </td>
    <td class="pod-table-text" width="75%"><a href=${input.mygpo_link}>${input.title}</a></td>
    <td class="star-rating" width="25%">
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star"></span>
    </td>
  `
}

displayPage();

const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", function(event){console.log(event)});

function searchAll() {
  //search bar input - perform fetch with query
}

function pickRandom() {
  //when lucky spin: pick random podcast
  //fetch from gPodder API
 // link to gPodder-player
}

const dropdownCategories = document.querySelectorAll(".category");
dropdownCategories.forEach(element => element.addEventListener("click", pickCategory));

function pickCategory(event) {
  //choose category (eventListener)
  //go to category page
  event.preventDefault();
  const category = event.target;
  const categoryTitle = category.innerText;
  const tag = category.getAttribute('id');
  // console.log(category.innerText);
  // console.log(tag);
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
    // console.log(element.title, element.logo_url);
    if (element.title === 'This American Life') {
      element.logo_url = 'static/images/podcast-big-logo.png';
    } else if(element.logo_url === null) {
      element.logo_url = 'static/images/podcast-big-logo.png';
    }
    addRow(element)
  });
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


// function displayCategories() {
//   //get categories from server
//   //fetch categories from storage on server
//   //display clickable categories - dropdown??
// }

//credit <div>Icons made by <a href="https://www.flaticon.com/authors/icomoon" title="Icomoon">Icomoon</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
//credit <div>Icons made by <a href="https://www.flaticon.com/authors/plainicon" title="Plainicon">Plainicon</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
