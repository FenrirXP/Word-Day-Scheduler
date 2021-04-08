//used moment to get the current date and to continue updating 
$(document).ready(function(){
    $("#hello2").text(moment().format("ddd MMM Do, YYYY"));
});

//Calculate the number of hours from now and a  given hour (in 24 hours format) of the day
// If result is <0 means the given time is in the future
// If result is >0 means the given time is in the past
function hoursFromNow(time) {
    //Create an instance of moment for the current time
    var now=moment();
    //Create an instance of moment for the given time
    var todayTime=moment(now.format("MM/DD/YYYY")+" "+time+":00");
    //Return the difference in hours between the two moments
    return now.diff(todayTime,"hours");
  };
var since9AM = hoursFromNow(9);
if (since9AM>0){
    $("#hour9AM").addClass("past")
}
else if(since9AM<0){
    $("#hour9AM").addClass("future")
}

else{
    $("#hour9AM").addClass("present")
}


var since10AM = hoursFromNow(10);
if (since10AM>0){
    $("#hour10AM").addClass("past")
}
else if(since10AM<0){
    $("#hour10AM").addClass("future")
}

else{
    $("#hour10AM").addClass("present")
}


var since11AM = hoursFromNow(11);
if (since11AM>0){
    $("#hour11AM").addClass("past")
}
else if(since11AM<0){
    $("#hour11AM").addClass("future")
}

else{
    $("#hour11AM").addClass("present")
}


var since12PM = hoursFromNow(12);
if (since12PM>0){
    $("#hour12PM").addClass("past")
}
else if(since12PM<0){
    $("#hour12PM").addClass("future")
}

else{
    $("#hour12PM").addClass("present")
}


var since1PM = hoursFromNow(13);
if (since1PM>0){
    $("#hour1PM").addClass("past")
}
else if(since1PM<0){
    $("#hour1PM").addClass("future")
}

else{
    $("#hour1PM").addClass("present")
}


var since2PM = hoursFromNow(14);
if (since2PM>0){
    $("#hour2PM").addClass("past")
}
else if(since2PM<0){
    $("#hour2PM").addClass("future")
}

else{
    $("#hour2PM").addClass("present")
}


var since3PM = hoursFromNow(15);
if (since3PM>0){
    $("#hour3PM").addClass("past")
}
else if(since3PM<0){
    $("#hour3PM").addClass("future")
}

else{
    $("#hour3PM").addClass("present")
}


var since4PM = hoursFromNow(16);
if (since4PM>0){
    $("#hour4PM").addClass("past")
}
else if(since4PM<0){
    $("#hour4PM").addClass("future")
}

else{
    $("#hour4PM").addClass("present")
}


var since5PM = hoursFromNow(17);
if (since5PM>0){
    $("#hour5PM").addClass("past")
}
else if(since5PM<0){
    $("#hour5PM").addClass("future")
}

else{
    $("#hour5PM").addClass("present")
}





//Local Storage Code: created variables for user input, the save button and an arrary of tasks times
var visitorInput = document.querySelector("#userInput");
var userSave = document.querySelector("#saveBTN");
var tasks =  {
    task9AM:"",
    task10AM:"",
    task11AM:"",
    task12PM:"",
    task1PM:"",
    task2PM:"",
    task3PM:"",
    task4PM:"",
    task5PM:"",

}
//code to retrieve information from local storage to display to user when the window is refreshed or closed
 var savedTasks = localStorage.getItem("tasks");

 if(savedTasks){
     tasks=JSON.parse(savedTasks);
     document.getElementById("hour9AMTask").value=tasks.task9AM;
     document.getElementById("hour10AMTask").value=tasks.task10AM;
     document.getElementById("hour11AMTask").value=tasks.task11AM;
     document.getElementById("hour12PMTask").value=tasks.task12PM;
     document.getElementById("hour1PMTask").value=tasks.task1PM;
     document.getElementById("hour2PMTask").value=tasks.task2PM;
     document.getElementById("hour3PMTask").value=tasks.task3PM;
     document.getElementById("hour4PMTask").value=tasks.task4PM;
     document.getElementById("hour5PMTask").value=tasks.task5PM;
 }


//code to save items to local storage when user inputs information
document.addEventListener("click", function(event) {
    event.preventDefault();
    if (event.target.matches(".saveButton")){

        var time= event.target.dataset.time;
        var task= document.getElementById("hour"+time+"Task").value;
        tasks["task"+time]=task;
        
        localStorage.setItem("tasks",JSON.stringify(tasks));
    }


});









  
   