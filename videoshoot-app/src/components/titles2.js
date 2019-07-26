import React from "react";

class Titles extends React.Component {
    state={}
    async componentDidMount () {
      
        const api_call = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=Q72v2rvpG6ROSil2PVyv73DvKqfk6eSO&tag=&rating=G`);
        const response = await api_call.json();    
        this.setState({img:response})
          }

    render() {
        
        if(!this.state.img)return <h1>Loading...</h1>
        console.log (this.state.img.data.embed_url)
        return ( 
            

            <div>
                {/* <img src= {this.state.img.data.embed_url}></img> */}
                <h1 className="title-container__title">FORECAST CHECK </h1>
                <p className="title-container__subtitle"> Find your forecast for more than one day of shooting! </p>
            </div>
        )
    }
}

export default Titles;
