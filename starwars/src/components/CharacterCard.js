import React from "react";
import { Card, CardHeader, CardBody, CardText, Col } from "reactstrap";

export default function CharacterCard(props) {
    console.log('Cardprops', props.character.homeworld);

    return (
        <Col xl="1" md="1" xs="1">
            <Card>
                <CardHeader>{props.character.name}</CardHeader>
                <CardBody>
                    <CardText>{props.character.name} was born {props.character.birth_year}, has a height of {props.character.height} centimeters and a mass of {props.character.mass} kilograms.</CardText>
                </CardBody>
            </Card>
        </Col>
    )
}