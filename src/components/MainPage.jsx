import React, { Component, Fragment } from 'react'
import Sheet from './Sheet'

const dummyData = [
    ["yahengsu", "ian", "0.2.2 Javascript Jellies", "2011-01-26T19:01:12Z", "2020-05-29T19:01:17Z"],
    ["yahengsu", "ian", "0.2.2 Javascript Jellies", "2011-01-26T19:01:12Z", "2020-06-01T18:01:14Z"],
    ["yahengsu", "ian", "0.2.2 Javascript Jellies", "2011-01-26T19:01:12Z", "2020-06-03T12:01:16Z"],
    ["yahengsu", "ian", "0.2.2 Javascript Jellies", "2011-01-26T19:01:12Z", "2020-06-03T19:01:12Z"],
    ["yahengsu", "ian", "0.2.2 Javascript Jellies", "2011-01-26T19:01:12Z", "2020-06-02T19:01:13Z"],
    ["yahengsu", "ian", "0.2.2 Javascript Jellies", "2011-01-26T19:01:12Z", "2020-06-01T19:01:15Z"],
];

const cols = [
    {name: "Username", key: 0},
    {name: "Reviewer", key: 1},
    {name: "Podname", key: 2},
    {name: "Created_at", key: 3},
    {name: "Updated_at", key: 4}
];

const labels = ["Show PRs from"];
const options = [["Forever", "Past 24 hours", "Past 3 days", "Past 7 days"]];

class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            all_repos: [],
            all_prs: [],
            dateValue: "",
            data: dummyData
        };
    }


    sortByLeastRecent = (data) => {
        data.sort((a,b) => Date.parse(a[4]) - Date.parse(b[4]));
        return data;
    }
    
    filterByDate = (dateValue) => {
        let now = Date.now();
        switch (dateValue) {
            case options[0][0]:
                this.setState({
                    data: dummyData
                });
                break;
            case options[0][1]:
                console.log("opt1");
                let pastDay = dummyData.filter(a => now - Date.parse(a[4]) < (3600000 * 24));
                this.setState({
                    data: pastDay
                });
                break;
            case options[0][2]:
                console.log("opt2");
                let pastThreeDays = dummyData.filter(a => now - Date.parse(a[4]) < (3600000 * 24 * 3));
                this.setState({
                    data: pastThreeDays
                });
                break;
            case options[0][3]:
                console.log("opt3");
                let pastSevenDays = dummyData.filter(a => now - Date.parse(a[4]) < (3600000 * 24 *7));
                this.setState({
                    data: pastSevenDays
                }) ;
                break;
            default: 
                this.setState({
                    data: dummyData
                })
                break;

        }
    }

    filterByReviewer = (reviewer) => {

    }

    setDate = (event) => {
        this.setState({
            dateValue: event.target.value
        });
        this.filterByDate(event.target.value);
        console.log(event.target.value);
    }

    setReviewer = (event) => {
        this.setState({
            reviewerValue: event.target.value
        })
        this.filterByReviewer(event.target.value);
    }

    
    render() {
        return (
            <Fragment>
                <label>
                    {labels[0]}
                </label>
                <select onChange={this.setDate} value={this.state.dateValue}>
                    {options[0].map((o, i) => <option value={o} key={i}>{o}</option>)}
                </select>

                <Sheet  
                    data = {this.sortByLeastRecent(this.state.data)}
                    cols = {cols}
                />
            </Fragment>
                
        )
    }
}

export default MainPage;