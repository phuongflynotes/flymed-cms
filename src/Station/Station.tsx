import React, {Component} from "react";

interface State{
    stationId: string;
}

export default class Station extends Component<{}, State>{
    // constructor(props: Props){
    //     super(props);
    // }

    render(){
        return(
            <h1>New Station</h1>
        );
    }
}