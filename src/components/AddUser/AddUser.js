import {React, Component} from "react";
import { connect } from 'react-redux';

import setUser from "../../redux/actions/CreateUsers";
import "./add_user.css"


class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
             name: "",
            username: "@",
            avatar: "",
            message: ""
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);    
        this.takeVal = this.takeVal.bind(this);    
    }
    takeVal() {
        if (this.state.name !== "" && this.state.username  !== "" && this.state.avatar !=="" ) {
            return (this.props.CreateUsers({
                data: [{
                    name: this.state.name,
                    nickname: this.state.username,
                    image: this.state.avatar
                }]
            }), this.setState({
                name: "",
                username: "",
                avatar: ""
            }))
        } else {
            return this.setState({message: "Enter the message"})
        }
    }

    onChangeHandler(e) {  
        this.setState({  
          [e.target.name]: e.target.value  
        });  
      }

    render() {
        return (
            <div className="wrapper">
            <div className="message">{this.state.message}</div>
                <input value={this.state.name} type="text" placeholder="Enter a name" name="name"
                onChange={this.onChangeHandler}/>
                   <input value={this.state.username} type="text" placeholder="Enter a username" name="username"
                onChange={this.onChangeHandler}/>
                      <input value={this.state.avatar} type="text" placeholder="Enter a avatar" name="avatar"
                onChange={this.onChangeHandler}/>
                <button onClick={this.takeVal}>Submit</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    CreateUsers: (users) => dispatch(setUser(users)),
  })


export default connect(null, mapDispatchToProps)(AddUser);;
