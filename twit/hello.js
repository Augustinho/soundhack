var http = require("http"); 

var Twit = require('twit');
var T = new Twit({
	consumer_key: 'fKtO4J8AgkiC0y4OmcudsAJWV',
	consumer_secret: 'KRU4k5OySsA7aCp81hnRLpV9W1BiB6OGyEzbXRokWIFdrUfYK6',
	access_token: '35626713-ZdUgWGlG1OGQpMMDXkvxwTqdKneDTOwm3MpvJjT5R',
	access_token_secret: 'rm3femoPmwRMHIdKFSWgbdcd3EqHmacqfeuRhnkN2ICXP'

});
//var u = require('util');
//T.post('statuses/update', {status: 'hello world hackathon'}, function(err,data,response){
//	console.log(data);
//});


var path = require("path");
var fs = require("fs");
var Twit = require('twit');
var oauth = JSON.parse(fs.readFileSync("./config/twitter_credentials.js", "UTF8"));
var keywords = ['twitter'];
var client = new Twit(oauth);
var stream = client.stream('statuses/filter', { track: keywords })
stream.on('tweet', function(tweet) {
console.log(tweet.text);
});





/*T.get('search/tweets', {q: 'casa', count:10}, function(err, data, response){
	for(tweet in data.statuses){
	console.log(data.statuses[tweet].text);   
	//console.log(err); 
	//console.log(response);     
       }

//JSON.parse('search/tweets',)
});
*/

// Create the server. 
var server = http.createServer(function (req, res) { 
		res.writeHeader(200); 
		

		//res.write('<html><head><title>teste</title></head><body>');
		//res.write('Teste' + tweets.innerHTML);
		//res.write('</body></html>');

		res.end('Hello World');  
}).listen(8080);