import React, {
    Component
} from "react";
import ReactDOM from 'react-dom';
import axios from "axios";
import Hero from './Hero';

class HeroList extends Component {
    constructor(props) {
        super();
        this.state = {
            heroList: [],
            hero_name: 'vision',
            first_name: 'paul',
            last_name: 'bettany',
            favorite_food: 'candy'
        };

        // this.handlePageChange = this.handlePageChange.bind(this);


    }

    // componentDidMount() {
    //     if (this.props.clients.length === 0) {
    //         // if the page is refreshed
    //         this.props.getClients(); // call axios from redux -> update props
    //     }
    //     this.setState({
    //         clients: this.props.clients,
    //         searchResults: [],
    //         searchLookupValue: "",
    //         searchSelection: "" // reset search component
    //     });
    // }


    render() {
        
        return (
            <div>
                <h1>Heros and Hero Foods</h1>
                <Hero/>
            </div>
           
        );
    }
}

export default HeroList
