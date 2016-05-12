require 'sinatra'
require 'json'

enable :sessions
set :session_secret, 'super secret'

get '/status' do
	headers 'Access-Control-Allow-Origin' => '*'
	# headers 'Content-Type' => 'application/json'
	# {time: Time.now.to_s, city: 'Paris'}.to_json
	{time: $time, city: $city}.to_json
end

post '/status' do
	headers 'Access-Control-Allow-Origin' => '*'
	# headers 'Content-Type' => 'application/json'
	@json = JSON.parse(request.body.read)
	$time = @json['time']
	$city = @json['city']
end