var currentUrl = location.href;
let pageTitle = document.querySelector('.current-URL-not-found')
pageTitle.innerHTML = '<a href="' + currentUrl + '">' + currentUrl + '</a> Was Not Found'

var splitUrl = currentUrl.split('://rockgamerak.com/')[1]

if (splitUrl == '404/') {
    location.href = '/404'  
}
else if (splitUrl == 'about/') {
  location.href = '/about'
}
else if (splitUrl == 'contact/') {
    location.href = '/contact'
}
else if (splitUrl == 'projects/') {
    location.href = '/projects'
}
else if (splitUrl == 'sites/') {
    location.href = '/sites'
}