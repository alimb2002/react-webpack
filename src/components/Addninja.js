import React , { Component } from 'react';
import { ButtonToolbar,Button } from 'react-bootstrap';

class Addninja extends Component {
    state = {
        name : null,
        age : null,
        belt : null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNinja(this.state);
    }
    render(){
        return (
            <div>
               <form onSubmit = { this.handleSubmit } >
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter name" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age:</label>
                        <input type="text" className="form-control" id="age" placeholder="Enter age" onChange={this.handleChange}  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="belt">Belt:</label>
                        <input type="text" className="form-control" id="belt" placeholder="Enter Belt" onChange={this.handleChange}  />
                    </div>
                    <Button type="submit" variant="secondary">Submit</Button>
                </form>
            </div>
        )
    }
}

export default Addninja;