import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookDetail extends Component {

  // when app first starts if nothing is selected it will go to our default wich is set to null in the reducer_active_book file, which throws an error. to avoid this, we need to set a defaul statement to render using the if statement below.

  render (){

    if (!this.props.book){
      return <div>Select a book to get started.</div>;
    }

    return(
      <div>
        <h3>Details for: </h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );

  }

}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
