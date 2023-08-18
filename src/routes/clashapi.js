const express = require('express');
const clashapiRouter = express.Router();
const axios = require('axios');
const clashapi_url = "https://cocproxy.royaleapi.dev/v1/";
const api_key = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImFiYWJkOWY5LTc3YWItNDgwYi1hYzQ4LWU4MTMyZTEyZWQ5ZSIsImlhdCI6MTY5MjI5NjA2OSwic3ViIjoiZGV2ZWxvcGVyLzYwOWQxOTQwLTVkMjgtZDFmYy03NjZmLThmYjE0MTVjZGNiYiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjQ1Ljc5LjIxOC43OSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.woLvOP06aZGs20l5MtNlvkwt5Ygu2GC6_AtbqNhDmz8qK2OxQH8zt5sr3VxjC4tlzq741J0Kn7TQYsPe6L2YHw";
const api_headers = {
    "Accept": "application/json",
    "authorization": "Bearer " + api_key
};

clashapiRouter.get("", async(req, res) => {
    res.render("clashapi", {clan : ""})
})

clashapiRouter.get("/clan:id", async(req, res) => {
    let clanID = req.params.id;
    console.log("displaying info for clan with tag : " + clanID);
    axios.defaults.headers.common = {"authorization": "Bearer " + api_key};
    const clanAPI = await axios.get(clashapi_url + "clans/%23" + clanID, {Headers: api_headers});
    res.render("clanProfile", {clan : clanAPI.data});
    console.log(clanAPI.data.memberList[0]);
})

clashapiRouter.post("", async(req, res) => {
    let clanSearch = req.body.search1;
    let playerSearch = req.body.search2;
    axios.defaults.headers.common = {"authorization": "Bearer " + api_key};
    if (clanSearch != null && clanSearch.length > 2) {
        console.log("finding clans :" + clanSearch);
        let searchQuery = "clans?name=" + clanSearch+"&limit=50"
        const clanResults = await axios.get(clashapi_url + searchQuery, {Headers: api_headers});
        res.render("clanSearch", {clans : clanResults.data.items})
    }
    else if (playerSearch != null) {
        console.log("finding players :" + playerSearch);
        res.render("clashapi", {clan : ""});
    }
    else {
        console.log("invalid search");
        res.render("clashapi", {clan : ""})
    }
})

module.exports = clashapiRouter;