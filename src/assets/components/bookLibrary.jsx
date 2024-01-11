import { Component } from 'react'
import { toast } from 'react-toastify'

class BookLibrary extends Component {
  state = {
    newBook: '',
    newBookDescription: '',
    writerName: '',
    books: [],
  }

  onNewBookNameChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleAddBook = () => {
    const { newBook, newBookDescription, books, writerName } = this.state
    if (!newBook && !newBookDescription) {
      toast('Please fill out all fields', { type: 'error' })
      return
    }

    if (!newBook) {
      toast('Please enter a book title')
      return
    }

    if (!newBookDescription) {
      toast('Please provide a description for the book')
      return
    }

    if (newBook && newBookDescription) {
      const book = {
        id: Date.now(),
        bookTitle: newBook,
        description: newBookDescription,
        writerName: writerName,
      }
      this.setState({
        books: [book, ...books],
        newBook: '',
        newBookDescription: '',
        writerName: '',
      })
    }
    console.log(this.state)
  }

  handleDeleteBook = (index) => {
    const { books } = this.state
    const newBooks = [...books]
    newBooks.splice(index, 1)
    this.setState({ books: newBooks })
  }
  render() {
    const { newBook, newBookDescription, books, writerName } = this.state
    return (
      <div className='mainFormContainer'>
        <h1>Book Library</h1>
        <b>Book Name :</b>
        <input
          type='text'
          name='newBook'
          value={newBook}
          placeholder='Enter book name'
          onChange={this.onNewBookNameChange}
        />
        <div className='writerName'>
          <b>Writer Name :</b>
          <input
            type='text'
            name='writerName'
            value={writerName}
            placeholder='Enter writers name'
            onChange={this.onNewBookNameChange}
          />
        </div>
        <b>Book Description :</b>
        <textarea
          name='newBookDescription'
          rows='4'
          cols='50'
          value={newBookDescription}
          onChange={this.onNewBookNameChange}
          placeholder='Enter book description'
        />
        <button onClick={this.handleAddBook}>Add a book!</button>
        <ul>
          {books.map((item, index) => (
            <div className='listContainer' key={index}>
              <div className='bookName'>
                <b>Book Name</b> {item.bookTitle}
              </div>
              <div className='bookDescription'>
                <b>Book Description</b>
                {item.description}
              </div>
              <div className='writerName'>
                <b>Writer Name</b>
                {item.writerName}
              </div>
              <button
                className='delete'
                onClick={() => this.handleDeleteBook(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      </div>
    )
  }
}

export default BookLibrary
