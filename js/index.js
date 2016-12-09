$(document).ready(function(){

  
 
  

  
// var wiki= "https://crossorigin.me/http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" ; 
 
 var param ='&namespace=0&limit=10&callback=?';
  
  
$('#submitbut').on('click',function(){
     var search = $("#search").val(); 
     var a = "<a href='https://en.wikipedia.org/wiki/";   
      var a2 =" target='_blank' >";
   console.log(a);
  
 $.ajax({
    url: "https://en.wikipedia.org/w/api.php",
    jsonp: "callback",
    dataType: 'jsonp',
    data: {
      action: "query",
      list: "search",
      srsearch: $("#search").val(),
      srinfo: "suggestion",
      srlimit: "10",
      format: "json"
    },
    xhrFields: {
      withCredentials: true
    },
        success: function (data) {
       
           if(data.query.search.length == 0){
            alert("No matches found!");
          }
          console.log(data);
          
           $('#result > li').remove();
            console.log(a+data.query.search[4].title+a2);
    for (var i=0;i<10;i++){
     
      
// console.log(data.query.search[i].title);  console.log(data.query.search[i].snippet);
       
  $('#result').append('<li class=rest>'+a+data.query.search[i].title+"'"+a2+'<strong>'+data.query.search[i].title+'</strong><br><br>'+data.query.search[i].snippet+'</a></li>');
   }//for       
   
        },
        error: function (errorMessage) {
    console.log("error");
        }
    });
  });//click
  
  
  $('#search').bind('keyup',function(){
    if(event.keyCode == 13){ 
    
   var search = $("#search").val(); 
     var a = "<a href='https://en.wikipedia.org/wiki/";   
      var a2 =" target='_blank' >";
   console.log(a);
     
 $.ajax({
    url: "https://en.wikipedia.org/w/api.php",
    jsonp: "callback",
    dataType: 'jsonp',
    data: {
      action: "query",
      list: "search",
      srsearch: $("#search").val(),
      srinfo: "suggestion",
      srlimit: "10",
      format: "json"
    },
    xhrFields: {
      withCredentials: true
    },
        success: function (data) {
       
          if(data.query.search.length == 0){
            alert("No matches found!");
          }
          
          console.log(data);
          
           $('#result > li').remove();
            console.log(a+data.query.search[4].title+a2);
    for (var i=0;i<10;i++){
     
      
// console.log(data.query.search[i].title);  console.log(data.query.search[i].snippet);
       
  $('#result').append('<li class=rest>'+a+data.query.search[i].title+"'"+a2+'<strong>'+data.query.search[i].title+'</strong><br><br>'+data.query.search[i].snippet+'</a></li>');
   }//for       
   
        },
        error: function (errorMessage) {
    console.log("error");
        
        }         
   
          });
    }  });//enter
  
});