require 'sinatra'
require 'json'

get '/status' do
	headers 'Access-Control-Allow-Origin' => '*'
	@json = File.read('status.json')
end

post '/status' do
	headers 'Access-Control-Allow-Origin' => '*'
	@json = request.body.read
	File.open('status.json', 'w') do |f|
		f.write(@json)
	end
end