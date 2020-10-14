import React , {useEffect , useRef} from 'react'

const Cockpit = (props) => {
    const buttonRef = useRef(null)

  
    useEffect(() => {
        console.log('UseEffect() Called!')

        buttonRef.current.click()

        return () => {
            console.log('Clean up work in use effect !')
        };
    },[])
    
    return(
        <div>
        <h1>{props.title}</h1>
        <button
            ref={buttonRef}
            style={props.mystyle}
            onClick={props.clicked}>Toggle Me!
        </button>
        </div>

    )

}

export default Cockpit