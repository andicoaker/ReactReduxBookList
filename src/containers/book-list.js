import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

// container - a "smart" react component that has a direct connection to the state managed by redux. Typically a container is the most parent component that cares about a particular piece of state. Ex- BookList cares about the list of books.

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      // when user clicks on book it calls the action creator
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }

}

function mapStateToProps (state) {

  // what ever is returned will show up as props inside of BookList container above. if state ever changes, then BookList will automatically re-render.
  return {
    books: state.books
  };
}

// anything returned from function below will end up as props on the BookList container
function mapDispatchToProps(dispatch){

  // when ever selectBook is called, the result should be passed to all of our reducers in reducer_books
  return bindActionCreators({ selectBook: selectBook}, dispatch);
}


// connecting the redux store to react.
// added mapDispatchToProps to connect so that it knows about the new dispatch method we created called selectBook. This makes it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
