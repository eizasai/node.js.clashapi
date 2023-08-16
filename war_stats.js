const express = require("express");
var app = express();
var cors = require("cors");
app.use(cors());
const clashapi_url = "https://api.clashofclans.com/v1/";
const api_key = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjE0NGE5NjhkLTliYmItNDA5MC04MWJmLTg1ZTI4NDAxNGVkZiIsImlhdCI6MTY4ODI1Mjk5MCwic3ViIjoiZGV2ZWxvcGVyLzYwOWQxOTQwLTVkMjgtZDFmYy03NjZmLThmYjE0MTVjZGNiYiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjEwMC40LjcwLjE3NSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.NBorECkqkp1TeUJFBuheml9Mwr1fbOXe4wVfLmWkdLzJklhXeuXdmLcvK-jOsN3BuwVXyjaqzojRNwFiCM4bQg";
const api_headers = {
    "Accept": "application/json",
    "authorization": "Bearer " + api_key,
};

function search_clan() {
    let input = document.getElementById("ClanSearch").value; 
    input = input.toLowerCase();
    let result = document.getElementById("result");
    result.textContent = input;
    api_clan_search(input)
}

function api_clan_search( input) {
    const api_headers = {
        "Accept": "application/json",
        "authorization": "Bearer " + api_key,
    }
    axios.get(clashapi_url + "clans/%" + input + "/currentwar", {headers: api_headers}).then(
        response => {const data = response.data;
            console.log('data', data)}).catch(error => console.error("error retrieving clan information", error));            
}