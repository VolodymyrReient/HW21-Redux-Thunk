import {React, Component} from "react";
import { connect } from 'react-redux';

import CreateUsers from "../../redux/actions/CreateUsers";
import "./add_user.css"

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            nickname: "@",
            image: "",
            message: ""
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);    
        this.takeVal = this.takeVal.bind(this);    
    }
    takeVal() {
        if (this.state.name !== "" && this.state.nicknamee  !== "" && this.state.image !=="" ) {
            return (this.props.CreateUsers({
                name: this.state.name,
                nickname: this.state.nickname,
                image: this.state.image
            }), this.setState({
                name: "",
                nickname: "",
                image: ""
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
                   <input value={this.state.nickname} type="text" placeholder="Enter a nickname" name="nickname"
                onChange={this.onChangeHandler}/>
                      <input value={this.state.image} type="text" placeholder="Enter a avatar" name="image"
                onChange={this.onChangeHandler}/>
                <button onClick={this.takeVal}>Submit</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    CreateUsers: (users) => dispatch(CreateUsers(users)),
  })


export default connect(null, mapDispatchToProps)(AddUser);;
