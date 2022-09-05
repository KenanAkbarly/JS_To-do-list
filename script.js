
const btn_add = document.querySelector('#push')
const input_add = document.querySelector('#text__input' )
const tasks = document.querySelector('#tasks')
console.log(btn_add)
console.log(input_add)
const deleteTask =  (parametr) =>{
 
    if(confirm('Bundan Eminsiniz?')){
      tasks.removeChild(parametr)
    }
}

btn_add.addEventListener('click',function(){
 
    const inputValue = input_add.value
    console.log(inputValue)
    
   

       const task = document.createElement('div')
       task.classList.add('task')
       const taskname = document.createElement('span')
       taskname.classList.add('taskname')
       taskname.append(inputValue)
       const delet = document.createElement('button');
       delet.classList.add('delete')
       const far = document.createElement('i');
       far.classList.add('far','fa-trash-alt')
       task.appendChild(taskname)
       task.appendChild(delet)
       delet.appendChild(far)
       tasks.appendChild(task)
       input_add.value = ''
       console.log(task)
   
})
input_add.addEventListener('keyup',function(even){

    if (even.keyCode == "13" && even.target.value !== ""){
           const task = document.createElement('div')
           task.classList.add('task')
           const taskname = document.createElement('span')
           taskname.classList.add('taskname')
           taskname.append(inputValue)
           const delet = document.createElement('button');
           delet.classList.add('delete')
           const far = document.createElement('i');
           far.classList.add('far','fa-trash-alt')
           task.appendChild(taskname)
           task.appendChild(delet)
           delet.appendChild(far)
           tasks.appendChild(task)
           input_add.value = ''
          
    }
})

input_add.addEventListener('keyup',function(event){
    console.log(event.target.value)

    if(event.target.value){
       btn_add.removeAttribute('disabled')
    }else{
        btn_add.setAttribute('disabled','disabled')
    }
})
function myConfirm() {
    var result = confirm("Want to delete?");
    if (result==true) {
     return true;
    } else {
     return false;
    }
  }
