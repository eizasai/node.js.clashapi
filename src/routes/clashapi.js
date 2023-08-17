const express = require('express');
const clashapiRouter = express.Router();
const axios = require('axios');
const clashapi_url = "https://api.clashofclans.com/v1/";
const api_key = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjE0NGE5NjhkLTliYmItNDA5MC04MWJmLTg1ZTI4NDAxNGVkZiIsImlhdCI6MTY4ODI1Mjk5MCwic3ViIjoiZGV2ZWxvcGVyLzYwOWQxOTQwLTVkMjgtZDFmYy03NjZmLThmYjE0MTVjZGNiYiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjEwMC40LjcwLjE3NSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.NBorECkqkp1TeUJFBuheml9Mwr1fbOXe4wVfLmWkdLzJklhXeuXdmLcvK-jOsN3BuwVXyjaqzojRNwFiCM4bQg";
const api_headers = {
    "Accept": "application/json",
    "authorization": "Bearer " + api_key
};

clashapiRouter.get("", async(req, res) => {
    res.render("clashapi", {clan : ""})
})

clashapiRouter.get("/clans/:id", async(req, res) => {
    let clanID = req.params.id;
    axios.defaults.headers.common = {"authorization": "Bearer " + api_key};
    const clanAPI = await axios.get(clashapi_url + "clans/%" + clanID, {Headers: api_headers});
    console.log(clanAPI.data.tag);
    res.render("clashapi", {clan : clanAPI.data})
})

module.exports = clashapiRouter;