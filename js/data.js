/* exported data */
var data = {
  view: 'search',
  recipe: null,
  savedRecipe: false,
  library: [],
  nextEntryId: 1,
  removeId: null
};

var previousSearchInput = localStorage.getItem('recipe-local-storage');

if (previousSearchInput !== null) {
  data = JSON.parse(previousSearchInput);
}

window.addEventListener('beforeunload', function (e) {
  var searchInput = JSON.stringify(data);
  localStorage.setItem('recipe-local-storage', searchInput);
});
