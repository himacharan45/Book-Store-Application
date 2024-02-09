﻿using BookStoreApplication.Exceptions;
using BookStoreApplication.Interfaces;
using BookStoreApplication.Models.DTOs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookStoreApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly IBookService _bookService;

        public BookController(IBookService bookService)
        {
            _bookService = bookService;
        }

        [HttpPost]
        public IActionResult AddBook([FromBody] BookDTO bookDTO)
        {
            try
            {
                var success = _bookService.Add(bookDTO);
                if (success)
                    return Ok();
                return StatusCode(500, "Failed to add the book.");
            }
            catch (Exception ex)
            {
                // Log the exception
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet]
        public IActionResult GetAllBooks()
        {
            try
            {
                var books = _bookService.GetAllBooks();
                if (books != null)
                    return Ok(books);
                return NoContent();
            }
            catch (Exception ex)
            {
                // Log the exception
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("{id}")]
        public IActionResult GetBookById(int id)
        {
            try
            {
                var book = _bookService.GetBookById(id);
                if (book != null)
                    return Ok(book);
                return NotFound();
            }
            catch (Exception ex)
            {
                // Log the exception
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("author/{author}")]
        public IActionResult GetBooksByAuthor(string author)
        {
            try
            {
                var books = _bookService.GetBookByAuthor(author);
                if (books != null)
                    return Ok(books);
                return NoContent();
            }
            catch (Exception ex)
            {
                // Log the exception
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("title/{title}")]
        public IActionResult GetBookByTitle(string title)
        {
            try
            {
                var book = _bookService.GetBookByTitle(title);
                if (book != null)
                    return Ok(book);
                return NotFound();
            }
            catch (Exception ex)
            {
                // Log the exception
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpGet("genre/{genre}")]
        public IActionResult GetBooksByGenre(string genre)
        {
            try
            {
                var book = _bookService.GetBooksByGenre(genre);
                if (book != null)
                    return Ok(book);
                return NotFound();
            }
            catch (BookNotFoundException ex)
            {
                // Log the exception
                return NotFound(ex.Message);
            }
            catch (Exception ex)
            {
                // Log the exception
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpPut("{id}")]
        public IActionResult UpdateBook(int id, [FromBody] BookDTO bookDTO)
        {
            try
            {
                if (id != bookDTO.BookId)
                    return BadRequest("Book ID mismatch.");

                var updatedBook = _bookService.Update(bookDTO);
                if (updatedBook != null)
                    return Ok(updatedBook);
                return NotFound();
            }
            catch (Exception ex)
            {
                // Log the exception
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteBook(int id)
        {
            try
            {
                var success = _bookService.Remove(id);
                if (success)
                    return Ok();
                return NotFound();
            }
            catch (Exception ex)
            {
                // Log the exception
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }
    }
}
