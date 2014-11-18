var express = require('express')
, stylus = require('stylus')
, nib = require('nib');

var app = express();
function compile(str, path) {
	return stylus(str)
	.set('filename', path)
	.use(nib());
}
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
//app.use(express.logger('dev'));
app.use(stylus.middleware(
		{ src: __dirname + '/public'
			, compile: compile
		}
));
app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {
	res.render('index', {
		title : 'Home',
		currentURL:'/' 
	});
});

app.get('/projects', function (req, res) {
	res.render('projects', {
		title : 'Projects',
		currentURL:'/projects' 
	});
});

app.get('/updates', function (req, res) {
	res.render('updates', {
		title : 'Updates',
		currentURL:'/updates' 
	});
});



app.listen(3000);