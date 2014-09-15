var http = require('http');

var Twit = require('twit');
var T = new Twit({
  consumer_key: 'fKtO4J8AgkiC0y4OmcudsAJWV',
  consumer_secret: 'KRU4k5OySsA7aCp81hnRLpV9W1BiB6OGyEzbXRokWIFdrUfYK6',
  access_token: '35626713-oFUMzXAIYMwLPV4lWdBDphRdCaET1rGgnq99EHB8q',
  access_token_secret: 'TTG3yjisaMh2DbsRDqqC3qqb0RPzlsiZ82oCXFsYvgXDE'

});


T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
  console.log(data);

  });

var server = http.createServer(function(req, res) {
  res.writeHeader(200);

  res.end('Hello Http');
  //var file = require ("fs");

  //var link = "https://api.twitter.com/1.1/search/tweets.json?q=%23freebandnames&since_id=24012619984051000&max_id=250126199840518145&result_type=mixed&count7=4";
  
  
}).listen(8080);








