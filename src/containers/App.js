import React, { Component } from 'react'
import uuid from 'uuid'
import moment from "moment"

import CommentsList from '../components/commentList'
import NewComment from '../components/newComment'
import Panel from './panel'
import styles from '../App.css'

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [{
          id: uuid.v4(),
          text: 'Hello Dear',
          name: 'Mike Ross',
          imageUrl: '/photo.jpg',
          time: moment("1995-12-25")
        },{
          id: uuid.v4(),
          text: 'Oh hay',
          name: 'Rachel Zein',
          imageUrl: '/photo.jpg',
          time: moment("2017-09-30")
        }, {
          id: uuid.v4(),
          text: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis.',
          name: 'Louis Litt',
          imageUrl: '/photo.jpg',
          time: moment("2017-10-01")
        }, {
          id: uuid.v4(),
          text: 'Oh thank you m8s!',
          name: 'Harvey Specter',
          imageUrl: '/photo.jpg',
          time: moment("2017-10-02")
      }]
    }

    this.addComment = this.addComment.bind(this);
  }


  addComment(val) {
    const newComment = {
      text: val,
      id: uuid.v4(),
      name: 'Mike Ross',
      imageUrl: '/photo.jpg',
      time: moment()
    };
    const data = [...this.state.data, newComment];
    this.setState({data});
  }
  render() {
    return (
      <div className="AppContainer">
      	<Panel />
        <CommentsList data={this.state.data} />
        <NewComment add={this.addComment} />
      </div>
    );
  }
}

export default App;
