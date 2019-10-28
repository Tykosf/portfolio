import React from 'react'
import { Card, CardText, CardTitle, CardActions, Button } from 'react-mdl';


<<<<<<< HEAD
const MyCard = ({ item }) => {

	const cardtitle_styles = {
		color: item.color || "white",
		height: "175px",
		background: `url(${item.imgUrl}) center / cover `
	}
  
  return (
    <Card className="card" shadow={5} style={{minWidth: "450",margin: "auto"}}>
			<CardTitle style={cardtitle_styles}>{item.title}</CardTitle>
			<CardText style = {{color: 'black',borderBottom: '1px solid gray'}} >{item.text}</CardText>
			<CardActions >
				<Button 
					onClick={()=>window.open(item.viewCodeUrl,"_blank")} 
					disabled={item.disabled || false} 
					colored>View Code</Button>
				<Button 
					onClick={()=>window.open(item.demo,"_blank")} 
					disabled={item.disabled || false} 
					style={{marginLeft: "110px"}}
					colored>
					Demo
				</Button>
			</CardActions>
    </Card>
  )
}

export default MyCard;
=======
function MyCard( { item } ){

    const cardtitle_styles = {
        color: item.color || "white",
        height: "175px",
        background: `url(${item.imgUrl}) center / cover `
    }
  

    return(
    <Card className="card" shadow={5} style={{minWidth: "450",margin: "auto"}}>
        <CardTitle style={cardtitle_styles}
        >{item.title}</CardTitle>
        <CardText style = {{color: 'black',borderBottom: '1px solid gray'}} >{item.text}</CardText>
        <CardActions >
            <Button 
                onClick={()=>window.open(item.viewCodeUrl,"_blank")} 
                disabled={item.disabled || false} 
                colored>View Code</Button>
            <Button 
                onClick={()=>window.open(item.demo,"_blank")} 
                disabled={item.disabled || false} 
                style={{marginLeft: "110px"}}
            colored>Demo</Button>
        </CardActions>
    </Card>
    )
}

export default MyCard
>>>>>>> bdbf8632d6e35eb9669e112c2da24779e530a831
