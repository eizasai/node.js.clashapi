const express = require("express");
const app = express();
const port = 5000;
app.listen(process.env.port || port, () => console.log("listening on ${port}"));
var cors = require("cors");
var path = require("path");
// app.use(cors());
app.use(express.static('public'));
app.use("/css", express.static(__dirname + "public/css"));
app.set("views", "./src/views");
app.set("view engine", "ejs");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended : true}));

app.use(express.static(path.join(__dirname, "public")));
const clashapiRouter = require("./src/routes/clashapi");
app.use('/', clashapiRouter);


// function search_clan() {
//     console.log("searching for clan");
//     let input = document.getElementById("ClanSearch").value; 
//     input = input.toLowerCase();
//     let result = document.getElementById("result");
//     result.textContent = input;
//     api_clan_search(input)
// }

// function api_clan_search( input) {
//     const api_headers = {
//         "Accept": "application/json",
//         "authorization": "Bearer " + api_key,
//     }
//     axios.get(clashapi_url + "clans/%" + input + "/currentwar", {headers: api_headers}).then(
//         response => {const data = response.data;
//             console.log('data', data)}).catch(error => console.error("error retrieving clan information", error));            
// }