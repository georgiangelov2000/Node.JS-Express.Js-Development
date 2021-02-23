
$("#add-user").submit(function(event){
  alert("Data Inserted Successfully!");
})

$("#update-user").submit(function (event) {
  event.preventDefault();
  let newArray = $(this).serializeArray();
  let data = {};
  $.map(newArray, function (n, i) {
    (data[n["name"]] = n["value"]);
  });
  let request = {
    url: `http://localhost:3000/api/users/${data.id}`,
    method: "PUT",
    data: data,
  };
  $.ajax(request).done(function (response) {
    alert("Data Updated Successfully!");
  });
});

if(window.location.pathname==='/'){
 let $ondelete=$('table tbody td a.delete');
  $ondelete.click(function(){
    let id=$(this).attr('data-id');

    let request = {
      url: `http://localhost:3000/api/users/${id}`,
      method: "DELETE",
    };

    if(confirm('Do you really want to delete this user from your data?')){
      $.ajax(request).done(function (response) {
        alert("User deleted Successfully!");
        location.reload();
      });
    }
  })
}