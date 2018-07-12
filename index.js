$(document).ready(function(){
    $("#subBtn").click(function(){
        var todoBlock = $(this).closest("#Newtodobox")
        var description = todoBlock.find("#addTodo")
        var pomodoroEstimate = todoBlock.find("#addPomo")
        var descriptionName = todoBlock.find("#descriptionName")
        $("ol").append("<li> <input type = 'checkbox'/> <Font size = '5'> " + description.val() + " </Font> <span class= ' pomodoro-estimate ' > " + pomodoroEstimate.val() + " pomodoros </span> <div> " + descriptionName.val() + " </div> </li> ")

description.val("")
pomodoroEstimate.val("")
descriptionName.val("")

   
    })
})

$("ol").on("click", "input[type=checkbox]",function() {
    $(this).closest("li").toggleClass("complete-todo")
})


