import React, { Component } from 'react'
import Sheet from './Sheet'

const dummyData = [
    ["yahengsu", "ian", "0.2.2 Javascript Jellies", "2011-01-26T19:01:12Z", "2011-01-26T19:01:17Z"],
    ["yahengsu", "ian", "0.2.2 Javascript Jellies", "2011-01-26T19:01:12Z", "2011-01-26T19:01:14Z"],
    ["yahengsu", "ian", "0.2.2 Javascript Jellies", "2011-01-26T19:01:12Z", "2011-01-26T19:01:16Z"],
    ["yahengsu", "ian", "0.2.2 Javascript Jellies", "2011-01-26T19:01:12Z", "2011-01-26T19:01:12Z"],
    ["yahengsu", "ian", "0.2.2 Javascript Jellies", "2011-01-26T19:01:12Z", "2011-01-26T19:01:13Z"],
    ["yahengsu", "ian", "0.2.2 Javascript Jellies", "2011-01-26T19:01:12Z", "2011-01-26T19:01:15Z"],
];

const cols = [
    {name: "Username", key: 0},
    {name: "Reviewer", key: 1},
    {name: "Podname", key: 2},
    {name: "Created_at", key: 3},
    {name: "Updated_at", key: 4}
];
class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            all_repos: [],
            all_prs: []
        };
    }
    sortByLeastRecent = (data) => {
        data.sort((a,b) => Date.parse(a[4]) - Date.parse(b[4]));
        return data;
    }
    
    render() {
        return (
            <div>
                <Sheet  
                    data = {this.sortByLeastRecent(dummyData)}
                    cols = {cols}
                >
                </Sheet>
            </div>
        )
    }
}

export default MainPage;