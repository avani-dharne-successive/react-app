import React, { Component } from 'react';
import './App.css';
import Validation from '../UserIO/Validation'
import UserOutput from '../UserIO/UserOutput'
import Person from '../Components/Persons/Person/Person'
import UserInput from '../UserIO/UserInput';
import Char from '../UserIO/Char';
import Persons from '../Components/Persons/Persons'
import Cockpit from '../Components/Cockpit/cockpit';



class App extends Component {


    state = {
        persons: [
            {
                name: "Avani", age: "26", id: "1"
            }, {
                name: "Atul", age: "56", id: "2"
            }, {
                name: "Aadit", age: "16", id: "3"
            }, {

                name: "XYZ", age: "100", id: "4"

            }

        ],
        otherState: 'Other',
        showCockpit: true
    }

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {
                    name: newName, age: "26", id: "1"
                }, {
                    name: "Atul", age: "56", id: "2"
                }, {
                    name: "Aadit", age: "16", id: "3"
                }, {

                    name: "XYZ", age: "100", id: "4"

                }

            ],

        })

        //console.log(this.state)
    }


    nameChangeHandler = (event, id) => {
        const currentPerson = this.state.persons.findIndex(p => {
            return p.id === id
        })



        let persons = [...this.state.persons]
        console.log
        persons[currentPerson].name = event.target.value;

        this.setState({
            persons
        })

        // const personIndex = this.state.persons.findIndex(p => {
        //     return p.id === id;
        //   })

        //   const persons = [
        //     ...
        //     this.state.persons
        //   ]

        //   persons[personIndex].name = event.target.value;

        //   this.setState({
        //     persons: persons

        //   })

        // this.setState({
        //     persons: [
        //         {
        //             name: "Avani", age: "26", id : "1"
        //         }, {
        //             name: event.target.value, age: "56", id : "2"
        //         }, {
        //             name: "Aadit", age: "16", id : "3"
        //         }, {

        //             name: "US", age: "26", id : "4"

        //         }

        //     ],
        //     showPersons: false

        // })

    }

    deletePersonHandler = (index) => {
        let newStatePersons = [...this.state.persons];
        newStatePersons.splice(index, 1)
        console.log(newStatePersons)
        this.setState({
            persons: newStatePersons
        })


    }


    togglePersonsHandler = () => {
        const toggle = this.state.showPersons

        this.setState({
            showPersons: !toggle
        })

    }



    render() {

        const style = {
            font: 'inherit',
            backgroundColor: 'white',
            border: '1px solid #black',
            padding: '10px',
            marginTop: '10px',
            cursor: 'pointer'

        }

        let persons = null;

        if (this.state.showPersons) {

            persons = (
                <div >
                    <Persons
                        persons={this.state.persons}
                        changed={this.nameChangeHandler}
                        clicked={this.deletePersonHandler}>
                    </Persons>
                    {/* {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangeHandler(event, person.id)} />
                    })} */}
                    {/* <Person click={() => this.switchNameHandler("Avani")} name={this.state.persons[0].name} age={this.state.persons[0].age} />
                    <Person changed={this.nameChangeHandler} name={this.state.persons[1].name} age={this.state.persons[1].age}>Iam Motu OP</Person>
                    <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
                    <Person name={this.state.persons[3].name} age={this.state.persons[3].age} /> */}
                </div>
            )
        }

        return (

            <div className="App">
                <button onClick={() => this.setState({ showCockpit: false })}>Remove Cockpit</button>
                {this.state.showCockpit ? 
                    <Cockpit title={this.props.appTitle} clicked={this.togglePersonsHandler} mystyle={style}></Cockpit>
                : null}
                {persons}


            </div>
        );

    }

}


class App1 extends Component {

    state = {
        userName: [
            'Avani'
        ]
    }

    stateChangeHandler = (event) => {
        this.setState({
            userName: [
                event.target.value

            ]
        })
    }

    render() {
        return (
            <div>
                <UserInput changed={this.stateChangeHandler} userName={this.state.userName[0]}></UserInput>
                <UserOutput userName={this.state.userName[0]}></UserOutput>


            </div>
        )
    }

}


// class App extends Component {

//     state = {
//         userInput : ''
//     }

//     textChangeHandler = (event) => {
//         this.setState({
//             userInput : event.target.value
//         })

//     }

//     deleteCharHandler = (index) => {

//         let input = this.state.userInput.slice()
//         console.log(index , input)
//         let inputArr = input.split('');
//         inputArr.splice(index , 1)
//        // input = input.split('').splice(index  , 1)
//      //   let newInput = input.splice(index , 1)

//         this.setState({
//             userInput : inputArr.join('')
//         })

//         console.log(this.state)

//     }



//     render(){

//         let chars = null;

//         chars = (

//             <div>
//               {this.state.userInput.split('').map((c , index) => {
//                 return <Char charVal={c} clicked={() => this.deleteCharHandler(index)}/>
//               })}

//             </div>
//           );

//         return(
//             <div className="App">
//                 <input type="text" onChange={this.textChangeHandler} value={this.state.userInput}/>
//                 <p>Input length is : {this.state.userInput.length} </p>
//                 <Validation len={this.state.userInput.length} />

//                 {chars}
//             </div>

//         )

//     }
// }

export default App

//return React.createElement('div' , {className : 'App'} , React.createElement('h1' , null , 'This is a text node!'))
