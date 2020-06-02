import React, { Component } from 'react'
import Sheet from './Sheet'

class MainPage extends Component {

    data = () => {
        return [
            ["yahengsu", "ian", "0.2.2 Javascript Jellies", "some time", "some time after"]
        ];
    }
    cols = () => {
        return [
            {name: "Username", key: 0},
            {name: "Reviewer", key: 1},
            {name: "Podname", key: 2},
            {name: "Created_at", key: 3},
            {name: "Updated_at", key: 4}
        ];
    }
    render() {
        return (
            <div>
                <Sheet
                
                data = {this.data()}

                cols = {this.cols()}
                >
                </Sheet>
            </div>
        )
    }
}

export default MainPage