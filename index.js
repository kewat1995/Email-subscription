const scriptUrl = "https://script.google.com/macros/s/AKfycbxxb4k1IY57hVk3WbroM4vm3dwbt9NC7MCPy45ihiV7f_WrhD8oFGfvqPNJt89t6REmqg/exec"
const form = document.forms['submit-to-google-sheet'];
const msg =document.getElementById("msg");

form.addEventListener("submit" ,e=>{
    e.preventDefault();
    fetch(scriptUrl,{
  method:"POST",
  body:new FormData(form)
    } )
    .then(response => {
        msg.innerHTML = "Thanks You for Subscribe !";
        setTimeout(()=>{
            msg.innerHTML = "";
        },5000)
        form.reset(response)
    })
    .catch(error => console.error("Error",error.message))
})

// const scriptURL = '<SCRIPT URL>'
// const form = document.forms['submit-to-google-sheet']

// form.addEventListener('submit', e => {
//   e.preventDefault()
//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//     .then(response => console.log('Success!', response))
//     .catch(error => console.error('Error!', error.message))
// })