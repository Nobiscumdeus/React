<h1> Chasfat on React JS </h1>
<p>
Showcasing React Applications from the simple to the complex  with in-depth comments, and very good code explanations
</p>
<div>
<p> Application has components folder, the hooks folder and other basic react folders and files such as index.js, index.html etc </p>
<p> A React Router was built to control the Layout of the various apps and links to them </p>

</div>

<div>
    <h3>Components </h3><hr/>
    <dl>
    <dt> Basics </dt>
    <dd>
    This simply uses React in its simple way
     </dd>
    </dl>
    <dl>
    <dt> Profile </dt>
    <dd>
        A simple app that connects to the net, displays a name and image of a person 
     </dd>
    </dl>
     <dl>
    <dt> Todo App </dt>
    <dd>
   A simple TodoApp that utilizes the power of react , its a simple CRUD app
   <br/> It includes TodoAPp.js , TodoItem.js,TodoForm.js,TodoList components
     </dd>
    </dl>
    <dl>
    <dt> Weather  </dt>
    <dd>
   A simple weather application that connects to an API to get simple weather data displayed about  a the city you enter in it.<br/>
   It includes components such as WeatherDisplay.js and WeatherSearchBar.js , and of course from the name you know that they do by the name tag.
     </dd>
    </dl>
    <dl>
    <dt> Crud Form </dt>
    <dd>
    This teaches you how to handle form with React using React hooks and other essential things to know 
     </dd>
    </dl>
    
    
</div>
<div>
<h3> Personal Documentation on React JS </h3>
<hr/>
<p> Made this personal documentation to aid personal understanding of React while learning, and it will also be helpful you too </p>
<table>
    <tr>
        <td> What are the differences ? </td>
    </tr>
    <tr>
            <th>Functional Components </th>
            <th>Class Components </th>
    </tr>
    <tr>
        <td> 
            <p> 1. Absence of 'this' keyword which can be tricky for beginners <br/>
            2. Functional components are stateless(except with use of hooks)/Dumb/Presentational. However from Version 16.7alpha version, Hooks were added in ReactJS which makes us use states in functional components without using the Class Components  <br/>
            3. Relatively simple UI logic <br/>
            4. Does not provide Lifecycle hooks <br/>
            </p>
        </td>
        <td> 
            <p>
                1. More feature rich <br/>
                2. Stateful/Smart/Container <br/>
                3. Has Complex UI logic <br/>
                4. Provides lifecycle hooks eg ComponentDidUpdate,ComponentDidMount etc <br/>
            </p>
        </td>
    </tr>
    <tr>
        <td>
        <h3> JSX </h3>
        <p>
            1. Javascript XML - Extension to the JavaScript language syntax <br/>
            2. XML-like code for elements and components. <br/>
            3. JSX though is not a necessity to write React application <br/>
            4. It makes React code more elegant and simpler <br/>
            5. JSX actually transpiles to pure JavaScript which is understood by the browsers <br/>
            6. JSX uses 'className' instead of 'class'
            7. JSX uses 'htmlFor' instead of 'for'; 'onClick' instead of 'onclick' etc 
        </p>
        <p>
       <h4> React with JSX </h4>
            <code>
            const Hello=()=>{
                return(
                    <div className='ChasfatClass'>
                    <h5> Hello Chasfat </h5>
                    </div>
                )
            }
            </code>
            <h4> React without JSX </h4>
            <code>
                const Hello=()=>{
               return React.createElement('div',{id:'hello',className:'ChasfatClass'},React.createElement('h5',null,'Hello Chasfat'))
            }
            </code>
            So which do you really prefer ?
        </p>
        </td>
    </tr>
    <tr>
    </tr>

</table>
</div>
