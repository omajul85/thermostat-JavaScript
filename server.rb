require 'sinatra'
require 'json'

get '/time.json' do
	headers 'Access-Control-Allow-Origin' => '*'
	{time: Time.now.to_s, city: 'Paris'}.to_json
end