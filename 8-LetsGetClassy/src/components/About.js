// import User from './User'
// import UserClass from './UserClass'

// const About = () => {
//   return (
//     <div className="about">
//       <h1>About Us</h1>
//       <p>
//         Welcome to our restaurant! We are dedicated to providing you with the
//         best dining experience. Our chefs use only the freshest ingredients to
//         create delicious dishes that will tantalize your taste buds.
//       </p>
//       <p>
//         Whether you're here for a casual meal or a special occasion, we strive to
//         make every visit memorable. Thank you for choosing us!
//       </p>
//       {/* <User
//         name={"Gaurav Upadhyay(F)"}
//         location={"Banaras, India"}
//         contact={"x/@gaurv25_"}
//         email={"gaurav.upadhyay.vasudeva@gmail.com"}
//       /> */}
//       <UserClass
//         name={"Gaurav Upadhyay(C)"}
//         location={"Delhi, India"}
//         contact={"r/Poi5eN"}
//         email={"poi5en.here@gmail.com"}
//       />
//     </div>
//   );
// }


// export default About;


// import React from 'react';
// Destructured Component in CLass
import {Component} from 'react';
// import User from './User'
import UserClass from './UserClass'

// Destructured Component
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
      // name: json.name,
      // location: json.location,
      // contact: json.login,
      // email: json.email || "No Email Provided"
    })

    console.log(json)

    // This method is called after the component is mounted
    // It is a good place to fetch data or perform side effects
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
      {/* <User
        name={"Gaurav Upadhyay(F)"}
        location={"Banaras, India"}
        contact={"x/@gaurv25_"}
        email={"gaurav.upadhyay.vasudeva@gmail.com"}
      /> */}
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
    </div>
  );
  }
}



/*
- Parent Contructor called
- Parent render

  - First Contructor
  - First Render

  - Second Contructor
  - Second Render

  <DOM UPDATED IN SINGLE BATCH>

  - First Component Did Mount
  - Second Component Did Mount

- Parent Component Did Mount

*/

export default About;