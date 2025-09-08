const path = require('path'); 
// /folder/files.jpg \folder\files.jpg


function getMessages (req, res) {
    res.sendFile( path.join(__dirname,'..', 'public', 'skimountain.jpg' ));
}

function postMessage (req, res) {
  console.log('Updating messages...');
}

module.exports = {
  getMessages,
  postMessage
};