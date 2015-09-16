# RPG

This is going to replace the Clojure RPG game I was working on.

I really like Clojure, but it is too frustrating working with the Java swing API for 2d graphics (Seriously, I find legacy OpenGL just as coherent).

I would much rather just do everything in the browser. I could try Clojure Script to write Clojure code that compiles to JS.
But with the new ES6 standard, I think vanilla JS is much simpler, as well as being a nice all around functional alternative.

Going to make casual updates to this whenever I have time.

# Instructions
To get around the lack of most browser implementing real ES6 modules, I am using Node.js modules.

This means I have to recursively bundle my javascript modules before running.

I use BEEFY to do this, which uses browserify.

npm install -g beefy browserify should get you both.

You can then use the unix makefile to build and run a live refreshing demo on localhost.


# Credits
The sprite sheet was obtained from http://opengameart.org/content/dungeon-crawl-32x32-tiles.


## License
Distributed under the WTF Public License.
