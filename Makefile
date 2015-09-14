web_server = beefy
js = ./js/main.js
port = 1337

all:
	$(web_server) $(js) $(port) --live
