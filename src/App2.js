import React, { useState, Component } from 'react';
import './App.css';
import Person from './Persons/Person/Person';
import UserOutput from './UserIO/UserOutput';
import UserInput from './UserIO/UserInput';
import person from './Persons/Person/Person';


class App extends Component {

  state = {
    persons: [
      { id: '1', name: 'Avani', age: 26 },
      { id: '2', name: 'Aadit', age: 16 },
      { id: '3', name: 'Atul', age: 56 }
    ]

  }

  switchNameHandler = (newName) => {

    this.setState({
      persons: [
        { name: newName, age: 26 },
        { name: 'Aadit', age: 66 },
        { name: 'Atul', age: 56 }
      ]

    })

  }


  changeNameHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const persons = [
      ...
      this.state.persons
    ]

    persons[personIndex].name = event.target.value;

    this.setState({
      persons: persons

    })

  }


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    this.setState({
      showPersons: !doesShow
    })

  }

  deletePersonHandler = (index) => {
    const persons = this.state.persons.slice();
    persons.splice(index, 1)
    this.setState({ persons: persons })

  }

  //return React.createElement('div' , {className : 'App'} , React.createElement('h1' , null , 'Does this work??'))
  render() {

    const style = {
      cursor: 'pointer',
      backgroundColor: 'white',
      font: 'inherit',
      padding: '8px',
      border: '1px solid grey'

    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (

        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.changeNameHandler(event, person.id)}
              click={() => this.deletePersonHandler(index)} />
          })}

        </div>

      );

    }


    return (
      <div className="App">
        <h1>Hello!</h1>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {/* { this.state.showPersons ?  */}
        {persons}
        {/* : null */}
        {/* } */}
      </div>

    );
  }

}

// const App = () => {

//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: 'Avani', age: 26 },
//       { name: 'Aadit', age: 16 }
//     ]

//   })

//   const switchNameHandler = () => {

//     setPersonsState({
//       persons: [
//         { name: 'Avani Dharne', age: 26 },
//         { name: 'Aadit', age: 66 }
//       ]

//     })

//   }

//   //return React.createElement('div' , {className : 'App'} , React.createElement('h1' , null , 'Does this work??'))
//   return (
//     <div className="App">
//       <h1>Hello!</h1>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}  >Iam Motu OP!!</Person>
//     </div>
//   );

// }


export default App;



// class App extends Component {

//   state = {
//     userNames : [ 'Avani','Aadit','Atul']

//   }

//   inputChangedHandler = (event) => {
//     this.setState({
//       userNames : [event.target.value , event.target.value , event.target.value ]
//     })


//   }


//    render(){

//     return(
//       <div className="App">
//          <UserInput changed={this.inputChangedHandler}></UserInput>
//          <UserOutput name={this.state.userNames[0]}></UserOutput>
//          <UserOutput name={this.state.userNames[1]}></UserOutput>
//          <UserOutput name={this.state.userNames[2]}></UserOutput>

//       </div>



//      );
//    }

// }
