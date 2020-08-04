import React from "react";
import { Card, CardHeader, CardBody, CardText, Col } from "reactstrap";

export default function CharacterCard(props) {
    
    return (
        <Col>
            <Card>
                <CardHeader>{props.character.name}</CardHeader>
                <CardBody>
                    <CardText>{props.character.name} was born {props.character.birth_year}, has a height of {props.character.height} centimeters and a mass of {props.character.mass} kilograms.</CardText>
                </CardBody>
            </Card>
        </Col>
    )
}