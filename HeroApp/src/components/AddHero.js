import React, {
    Component
} from "react";
import axios from "axios";
import {
    Image,
    Item,
    Responsive,
    Segment,
    Form,
    Button,
    TextArea
} from 'semantic-ui-react'

class AddHero extends Component {
    constructor(props) {
        super();
        // this.state = {
        //     heroList: [],
        //     hero_name: '',
        //     first_name: 'paul',
        //     last_name: 'bettany',
        //     favorite_food: 'candy'
        // };


    }

    render() {

        return ( 
            
            <div>

                <h3> Add A Hero! </h3>
                < hr / >
                <Form>

                        
                    < Form.Group widths = 'equal' >

                    
                        < Form.Input fluid label = 'Hero Name'
                        id = "heroName"
                        type = "text"
                        className = "form-control"
                        placeholder = "Hero Name"
                        name = "heroName" />

                        < Form.Input fluid label = 'First Name'
                        id = "firstName"
                        type = "text"
                        className = "form-control"
                        placeholder = "First Name"
                        name = "firstName" / >

                        < Form.Input fluid label = 'Last Name'
                        id = "lastName"
                        type = "text"
                        className = "form-control"
                        placeholder = "Last Name"
                        name = "lastName" / >

                        < Form.Input fluid label = 'Favorite Food'
                        id = "favoriteFood"
                        type = "text"
                        className = "form-control"
                        placeholder = "Favorite Food"
                        name = "favoriteFood" / >


                    </Form.Group>

                </Form>


            </div>

        );
    }
}

export default AddHero