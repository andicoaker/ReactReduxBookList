export function selectBook(book) {
  // console.log('Yay, you selected a book!', book.title);

  // selectBookis an ActionCreator, if needs to return an action, an object that always has a type property and sometimes a payload.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
