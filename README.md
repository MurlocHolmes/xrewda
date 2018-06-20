<h1>xrewdA challenge!</h1>

<ul>
    <li> Run npm install from within the directory</li>
    <li> Run npm start from within the directory</li>
    <li> Navigate to localhost:3000</li>
</ul>

I didn't put any testing in as I wanted to keep my time short per your request. If the code were to go to production, 
it would benefit from a decent amount of integration testing to make sure that it is interacting properly with the API
and identifying any bottlenecks/weak spots.

Also, there's a bug in the API. If you just send "undefined" and "undefined" to the API, it will register them as a real
user. Not sure if that is intentional or not, but thought I would point it out!

Cheers.