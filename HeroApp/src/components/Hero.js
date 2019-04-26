import React from 'react';
import ReactDOM from 'react-dom';
import {
    Image,
    Item,
    Responsive,
    Segment,
    Form,
    Radio,
    Checkbox
} from 'semantic-ui-react'


const Hero = (props) => (

    <div className="row">
        <Responsive as={Segment}>
            <Item.Content>
                <Item.Extra> <strong>Hero Name :</strong> {props.hero_name} </Item.Extra>
                <Item.Extra> <strong>Favorite Food : </strong>{props.favorite_food} </Item.Extra>
            </Item.Content>
        </Responsive>
        
        <hr/>
    </div>

        );

export default Hero