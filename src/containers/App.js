import React, { Component } from 'react'
import uuid from 'uuid'
import CommentsList from '../components/commentList'
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
          imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb.jpg'
        },{
          id: uuid.v4(),
          text: 'Oh hay',
          name: 'Rachel Zein',
          imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb.jpg'
        }, {
          id: uuid.v4(),
          text: 'Nice profile dude',
          name: 'Louis Litt',
          imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb.jpg'
        }, {
          id: uuid.v4(),
          text: 'Oh thank you m8s!',
          name: 'Harvey Specter',
          imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb.jpg'
      }]
    }
    this.addComment = this.addComment.bind(this);
  }

  addComment(val) {
    const newComment = {
      text: val,
      id: uuid.v4(),
      name: 'Harvey Specter',
      imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb.jpg'
    };
    const data = [...this.state.data, newComment];
    this.setState({data});
  }
  render() {
    return (
      <div className="AppContainer">
        <CommentsList data={this.state.data} />
        <NewComment add={this.addComment} />
      </div>
    );
  }
}

export default App;
