import React from "react";
import { Container, Row } from "reactstrap";
import CharacterCard from "./CharacterCard";

export default function CharacterList(props) {
        
    return (
        <Container>
            <Row>
                {props.characters.map(character => {
                    return <CharacterCard character={character} key={character.created}/>
                })}                
            </Row>
        </Container>
    )
}
