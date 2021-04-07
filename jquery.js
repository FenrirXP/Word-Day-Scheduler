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





//Local Storage Code:
var visitorInput = document.querySelector("#userInput");
var userSave = document.querySelector("#saveBTN");


renderLastRegistered();

function renderLastRegistered(){
var input = localStorage.getItem("userInput");
if (visitorInput){
    userInput.textContent=input;
}
};


userSave.addEventListener("click", function(event) {
    event.preventDefault();

    var userInput = document.querySelector("#userInput").value;

    if(userInput===""){
        displayMessage("error", "Timeslot cannot be blank");
    } else {
        displayMessage("success", "Timeslot filled!!!");



        userInput.textContent=userInput;

        document.querySelector("userInput").value="";

        localStorage.setItem("userInput",slotInfo);


        
    }
});
  //localStorage.setItem(".col-sm-11","#woot");
 
 
 
 
 
 
 
 
 
 
 /* $("#saveBTN").on("click",function(){
    $('input[type="text"]').each(function(){    
        var id = $(this).attr("id");
        var value = $(this).val();
       localStorage.setItem("#saveBTN", "#userInput");
       console.log("#userInput");

    });   
});
   */
 