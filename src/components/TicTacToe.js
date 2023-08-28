import React, {useState} from 'react'



function Square({value,onSquareClick}) 
//Please note that the onSquareClick is a function passed as prop from the Board Component 
//When the button is clicked, the onSquareClick function does something .
//The Square is to display the value passed into it.
{
     
    return (
        <button className="square" onClick={onSquareClick}> {value} </button>
    )
}
//LoGIC 1: Create a Baard to create the various buttons and numbers
//....This is achieved with the Square component 
//....The Square component also has arguments passed in to display differing value  
//...controlled f=by the function onSquareClick 

function Board()
{
    //LOGIC : We need to check the next player identity , is it X or O ?
    const [xisNext, setxisNext] = useState(true); 
    //LOGIC: We set the initial values of our buttons to null or nothing .
    const [squares,setSquares]=useState(Array(9).fill(null))
   

  
    function handleClick(i)
    {
        //LOGIC 1: "i" here means that we are sending n index to handleClick from Square component eg 1
        
    
        if(squares[i] || Winner(squares)){
            return
        }
        const nextSquares = squares.slice(); 
        //This method creates a copy of the squares array initially created 
        //We utilize the logix xisnext to be switching between the two users
        if(xisNext)
        {
            nextSquares[i] ="X" 
            setxisNext(!xisNext) 
            //The initial true condition now changes to false  so we can update  the next player e.g., "O"

        }
        else
        {
            nextSquares[i]="O"
        }
       
        setSquares(nextSquares)
        setxisNext(!xisNext);

    }
    const winner=Winner(squares)
    let status
    if(winner)
    {
        status="Winner is : " + winner 
        //Don't forget the Winner function was to return either X or O 
    }
    else
    {
        status="Next Player is : " + (xisNext ? "X":"O") 
        //Let play continue if there is no winner 
    }
    //This state will help us switch between our users in the handleClick Function 
    //We create an array in the parent component here that can set the states of the squares automatically
   //This fills the arrays with null value at first 

    return (
        <>
        <h4>TicTacToe Game </h4>
        <p> <b> Status of the Game </b> <br/> {status} </p>
            <div className="board-row">
                {/* Please remember each square is returning a value passed as prop from here 
                In that case, lets store each values of the square to the values of the sqares array in the Board component 

                */}
                 {/* It takes the first value of the squares array */}  
                <Square value={squares[0]} onSquareClick={()=>handleClick(0)} /> {/* We are connecting the onSquareClick prop to a handleClick function to manage the states of our Square Component */}  
                <Square value={squares[1]} onSquareClick={()=>handleClick(1) } />
                <Square value={squares[2]} onSquareClick={()=>handleClick(2) }/>
            </div>
             {/*What do you think the initial values are, of course its null ...*/}  
              <div className="board-row">
              <Square value={squares[3]} onSquareClick={()=>handleClick(3) } /> {/* Note that is being passed into handle click is like an array index */}
              <Square value={squares[4]} onSquareClick={()=>handleClick(4) }/>
              <Square value={squares[5]} onSquareClick={()=>handleClick(5) }/>
            </div>
            {/* remember also that 9 values are created in the array, each square component takes one of them */}
              <div className="board-row">
              <Square value={squares[6]} onSquareClick={()=>handleClick(6) }/>
              <Square value={squares[7]} onSquareClick={()=>handleClick(7) }/>
              <Square value={squares[8]} onSquareClick={()=>handleClick(8) }/> 
            </div>
        </>
    )
}


function Winner(squares)
{
    const lines=[
       [0,1,2], //horizontal win 
       [3,4,5], //horizontal win
       [6,7,8], //horizontal win
       [0,3,6], //vertival win
       [1,4,7], //vertical win
       [2,5,8], //vertical win
       [0,4,8], //Diagonal win
       [2,4,6] //Diagonal win

    ];
    for (let i=0; i<lines.length;i++)
    {
        const [a,b,c]=lines[i] //destructuring the 3 values into a,b and c e.g [0,1,2]
        //The goal below is to check is 'X' or 'O', is found at the points 
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        {
            return squares[a]
        }


    }
    return null
}




export default Board 