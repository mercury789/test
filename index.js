function set(name, value) {

   localStorage.setItem(name, value)

}
function rem(name) {

   localStorage.removeItem(name)

}
function get(name) {

   return localStorage.getItem(name)
}
function clear() {
   localStorage.clear()
}


// if (get('body')) {
//   document.querySelector('body').innerHTML = get('body')


// } else {
//   fetch('index.json')
//   .then(response => response.json())
//   .then(data => {


//     data.forEach(e => {
//       const body = document.querySelector('[data-body]')

//       let space = ''

//       if (e.name === "намазка"  e.name ===  "филейный фарш"  e.name ===  "пакет") {
//         space = '</br>'

//       }
//       if (e.name === "порошек") {
//         space = '</br></br>'
//       }

//       body.insertAdjacentHTML('beforeend', `
//         <div class="point" data-point>
//         <div class="box">
//     <div class="name" data-name>${e.name}</div>
//     <div class="right">
//     <div class="num" data-num="${e.num}">${e.num}</div>
//     <div class="amt" data-amt>1</div></span>
//     </div>
//     </div>
//   </div>
//   ${space}
//       `)
//     })

//   });
// }





// document.addEventListener("click", (event) => {

//     const targ = event.target

//     if (targ.closest("[data-amt]")) {

//        const amt = Number(prompt('', targ.innerText))

//       const att = targ.closest('[data-point]').querySelector('[data-num]').getAttribute('data-num')

//      if (amt) {



//        targ.innerText = amt
//        targ.closest('[data-point]').querySelector('[data-num]').innerText = att * amt

//        if (targ.closest('[data-point]').classList.contains('_active')) {
//          targ.closest('[data-point]').classList.remove('_active')
//        }

//        const body = document.querySelector('body').innerHTML
//        set('body', body)

//       }



//      }

//      if (targ.closest("[data-point]")) {

//       const targCl = targ.closest("[data-point]")

//        if (targCl.classList.contains('_active')) {

//          targCl.classList.remove('_active')
//        } else {

//          targCl.classList.add('_active')

//        }

//        if (document.querySelector('[data-point]._active')) {



//        let sum = 0;  
// document.querySelectorAll('[data-point]._active [data-num]').forEach(el => {  
//   sum += parseFloat(el.textContent) || 0;  
// });  

// document.querySelector('[data-sum]').innerText = sum

// } else {
//   document.querySelector('[data-sum]').innerText = 0
// }


//        const body = document.querySelector('body').innerHTML
//        set('body', body)

//      }

//      /*
//      if (targ.closest("[data-name]")) {

//      let value = prompt('', targ.innerText)

//      if (value) {

//        targ.innerText = value

//      }

//      }

//      if (targ.closest("[data-num]")) {

//      let value = prompt('', targ.innerText)

//      if (value) {

//        targ.innerText = value
//        targ.getAttribute('[data-num]') = value

//      }


//      }

//      */

//       if (targ.closest("[data-reset]")) {
//         clear()
//       }


// })


function showDateTime() {
   const now = new Date()

   const year = now.getFullYear()
   const month = String(now.getMonth() + 1).padStart(2, '0') // добавляем 0, если число < 10
   const day = String(now.getDate()).padStart(2, '0')

   const hours = String(now.getHours()).padStart(2, '0')
   const minutes = String(now.getMinutes()).padStart(2, '0')
   const seconds = String(now.getSeconds()).padStart(2, '0')

   const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`

   return formattedDate
}

function timePassed(dateString) {
   const past = new Date(dateString)
   const now = new Date()

   let diffMs = now - past // разница в миллисекундах
   let hours = Math.floor(diffMs / (1000 * 60 * 60))
   let minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))

   return minutes
}





if (get('body')) {
   document.querySelector('[data-body]').innerHTML = get('body')


}


document.addEventListener("click", (event) => {

   const targ = event.target

   if (targ.closest("[data-point]")) {

      const targPoint = targ.closest("[data-point]")
      const targNum = targPoint.querySelector('[data-num]')
      const targMax = targPoint.querySelector('[data-max]')
      const targDate = targPoint.querySelector('[data-date]')


      const num = targNum.innerText
      const newNum = Number(num) + 1
      const procent = newNum / Number(targMax.innerText) * 100


      if (newNum <= Number(targMax.innerText)) {
         targNum.innerText = newNum

         const now = new Date()
         targDate.innerText = `${now.getHours()}.${now.getMinutes()}`

         targPoint.querySelector("[data-decor]").style = `width: ${procent}%; transition: width 0.3s ease 0s;`


      }

      if (newNum === Number(targMax.innerText)) {
         // targPoint.querySelector("[data-info]").classList.add('_active')

         targPoint.querySelector("[data-decor]").style = `width: ${procent}%; background-color: green; transition: width 0.3s ease 0s;`

      }


      set("body", document.querySelector('[data-body]').innerHTML)

   }

   if (targ.closest("[data-end]")) {

      const elems = document.querySelectorAll('[data-point]')

      elems.forEach((elem) => {
         elem.querySelector("[data-num]").innerText = '0'

         elem.querySelector("[data-info]").classList.remove('_active')

         elem.querySelector("[data-date]").innerText = "00.00"

         elem.querySelector("[data-decor]").style = `background-color: transparent; transition: width 0.3s ease 0s;`




      })

      clear("body")
      set("startDate", showDateTime())


   }



})



// setInterval(() => {

//    const difference = timePassed(get("startDate"))

//    console.log(difference);





// }, 1000)



const elems = document.querySelectorAll('[data-point]')

elems.forEach((elem) => {
   const int = Number(elem.querySelector("[data-interval]").getAttribute("data-interval"))

   const passed = timePassed(get("startDate"))

   if (passed > int) {
      elem.querySelector("[data-text]").style = `color: orange; transition: width 0.3s ease 0s;`

   }



})











document.addEventListener('click', async () => {
   const perm = await Notification.requestPermission()

   if (perm === 'granted') {
      new Notification('Hello world')

   } 


   alert(perm);
})










// document.addEventListener('click', () => {
//    Notification.requestPermission().then((perm) => {
//       alert(perm);


//    })


// })

