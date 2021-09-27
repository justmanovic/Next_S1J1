const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];
// ------------------------------------------------------------------------------------------------------------------------------------

// Sors-moi la liste des titres des livres du CDI

let listBooksTitle = (books_arr) => {
  let arr = []
  for (let book of books) {
    arr.push(book.title)
  }
  return arr
}

// console.log(listBooksTitle(books))

// ------------------------------------------------------------------------------------------------------------------------------------

// Est-ce que tous les livres ont été empruntés au moins une fois ?

let atLeastOneTime = books_arr => books_arr.some(book => book['rented'] === 0) ? "Au moins un livre n'a pas été emprunté" : "Tous les livres ont été empruntés au moins une fois"

// console.log(atLeastOneTime(books))

// ------------------------------------------------------------------------------------------------------------------------------------

// Quel est le livre le plus emprunté ?

let maxRented = books_arr => {
  let arr = []
  for (let book of books) {
    arr.push(book.rented)
  }

  return books_arr.filter(book => book.rented === Math.max(...arr))
}


let maxRentedSort = books_arr => books_arr.sort((a, b) => a.rented - b.rented)[books_arr.length - 1]

// console.log(`Le livre le plus emprunté est ${maxRented(books)[0].title} (${maxRented(books)[0].rented} fois)`)

// ------------------------------------------------------------------------------------------------------------------------------------

// Quel est le livre le moins emprunté ?

let minRented = books_arr => {
  let arr = []
  for (let book of books) {
    arr.push(book.rented)
  }

  return books_arr.filter(book => book.rented === Math.min(...arr))
}
// console.log(`Le livre le moins emprunté est ${minRented(books)[0].title} (${minRented(books)[0].rented} fois)`)


let minRentedSort = books_arr => books_arr.sort((a, b) => a.rented - b.rented)[0]
// console.log(`Le livre le moins emprunté est ${minRentedSort(books).title} (${minRentedSort(books).rented} fois)`)


// ------------------------------------------------------------------------------------------------------------------------------------

// Supprime le livre avec l'ID 133712

let deleteSpecificId = (books_arr, bookId) => {
  let arr = []
  for (let book of books) {
    arr.push(book.id)
  }
  index = arr.indexOf(bookId)

  return books_arr.splice(index, 1)
}

let deleteSpecificId2 = (books_arr, bookId) => {
  index = books_arr.indexOf(books_arr.filter(book => book.id === bookId)[0])
  return books_arr.splice(index, 1)
}


deleteSpecificId2(books, 133712)
console.log("Après supression du livre dont l'ID est 8376365...")
console.log(books)