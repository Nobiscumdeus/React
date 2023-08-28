import React , {Component} from 'react'

export default class LikesCount extends Component
{
    constructor(props)
    {
        super(props)

        this.state={
            likes:0,
        }
    }

    handleCilck=()=>{
        this.setState({
            likes:this.state.count+1
        })
    }
    render()
    {
        return(
            <div>
                {this.state.likes}
                <button onClick={this.handleClick}> Add Likes </button>
            </div>
        )
    }
}

class Comments extends Component
{
    constructor(props)
    {
        super(props)

        this.state={
            likes:0,
        }
    }

    handleCilck=()=>{
        this.setState({
            likes:this.state.count+1
        })
    }
    render()
    {
        return(
            <div>
                {this.state.likes}
                <button onClick={this.handleClick}> Total Comments </button>
            </div>
        )
    }
}


