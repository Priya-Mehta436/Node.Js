const axios = require('axios');
axios.get('https://www.wikipedia.org')
    .then(response => { 
    console.log(response);
})
    .catch((err) => {
    console.error(err);
})
    .then(() => {
    console.log('All done!');
});
