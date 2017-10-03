import React, { Component } from 'react'
import uuid from 'uuid'
import moment from "moment"

import CommentsList from '../components/commentList'
import Heart from '../components/heart';
import Mark from '../components/mark';
import NewComment from '../components/newComment'
import styles from '../App.css'

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [{
          id: uuid.v4(),
          text: 'Hello Dear',
          name: 'Mike Ross',
          imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb.jpg',
          time: moment("1995-12-25")
        },{
          id: uuid.v4(),
          text: 'Oh hay',
          name: 'Rachel Zein',
          imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb.jpg',
          time: moment("2017-09-30")
        }, {
          id: uuid.v4(),
          text: 'Nice profile dude',
          name: 'Louis Litt',
          imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb.jpg',
          time: moment("2017-10-01")
        }, {
          id: uuid.v4(),
          text: 'Oh thank you m8s!',
          name: 'Harvey Specter',
          imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb.jpg',
          time: moment("2017-10-02")
      }],
      likes: {
        quantity: 122,
        text: "Likes"
      },
      following: {
        quantity: 753,
        text: "Following"
      },
      followers: {
        quantity: 4433,
        text: "Followers"
      },
    }
    this.addComment = this.addComment.bind(this);
    this.like = this.like.bind(this);
  }

  like(value) {
    let likes = this.state.likes;

    value ? likes.quantity++ : likes.quantity--;
    this.setState({likes});
  }

  addComment(val) {
    const newComment = {
      text: val,
      id: uuid.v4(),
      name: 'Harvey Specter',
      imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb.jpg',
      time: moment()
    };
    const data = [...this.state.data, newComment];
    this.setState({data});
  }
  render() {
    return (
      <div className="AppContainer">
        <Heart like={ this.like } />     
        <Mark option={ this.state.likes }/>
        <Mark option={ this.state.following }/>
        <Mark option={ this.state.followers }/>
        <CommentsList data={this.state.data} />
        <NewComment add={this.addComment} />
      </div>
    );
  }
}

export default App;
