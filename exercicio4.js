const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            }
        ]
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            }
        ]
    }
]

function BooksOfAuthor(autor){
    let listAuthorBooks = []
    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === autor){
                listAuthorBooks.push(book.title)
            }
        }
    }
    console.log(listAuthorBooks)
}

BooksOfAuthor("Augusto Cury")