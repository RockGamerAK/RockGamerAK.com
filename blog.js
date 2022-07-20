var iframe = document.querySelector('main #main-content content iframe')

setInterval(1000, check)

function check() {
  if (iframe.location.href === 'https://www.blogger.com/profile/15375469230044994043') {
    window.open('https://www.blogger.com/profile/15375469230044994043')
  }
}