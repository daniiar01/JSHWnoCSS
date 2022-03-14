// const h1 = {
//     className: 'title',
//     id:'myTitle',
//     textContent: 'Hello world'
// }
// console.log(h1);



// Методы получения элементов old
// console.log(document.getElementsByClassName('title'));
// console.log(document.getElementById('myTitle'));
// console.log(document.getElementsByTagName('h1'));
// const test = document.getElementsByClassName ('title')
// console.log([...test]);
// console.log(Array.from(test))

// Методы получения элементов  new
// console.log(document.querySelector('.title'));
// console.log(document.querySelectorAll('.title'));

// const classTitle = document.querySelectorAll('.title')
// // console.log(classTitle.forEach(item => item));
// console.log(...[classTitle]);
// classTitle.forEach( item => console.log(item))

// const btn = document.querySelector('#btn')
// btn.addEventListener('click', () =>{
// alert ('Hello')
// })


// Значение элементов
// const btn = document.querySelector('#btn')

// btn.classList.add ('myClass')
// btn.className += ' test' //объект
// btn.classList.remove('test') // удаление объекта

// btn.classList.toggle('ppp')
// btn.classList.toggle('ppp')


// console.log(btn);
// //создание элемента
// let myTag = document.createElement('ul')
// // Добавляет элемент
// document.body.append(myTag)
// const text = `
// <li>Задача 1</li>`
// // myTag.innerHTML = text
// for (let i =1 ; i<10; i++){
//     myTag.innerHTML += `<li class = myClass>Задача ${i}</li>`
// }



// console.log(myTag);



// const test = '20px'
// btn.style.borderRadius = test
// btn.style.color = 'green'
// btn.style.width = '200px'


// btn.style.cssText = 'border-radius:20px; color: red;width: 150px'




// console.log(btn.innerHTML);
// console.log(btn.innerText);




//  создание элемента
let myDiv = document.createElement ('div')





// Добавляет элемент
document.body.append(myDiv)

myDiv.innerHTML = `<h1>Let’s talk</h1>
                 <hr>
                 <p>Your Name</p>
                 <hr>
                 <p>Your Email</p>
                 <button> SEND MESSAGE</button>`


       myDiv.style.cssText= 'display:flex ;align-items:center;justify-content:center; flex-direction:column;margin:192px; gap:5px;'
       const myH1 = document.querySelector ('h1')
       myH1.style.cssText = 'font-family:roboto;Weight :600px,Semi-Bold;font-size:48px'
       const myHr = document.querySelector('hr')
       myHr.style.cssText = 'width: 306px; height: 0px;border: 3px solid #000000'
     
       const myBtn = document.querySelector ('button')
       myBtn.style.cssText = 'border-radius:5px;width:230px;height: 57px; border: 1px solid #FF0000; color:#FFFFFF;background: #CA0000'



