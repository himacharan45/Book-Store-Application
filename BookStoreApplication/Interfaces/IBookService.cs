using BookStoreApplication.Models.DTOs;

namespace BookStoreApplication.Interfaces
{
    public interface IBookService
    {
        bool Add(BookDTO bookDTO);
        bool Remove(int id);
        BookDTO Update(BookDTO bookDTO);
        BookDTO GetBookById(int id);
        IEnumerable<BookDTO> GetBookByAuthor(string author);
        IEnumerable<BookDTO> GetAllBooks();
        IEnumerable<BookDTO> GetBookByTitle(string title);
        IEnumerable<BookDTO> GetBooksByGenre(string genre);
       // BookDTO GetBookByAuthor(string author);

    }
}
