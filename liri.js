// twitter
// spotify same name as installed package
// OMDB with 
//   request
var request = require("request");
var omdb = require('omdb');
var Env = require("dotenv").config();
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var fs = require("fs");
var keys = require("./keys.js");

// insert keys below
var spotify = new Spotify(keys.spotify);

var twitter = new Twitter(keys.twitter);

function primary(command, searchName){
	switch(command){
		case "my-tweets":
			// call twitter function
			getTweets();
			break;
		case "spotify-this-song":
			// call spotify function pass search name in also
			searchSpotify(searchName);
			break;
		case "movie-this":
			// call omdb function pass search name in also
			searchOMDB(searchName);
			break;
		case "do-what-it-says":
			// call random function
			random();
			break;
		default:
			// call random function
	}
}

function getTweets(){
	// show last 20 tweets
	// show created date consolelog it
	var params = {screen_name: 'nodejs'};
	twitter.get('statuses/user_timeline', params, function(error, tweets, response) {
  		if (error) {

  			return console.log('Error occurred: ' + error)
   			
 		}
 		for(var i = 0; i < 20; i++){
			console.log("This tweet was created on " + tweets[i].created_at);
			console.log(tweets[i].text);
			console.log("**************************************************\n");
  		}
  		logData(tweets);
	});
}

function searchSpotify(songName){
	// show info :
		// Artist(s)
		// The song's name
		// A preview link of the song from Spotify
		// The album that the song is from

	// If no song is provided then your program will default to "The Sign" by Ace of Base.
	if (!songName){
		songName = "lose yourself";
	}

	spotify.search({ type: 'track', query: songName }, function(error, data) {
		if (error) {
			return console.log('Error occurred: ' + error);
		}

		var infoData = data.tracks.items[0];
		console.log(
			{songName: infoData.name},
			{artist: infoData.artists[0].name}, 
			{albumName: infoData.album.name}, 
			{preview: infoData.preview_url}
		);
		logData(data);

	});
}

function searchOMDB(movieName){
	// show movie info:
		// * Title of the movie.
		// * Year the movie came out.
		// * IMDB Rating of the movie.
		// * Rotten Tomatoes Rating of the movie.
		// * Country where the movie was produced.
		// * Language of the movie.
		// * Plot of the movie.
		// * Actors in the movie.


 
omdb.search('saw', function(error, movies) {
    if(error) {
        return console.error(err);
    }
 
    if(movies.length < 1) {
        return console.log('No movies were found!');
    }
 
    movies.forEach(function(movie) {
        console.log('%s (%d)', movie.title, movie.year);
    });
});
 
omdb.get({ title: 'Saw', year: 2004 }, true, function(error, movie) {
    if(err) {
        return console.error(error);
    }
 
    if(!movie) {
        movie = "Mr. Nobody";
    }
 
    console.log('%s (%d) %d/10', movie.title, movie.year, movie.imdb.rating);
    console.log(movie.plot);

	// If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

	// instructions:
		// You'll use the request package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use trilogy.
}

function random(){
	fs.readFile('random.txt', "utf8", function(error, data) {
		var options = data.split("/");
		
		var option;
		for (var i = 0; i < options.length; i++) {
			option = options[Math.floor(Math.random()*options.length)];
		}

		var args = option.split(",");
		primary(args[0], args[1]);
  	});
	// instructions:
		// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands. usr fs to get string varable. split the string variable in to an array. call primary function: the array[0]= command, array[1]= searchName.

		// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
		// 	Feel free to change the text in that document to test out the feature for other commands.
}

function logData(searchData){

	fs.appendFile('log.txt', searchData, function (error) {
  		if (error){
  			return console.log('Error occurred: ' + error);
  		}
 		console.log('Logged!');
	});
	// instructions:
		// 	In addition to logging the data to your terminal/bash window, output the data to a .txt file called log.txt.
		// Make sure you append each command you run to the log.txt file. 
		// Do not overwrite your file each time you run a command.
}

primary(process.argv[2], process.argv[3]);

