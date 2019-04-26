import React, {
    Component
} from "react";
import ReactDOM from 'react-dom';
import axios from "axios";
import Hero from './Hero';
import heroData from '../data/users.js'

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
    

    componentDidMount() {
        heroData.sort((a, b) => (a.id > b.id) ? 1 : -1)
        
        this.setState({
            heroList: heroData,
        });
    }


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
