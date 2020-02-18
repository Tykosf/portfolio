import React from 'react'
import { Card, CardText, CardTitle, CardActions, Button } from 'react-mdl'
import './card.scss'

function MyCard({ title, imgUrl, text, color, disabled, viewCodeUrl, demo }) {

  const cardtitle_styles = {
    color: color || "white",
    background: `url(${imgUrl}) center / cover `
  }
  
  return (
    <Card className="card" shadow={5} style={{minWidth: "450",margin: "auto"}}>
      <CardTitle style={cardtitle_styles}>{title}</CardTitle>
      <CardText style = {{color: 'black',borderBottom: '1px solid gray'}} >{text}</CardText>
      <CardActions>
          <Button 
            onClick={()=>window.open(viewCodeUrl,"_blank")} 
            disabled={disabled || false} 
            colored
          >
            View Code
          </Button>
          <Button 
            onClick={()=>window.open(demo,"_blank")} 
            disabled={disabled || false} 
            style={{marginLeft: "110px"}}
            colored
          > 
            Demo
          </Button>
      </CardActions>
    </Card>
  )
}

export default MyCard
