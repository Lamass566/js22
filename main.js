const books = [
    { 
      author: "Люсі Фолі",
      name: "Список запрошених",
      price: 70 
    }, 
    {
     author: "Сюзанна Кларк",
     name: "Джонатан Стрейндж і м-р Норрелл",
    }, 
    { 
      name: "Дизайн. Книга для недизайнерів.",
      price: 70
    }, 
    { 
      author: "Алан Мур",
      name: "Неономікон",
      price: 70
    }, 
    {
     author: "Террі Пратчетт",
     name: "Рухомі картинки",
     price: 40
    },
    {
     author: "Анґус Гайленд",
     name: "Коти в мистецтві",
    }
  ];

function BooksList(arr) {
    let ul = document.createElement('ul');
    arr.forEach(elems => {
      let li = document.createElement('li');
      li.textContent = `author: ${elems.author}; name: ${elems.name}; price: ${elems.price}`;
      try {
        if (elems.author && elems.name && elems.price)
        {
          ul.append(li);
        }
        else
        {
          throw new Error(`Отсутствует свойство: ${!elems.author ? 'author' : !elems.name ? 'name' : 'price'} у ${elems.name}`);
        }
      } catch (e) {
        console.log(e.message);
      }
    });
    return ul;
  }

  let booksElems = BooksList(books);
  document.getElementById('root').append(booksElems);