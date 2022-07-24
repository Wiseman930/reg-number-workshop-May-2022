const bookTemplateElem = document.querySelector(".bookTemplate");//taken from line 14 in the books.html
// const message = document.querySelector(".message");
const messageTS = document.querySelector(".messageTS");
const messageHBS = document.querySelector(".messageHBS");

//variable names match the names of the names in curly braces in the string
//a change in the value of the variable will affect the string ouput
const firstName = "Wiseman Mabusela";
const bookCount = 4;
const dayCount = 5;


//create the template string
// the template string works with back ticks [``]
let message = `Dear <strong> ${firstName}</strong>,
<br>
<br>
The <strong>${bookCount} books </strong> you took out at the library is due in <strong>${dayCount} days </strong> .
<br>
<br>
Please return these books to us in the next <strong> ${dayCount} days </strong>.`

//Then we put the string into the innter html
messageTS.innerHTML = message;


//<---------------------------------------------------------------------------------->
//BEISDES CREATING VARIABLES AN OBJECT CAN BE USED
const msg = {
    firstName : "Wiseman Mabusela",
    bookCount : 4,
    dayCount : 5
}

//create the template string
// the template string works with back ticks [``]
let message2 = `Dear <strong> ${msg.firstName}</strong>,
<br>
<br>
The <strong>${msg.bookCount} books </strong> you took out at the library is due in <strong>${msg.dayCount} days </strong> .
<br>
<br>
Please return these books to us in the next <strong> ${msg.dayCount} days </strong>.`

//Then we put the string into the innter html
messageTS.innerHTML = message2;




//displays the Handlebrs template in the console >>> console.log(bookTemplateElem.innerHTML)
const template = Handlebars.compile(bookTemplateElem.innerHTML)
messageHBS.innerHTML = template({

    firstName : "Wiseman Mabusela",
    bookCount : 4,
    dayCount : 5,
    books: [{   title: "Lord of the Rings.", author: "J.R.R Tolkien"
            },
            {   title: "Harry Potter and the Socerer's Stone.", author: "J.K Rowling"
            }
            ,
            {   title: "Allice's Adventures in Wonderland.", author: "Lewis Carroll"
            }
        ]

})