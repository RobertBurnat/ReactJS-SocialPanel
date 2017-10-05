import React, { Component } from 'react'
import Mark from '../components/mark'
import Heart from '../components/heart'
import Follow from '../components/follow'
import styles from '../App.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {
        likes: {
        quantity: 121,
        text: "Likes"
      },
      following: {
        quantity: 723,
        text: "Following"
      },
      followers: {
        quantity: 4433,
        text: "Followers"
      		},
    	}

   	this.like = this.like.bind(this);
    this.follow = this.follow.bind(this);
	}

	like(value) {
    let likes = this.state.likes;

    value ? likes.quantity++ : likes.quantity--;
    this.setState({likes});
  }

  follow(number) {
  	let followers = this.state.followers

  	number ? followers.quantity++ : followers.quantity--;
  	this.setState({followers});
  }

    render() {
        return (
          <div className="panel-container">
                <div className="row">
                  <div className="col-xs-12">
                    <div className="person-info">
                      <img src="https://i.imgur.com/FTDAeUL.jpg" className="panel-photo" alt="photo" />
                      <h4 className="namePerson">Harvey Specter
                      <Heart like={ this.like } /></h4>
                      <p className="from">New York, USA</p>
                      <p class="fill">Secret</p>
                    </div>
                  </div>
                </div>
                    <div className="marks-container">
                        <div className="row responsive-row">
                          <div className="col-xs-4 col-md-3 mark-yes">
                				<Mark option={ this.state.likes }/>
                          </div>
                          <div className="col-xs-4 col-md-3 mark-yes">
                        		<Mark option={ this.state.following }/>
                          </div>
                          <div className="col-xs-4 col-md-3 mark-none">
                       			<Mark option={ this.state.followers }/>
                          </div>
                          <div className="col-xs-12 col-md-3 responsive-button">
                            <Follow follow={this.follow} />
                          </div>
                        </div>
                    </div>
			     </div>
        )
    }
}

export default Panel;