// function submitName() {

//     var name = document.getElementById('fname').value;
//     var item = document.getElementById('print_name').innerHTML = "Welcome " + name + "!";
//     var newInput = document.createElement('input');
//     newInput.placeholder = "Your email";
//     var parent = document.getElementById("signup");

//     parent.append(newInput);
//     console.log(item);

// }

// var input = document.getElementById("fname");
// alert("what");
// input.addEventListener("keyup", function(event) {
//     alert("Wa");
//     if (event.keyCode === 13) {
//         event.preventDefault();
//         alert("Wassup World");
//     }
// });

$(document).ready(function() {
    var input = document.getElementById("fname");
    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            var name = input.value;
            var item = document.getElementById('print_name').innerHTML = "Welcome " + name + "!";
            var newInput = document.createElement('input');
            newInput.placeholder = "Your email";
            var parent = document.getElementById("signup");
            newInput.id = "email";
            newInput.className = "form-control";
            var newButton = document.createElement('button');
            newButton.className = "btn btn-primary email";
            newButton.innerHTML = "Submit";
            parent.append(newInput);
            parent.append(newButton);
            return false;
        }
    });
    $(document).on("click", ".email", function() {
        alert('Thank you for signing up for our newsletter');
        location.reload(true);
    });


});