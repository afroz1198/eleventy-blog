const Twitter = require('twitter');

const client = new Twitter({
	consumer_key: 't6hs8fe32T2wigDp4Finci2JH',
	consumer_secret: 'vWUGkjgGnpJJzkUn81hWXhBSiD3zlAVsiSLMjz6W9TaYOWqIBG',
	access_token_key: '2930622986-Wa5BRnU2G5tFZwzGhvkSEi2Ka3lvfA8YwigeJsS',
	access_token_secret: 'jZafTkIP55nDSaRXGjUtu7jPnfEB9AOurk6FfBhrRqTsf'
});

var params = { screen_name: 'afroz1198', count: 2 };
module.exports = async function() {
	const res = await client.get('statuses/user_timeline', params);

	return res;
};
