// TO DO
document.addEventListener("DOMContentLoaded", function(){
  const list_element = document.querySelector("ul")
  list_element.addEventListener('click', (e) => {
    if (e.target.nodeName == "LI"){
      e.target.classList.toggle('checked')
    };
    if (e.target.nodeName == "SPAN"){
      e.target.parentNode.remove()
    }; 
    
  })

    const inContent =document.querySelector("#input")
    const xbtn = document.querySelector('.addBtn')

    xbtn.addEventListener('click', ()=> {
      if (inContent.value !== ""){
        const todo = document.createElement('li')
        const span = document.createElement('span')
        span.innerText = 'x'
        span.className ='close'
        const liContent = inContent.value
        todo.innerHTML = liContent
        todo.append(span)
        list_element.prepend(todo)
      }
      
    });
    
    
  })
  
 


//for(var i = 0; i < list_element.length; i++) {
//  const sli = list_element[i]
//  sli.addEventListener('click', ()=> {
//    sli.className ='checked'
//    sli.classList.toggle("")
//  })
//}


