import React from 'react';

import Card from '../components/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import city from '../assets/images/city.jpg';
import research from '../assets/images/research.jpg';
import hollow from '../assets/images/hollow1.png';


class Carousel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Research Paper Summarization',
                    subTitle: 'Summarization of research papers',
                    imgSrc: research,
                    link: 'https://github.com/jananiarunachalam/Research-Paper-Summarization',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Hollow',
                    subTitle: '2D Platformer',
                    imgSrc: hollow,
                    link: 'https://github.com/KevinThomas441/Hollow',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Skyscraper Energy Cost Analysis',
                    subTitle: 'Analysis of energy costs of skycrapers',
                    imgSrc: city,
                    link: 'https://github.com/KevinThomas441/Skyscraper-Energy-Cost-Analysis',
                    selected: false
                }
            ]

        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];


        items[id].selected = items[id].selected ? false: true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        }); 

        this.setState(
            {
                items
            }
        );
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;