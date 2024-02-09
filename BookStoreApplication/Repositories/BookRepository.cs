using BookStoreApplication.Contexts;
using BookStoreApplication.Interfaces;
using BookStoreApplication.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace BookStoreApplication.Repositories
{
    public class BookRepository:IRepository<int,Book> 
    {
        private readonly BookContext _context;
        public BookRepository(BookContext context)
        {
            _context = context;
        }

        public Book Add(Book entity)
        {
            _context.books.Add(entity);
            _context.SaveChanges();
            return entity;
        }

        public Book Delete(int Key)
        {
            var book = GetById(Key);
            if (book != null)
            {
                _context.books.Remove(book);
                _context.SaveChanges();
                return book;
            }
            return null;
        }

        public IList<Book> GetAll()
        {
            if (_context.books.Count() == 0)
                return null;
            return _context.books.ToList();
        }

        public Book GetById(int Key)
        {
            var book = _context.books.SingleOrDefault(u => u.BookId == Key);
            return book;
        }

        public Book Update(Book book)
        {

            _context.books.Update(book);
            _context.SaveChanges();
            return book;
        }
    }
}
