import React, { Component } from 'react'
import quoteList from "./quoteList"
import twitter from './twit-pic.png'




let quoteNumber = 0;

class QuoteMachine extends Component{
    constructor(props){
        super(props)
        
        this.state={
            quote: quoteList[quoteNumber].quote,
            author: quoteList[quoteNumber].author
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(){
        quoteNumber = Math.floor(Math.random() * 24)
        
        this.setState({
                quote: quoteList[quoteNumber].quote,
                author: quoteList[quoteNumber].author
            });
            
            

        
    }
    render(){
        
        return(
            <div id='quote-box'> 
                <h3 id='text'>"{this.state.quote}"</h3>
                <h3 id='author'>- {this.state.author}</h3>
                <button id="new-quote" onClick={this.handleClick}><span>New Quote</span></button><br/>
                
                    <a  id="tweet-quote"
                         href={"https://twitter.com/intent/tweet?text="+this.state.quote + " -" +this.state.author} target="blank">
                        <img src={twitter} alt="tweet" />
                    </a>
                    
                
             
            </div>
        )
    }
}

export default QuoteMachine