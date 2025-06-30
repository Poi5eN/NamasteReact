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
        console.log(this.props.name + " " + "Child Component Did Mounted")
    }

  render() {
    const { name, location, contact, email } = this.props;
    const { count } = this.state;
    const { count2 } = this.state;

    console.log(this.props.name + " " + "Child Render called")


    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button onClick={() =>{
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
      </div>
    );
  }
}
export default UserClass;