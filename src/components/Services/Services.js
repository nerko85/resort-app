import React, { Component } from 'react'
import Title from '../../containers/Title'
import {Services as StyledServices} from './Services.style'
import {FaCocktail, FaHiking, FaShuttleVan, FaCoffee} from 'react-icons/fa'
import Card from '../../containers/Card'

export default class Services extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            services:[
                {
                    id:1,
                    title:"Some title",
                    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, deserunt dolore provident repellat ad placeat!",
                    icon:<FaCocktail/>
                },
                {
                    id:2,
                    title:"Some title",
                    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, deserunt dolore provident repellat ad placeat!",
                    icon:<FaHiking/>
                },
                {
                    id:3,
                    title:"Some title",
                    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, deserunt dolore provident repellat ad placeat!",
                    icon:<FaShuttleVan/>
                },
                {
                    id:4,
                    title:"Some title",
                    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, deserunt dolore provident repellat ad placeat!",
                    icon:<FaCoffee/>
                },
            ]
        };
        // this.handleClick = this.handleClick.bind(this);
      }
    render() {
        const {services} = this.state;
        return (
            <StyledServices>
                <div className="container">
                    <Title title="Services"/>
                    <div className="cards">
                        {services && services.map(service=>(
                            <Card key={service.id} title={service.title} description={service.description} icon={service.icon} />
                        ))}
                    </div>
                </div>
            </StyledServices>
        )
    }
}
