// fetch
//api.fulfil.uz/users => []
//API - Application programming language

//REST API - so'rovga javob JSON qaytarilishi (response JSON)

// request - so'rov
// recponse - javob

//Promise bajarilganidan keyin then ishlaydi

fetch(`https://jsonplaceholder.typicode.com/users`)
  .then((response) => {
    response.json().then((users) => {
      console.log(users);
    });
  })
  .catch((reason) => {
    console.log(reason);
  }); //returns Promise
//.finally() - shart emas;

//zanjir
//users.filter().map().sort().find();

//Vazifa
//pagination struktura
// 1. datani boshidan 0 ta elementni tashlab ketishi kerak. 30 tasini olib beradi.
// 2. datani boshidan 30 ta elementni tashlab ketishi kerak. 30-60
// 3. 60-90

// skip=limit*(page - 1)
