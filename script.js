fetch('https://api.frankfurter.app/latest')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));