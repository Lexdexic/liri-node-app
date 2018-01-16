// twitter
// spotify same name as installed package
// OMDB with 
//   request
var Env = require("env").config();
var Twitter = require("twitter");
var Spotify = require("spotify");
var fs = require("fs");
var keys = require("./keys.js");

// insert keys below
var spotify = new Spotify(bba733eef0b4815b7889c81cf99f4);
var twitter = new Twitter(MbdznwJm8prTViibDlQIRuZMu);

function primary(command, searchName){
	switch(command){
		case "my-tweets":
			// call twitter function
			getTweets();
			break;
		case "spotify-this-song"
			// call spotify function pass search name in also
			seachSong(searchName);
			break;
		case "movie-this":
			// call omdb function pass search name in also
			seachOMDB(searchName);
			break;
		case "do-what-it-says":
			// call random function
			break;
		default:
			// call random function
	}
}

function getTweets(){
	// show last 20 tweets
	// show created date consolelog it
	var params = {screen_name: 'nodejs'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
  		if (!error) {
   			 console.log(tweets);
 		}
	});
}

function searchSpotify(songName){
	// show info :
		// Artist(s)
		// The song's name
		// A preview link of the song from Spotify
		// The album that the song is from

	// If no song is provided then your program will default to "The Sign" by Ace of Base.

	// instructions:
		// You will utilize the node-spotify-api package in order to retrieve song information from the Spotify API.
		// Like the Twitter API, the Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a client id and client secret:
		// Step One: Visit https://developer.spotify.com/my-applications/#!/
		// Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.
		// Step Three: Once logged in, navigate to https://developer.spotify.com/my-applications/#!/applications/create to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.
		// Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the node-spotify-api package.

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

	// If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

	// instructions:
		// You'll use the request package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use trilogy.
}

function random(){
	// instructions:
		// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands. usr fs to get string varable. split the string variable in to an array. call primary function: the array[0]= command, array[1]= searchName.

		// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
		// 	Feel free to change the text in that document to test out the feature for other commands.
}

function logData(){
	// instructions:
		// 	In addition to logging the data to your terminal/bash window, output the data to a .txt file called log.txt.
		// Make sure you append each command you run to the log.txt file. 
		// Do not overwrite your file each time you run a command.
}

primary(process.argv[2], process.argv[3]);

