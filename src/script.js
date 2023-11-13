document.querySelector('#push').onclick = function () {
  if (document.querySelector('#newtask input').value.length == 0) {
    alert('Please fullfill the input below');
  } else {
    document.querySelector('#tasks').innerHTML += `
        <div class="task bg-white h-[50px] py-[5px] px-[10px] mt-3 flex items-center justify-between border-b-2 border-solid border-secondary cursor-pointer">
        <span id="taskname" class="tasknya font-poppins text-[15px] font-normal">
            ${document.querySelector('#newtask input').value}
        </span>
        <button class="delete bg-primary w-[40px] border-none cursor-pointer outline-none h-full text-white rounded-md">Delete</button>
        </div>
        `;
        var current_tasks = document.querySelectorAll(".delete");
        for(var i = 0; i < current_tasks.length; i++){
        current_tasks[i].onclick = function (params) {
            this.parentNode.remove();
        }
    }
    var tasks = document.querySelectorAll('.task');
    for(var i = 0; i < tasks.length; i++){
        tasks[i].onclick = function(){
            this.classList.toggle('completed');
        }
    }
    document.querySelector("#newtask input").value = ""
  }
};
