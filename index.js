

$('#boton').click(function (){
    let i=0
    $('#lista').empty()
    $.get('http://localhost:5000/amigos',function(data){
 
    while(i < data.length ){
    
    let li = document.createElement("li")
    $("#lista").append(li)
   $(li).attr("id", i + 1)
   $(li).append( data[i].name)
    i++
    }
   $('.gif').remove()
       
    })
  

    
})





$("#search").click(function (){
    let id = $("#input").val()
 $.get('http://localhost:5000/amigos', function(data){
 if(id>data.length)  $("#amigo").text("Te pasaste rey")
 $("#input").val("")  
 $("#amigo").text(data[id].name)
 })
 
 
})

$("#delete").click(function(){
    let id = $("#inputDelete").val()
  if(id){
    $.ajax({
     url:'http://localhost:5000/amigos/' + id,
     type: 'DELETE',
     success: function(data){
      $('#sucess').text("joya")
     }
    });
}
       
    });
