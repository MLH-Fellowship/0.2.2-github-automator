import React, { Component, Fragment } from 'react'
import Sheet from './Sheet'

const dummyData = [
    ["yahengsu", "aldin11", "0.2.2 Javascript Jellies", "2011-01-26T19:01:12Z", "2020-05-29T19:01:17Z"],
    ["yahengsu", "twistz23", "0.2.2 Javascript Jellies", "2011-01-26T19:01:12Z", "2020-06-01T18:01:14Z"],
    ["yahengsu", "noz", "0.2.2 Javascript Jellies", "2011-01-26T19:01:12Z", "2020-06-03T12:01:16Z"],
    ["yahengsu", "swift", "0.2.2 Javascript Jellies", "2011-01-26T19:01:12Z", "2020-06-03T19:01:12Z"],
    ["yahengsu", "ian", "0.2.2 Javascript Jellies", "2011-01-26T19:01:12Z", "2020-06-02T19:01:13Z"],
    ["yahengsu", "tuna", "9.9.9 Terrible Trumpets", "2011-01-26T19:01:12Z", "2020-06-01T19:01:15Z"],
    ["yahengsu", "ian", "9.9.8 Excellent Elephants", "2011-01-26T19:01:12Z", "2020-06-03T19:01:12Z"],
    ["yahengsu", "ian", "12.22.12 Yummy Yellowfins", "2011-01-26T19:01:12Z", "2020-06-03T19:01:12Z"],
    ["yahengsu", "ian", "7.6.7 Sad Sea Urchins", "2011-01-26T19:01:12Z", "2020-06-03T19:01:12Z"],
    ["yahengsu", "ian", "9.8.9 Literate Lobsters", "2011-01-26T19:01:12Z", "2020-06-03T19:01:12Z"],

];

const cols = [
    {name: "Username", key: 0},
    {name: "Reviewer", key: 1},
    {name: "Podname", key: 2},
    {name: "Created_at", key: 3},
    {name: "Updated_at", key: 4}
];

const labels = ["Show PRs from", "Search Reviewer", "Search Podname"];
const options = [["Forever", "Past 24 hours", "Past 3 days", "Past 7 days"]];

class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            all_repos: [],
            all_prs: [],
            dateValue: "",
            reviewerValue: "",
            podValue: "",
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
                let pastDay = dummyData.filter(a => now - Date.parse(a[4]) < (3600000 * 24));
                this.setState({
                    data: pastDay
                });
                break;
            case options[0][2]:
                let pastThreeDays = dummyData.filter(a => now - Date.parse(a[4]) < (3600000 * 24 * 3));
                this.setState({
                    data: pastThreeDays
                });
                break;
            case options[0][3]:
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

    filterByReviewer = () => {
        const reviewer = this.state.reviewerValue;
        if(reviewer !== "") {
            let filteredData = this.state.data.filter(a => a[1] === reviewer);
            this.setState({
                data: filteredData
            });
        } 
        else {
            this.setState({
                data: dummyData
            });
        }
        
    }

    filterByPod = () => {
        const pod = this.state.podValue;
        if(pod !== "") {
            let filteredData = this.state.data.filter(a => a[2].includes(pod));
            this.setState({
                data: filteredData
            })
        }
        else {
            this.setState({
                data: dummyData
            });
        }
    }

    setDate = (event) => {
        this.setState({
            dateValue: event.target.value
        });
        this.filterByDate(event.target.value);
    }

    setReviewer = (event) => {
        this.setState({
            reviewerValue: event.target.value
        });
    }

    setPod = (event) => {
        this.setState({
            podValue: event.target.value
        });
    }


    clearFields = () => {
        this.setState({
            data: dummyData
        });
    }


    render() {
        return (
            <Fragment className="main">
                <h1 className="heading">Github Automator</h1>
                <label className="label-date">
                    {labels[0]}
                </label>
                <select className="select-date" onChange={this.setDate} value={this.state.dateValue}>
                    {options[0].map((o, i) => <option value={o} key={i}>{o}</option>)}
                </select>
                <label className="label-reviewerValue">
                    {labels[1]}
                    <textarea value={this.state.reviewerValue} onChange={this.setReviewer}/>
                </label>
                <input className="input-search" type="submit" value="Search" onClick={this.filterByReviewer}/>
                <label>
                    {labels[2]}
                    <textarea value={this.state.podValue} onChange={this.setPod}/>
                </label>
                <input className="input-search" type="submit" value="Search" onClick={this.filterByPod}/>
                <button className="button-clear-fields" onClick={this.clearFields}>Clear</button>
                <Sheet  
                    data = {this.sortByLeastRecent(this.state.data)}
                    cols = {cols}
                />
            </Fragment>
        )
    }
}

export default MainPage;