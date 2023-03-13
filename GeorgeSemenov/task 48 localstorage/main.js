window.onstorage = event => { // можно также использовать window.addEventListener('storage', event => {
  if (event.key != 'now') return;
  console.log(event.key + ':' + event.newValue + " at " + event.url);
};

// document.getElementById('input')
localStorage.setItem('now', Date.now());