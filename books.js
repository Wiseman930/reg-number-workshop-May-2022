const bookTemplateElem = document.querySelector(".bookTemplate");
// const message = document.querySelector(".message");
const messageTS = document.querySelector(".messageTS");
const messageHBS = document.querySelector(".messageHBS");

const firstName = "Wiseman";
const bookCount = 3;
const dayCount = 5;

let message = `Dear <strong> ${firstName}</strong>,
<br></br>
The <strong>${bookCount} books </strong> you took out at the library is due in <strong>${dayCount} days </strong> .
<br></br>
Please return these books to us in the next <strong> ${dayCount} days </strong>.`
messageTS.innerHTML = message;


messageHBS.innerHTML = template({
    firstName: 'Lindani',
    bookCount: 3,
    dayCount: 5,
    books
  




})