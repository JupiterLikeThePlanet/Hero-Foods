import React, {
    Component
} from "react";
import ReactDOM from 'react-dom';
import axios from "axios";
import Hero from './Hero';
import heroData from '../data/users.js'
import {
    Image,
    Item,
    Responsive,
    Segment,
    Form,
    Button,
    TextArea
} from 'semantic-ui-react'

class HeroList extends Component {
    constructor(props) {
        super();
        this.state = {
            heroList: [],
            hero_name: '',
            first_name: '',
            last_name: '',
            favorite_food: ''
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
        var heroList = this.state.heroList
        
        return (
            <div>
                <h1>Heros and Hero Foods</h1>
                <Item.Group>
                    {
                        heroList.map((hero, index) => (
                            <Hero
                                key={index}
                                hero_name={hero.hero_name}
                                favorite_food={hero.favorite_food}
                            />
                        ))
                    }
                </Item.Group>



            </div>
           
        );
    }
}

export default HeroList
