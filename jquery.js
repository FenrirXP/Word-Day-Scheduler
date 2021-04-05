$(document).ready(function(){
    $("#hello2").text(moment().format("ddd MMM Do, YYYY"));
});

//Calculate the number of hours from now and a  given hour (in 24 hours format) of the day
// If result is <0 means the given time is in the future
// If result is >0 means the given time is in the past
var pastTime = "true";
var presentTime = "true";
var futureTime = "true";


function hoursFromNow(time) {
    //Create an instance of moment for the current time
    var now=moment();
    //Create an instance of moment for the given time
    var todayTime=moment(now.format("MM/DD/YYYY")+" "+time+":00");
    //Return the difference in hours between the two moments
    return now.diff(todayTime,"hours");
  };


















  //localStorage.setItem(".col-sm-11","#woot");

$(".fa fa-save").click(function(){
    row.push({
        input:""
    })
    localStorage.setItem("saveButton",JSON.stringify("row"))
});