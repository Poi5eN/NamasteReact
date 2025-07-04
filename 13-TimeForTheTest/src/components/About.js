import {Component} from 'react';
import UserClass from './UserClass'
import UserContext from '../contexts/UserContext';

class About extends Component{

  constructor(props){
      super(props)

      this.state ={
        userInfo: {
          name:"Default Name",
          location:"Default Location",
          contact:"Default Contact",
          email:"Default Email"
        },
      }

        console.log("Parent Constructor called");
      
    }

  async componentDidMount() {

    const data = await fetch("https://api.github.com/users/Poi5eN")

    const json = await data.json()

     this.setState({
      userInfo: json,
    })

    console.log(json)
    console.log("About Component Did Mounted");
  }


  componentDidUpdate(){
    console.log("Parent Component Updated");
  }


  componentWillUnmount(){
    console.log("Parent Component Will Unmount");
  }

  render(){
    console.log("Parent Render called");

    const {name, location, contact, email} = this.state.userInfo;

  return (
    <div className="about">
      <h1>About Us</h1>
      <p>
        Welcome to our restaurant! We are dedicated to providing you with the
        best dining experience. Our chefs use only the freshest ingredients to
        create delicious dishes that will tantalize your taste buds.
      </p>
      <p>
        Whether you're here for a casual meal or a special occasion, we strive to
        make every visit memorable. Thank you for choosing us!
      </p>
      <UserClass
        name={name}
        location={location}
        contact={"r/Poi5eN"}
        email={"poi5en.here@gmail.com"}
      />
      <UserClass
        name={"Elon Musk"}
        location={"Texas, USA"}
        contact={"r/elonmusk"}
        email={"tesla@gmail.com"}
      />
      <div>
        LoggedIn User: 
        <UserContext.Consumer>
          {({loggedInUser})=> (
            <h1 className='text-grey font-bold text-xl'>{loggedInUser}</h1>
          )}
        </UserContext.Consumer>
      </div>
    </div>
  );
  }
}
export default About;