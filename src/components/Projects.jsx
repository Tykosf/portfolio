import React, { useState } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import MyCard from './MyCard';
import CardsData from './Cardsdata';

const  Projects = () => {	
	const [activeTab, setActiveTab] = useState(0);

	const toggleCategories = () => {   
		const ReactItems = CardsData[0].map(item => <MyCard key ={item.id} item={item}/>);
		const CsItems =  CardsData[1].map(item => <MyCard key ={item.id} item={item}/>);
		const NodeItems = CardsData[2].map(item => <MyCard key ={item.id} item={item}/>);
		switch(activeTab) {
			case 0: return(<div className="projects-grid">{ReactItems}</div>);
			case 1: return(<div className="projects-grid">{CsItems}</div>);
			case 2: return( <div className="projects-grid">{NodeItems}</div>);
			default: return(<div className="projects-grid"><h1>Nothing to show :(</h1></div>)
		}
	}

	return (
		<div className="category-tabs">
			<Tabs activeTab = {activeTab} onChange={(tabId)=>setActiveTab(tabId)} ripple>
				<Tab>React</Tab>
				<Tab>C#</Tab>
				<Tab>NodeJS</Tab>
			</Tabs>

			<Grid className="wrap" >         
			<Cell col={12} >   
				<div className="content">
					{toggleCategories()}
				</div>
			</Cell>
			</Grid>
		</div>
	)
}

export default Projects;