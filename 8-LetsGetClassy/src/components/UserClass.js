import React from 'react';

class UserClass extends React.Component {

    constructor(props){
        super(props)
        console.log(props)

        this.state ={
            count : 0,
            count2 : 1
        }

        console.log(this.props.name + " " + "Child Constructor called")
    }

    componentDidMount() {
        // This method is called after the component is mounted
        // It is a good place to fetch data or perform side effects
        console.log(this.props.name + " " + "Child Component Did Mounted")
    }

  render() {
    // Destructuring props in class components
    const { name, location, contact, email } = this.props;
    const { count } = this.state;
    const { count2 } = this.state;

    console.log(this.props.name + " " + "Child Render called")

    // This is the render method, which is called to render the component
    // It should return a single root element
    // If you want to return multiple elements, wrap them in a div or React.Fragment


    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button onClick={() =>{
            // Never update state variables directly
            // this only updates provided state variable i.e. count1, count2, count3, etc.
            this.setState({
                count: this.state.count + 1,
                count2: this.state.count2 + 1
            })
        }}>
            Count Increase
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Email: {email}</h4>
        <h5>Contact: {contact}</h5>

        {/* Before Destructuring props */}
        {/* <h1>Count: {this.state.count}</h1>
        <h2>Name: {this.props.name}</h2>
        <h3>Location: {this.props.location}</h3>
        <h4>Email: {this.props.email}</h4>
        <h5>Contact: {this.props.contact}</h5> */}
      </div>
    );
  }
}
export default UserClass;