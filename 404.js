var currentUrl = location.href;
let pageTitle = document.querySelector('.current-URL-not-found')
pageTitle.innerHTML = '<a href="' + currentUrl + '">' + currentUrl + '</a> Was Not Found'
