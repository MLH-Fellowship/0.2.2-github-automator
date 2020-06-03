const express = require("express")
const axios = require("axios")
const app = express()
const fs = require("fs")

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Running on ${port}`))

// Works
app.get("/test", (req, res) => {
    console.log("hi")
})

app.get("/github", (req, res) => {
    console.log("function works")
    setInterval(function () {
        console.log("RUNNING NOW")
        var a = []
        axios.get("https://api.github.com/users/MLH-Fellowship/repos").then(res => {
            for (var i = 0; i < res.data.length; i++) {
                a.push(res.data[i].name)
            }

            var all_prs = []

            a.map(repo => {
                axios.get(`https://api.github.com/repos/MLH-Fellowship/${repo}/pulls?state=open`).then(pull_res => {
                    const repo_status = {
                        name: repo,
                        assignee: pull_res.assignee.login,
                        reviewers: pull_res.requested_reviewers[0].login,
                        created_at: pull_res.created_at,
                        updated_at: pull_res.updated_at
                    }

                    console.log(repo_status)

                    all_prs.push(repo_status)

                    fs.writeFile("output.json", JSON.stringify(all_prs), "utf8", function (err) {
                        if (err) throw err;

                        //console.log("done")
                    })

                }).catch(e => console.log(e))
            })


        }).catch(e => console.log(e))
    }, 60000) // 2 mins
})
