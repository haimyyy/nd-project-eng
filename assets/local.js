$(document).ready(function () {
    console.log("ready!");

    var images = [ "2.jpg", "3.jpg", "4.jpeg", "5.jpeg", "6.jpeg", "7.JPG", "8.jpeg", "9.jpeg", "10.jpeg", "11.JPG"];
    var finish = document.getElementsByClassName("finish")[0];

    images.forEach(function (imageName) {
        var imageContainer = document.createElement('div');
        var image = document.createElement('img');
        var aComponent = document.createElement('a');
        imageContainer.className = "imageContainer";
        image.src = "nir-images/" + imageName;
        image.className = "imageItem";
        aComponent.className = "image fit";
        aComponent.appendChild(image);
        imageContainer.appendChild(aComponent);
        finish.appendChild(imageContainer);
    })

    var infraImages = ["16.jpg", "17.jpg", "18.jpg", "19.JPG", "20.JPG", "21.JPG", "22.JPG", "23.JPG", "24.JPG", "25.JPG", "26.JPG", "27.JPG"];
    var infra = document.getElementsByClassName("infra")[0];

    infraImages.forEach(function (imageName) {
        var imageContainer = document.createElement('div');
        var image = document.createElement('img');
        var aComponent = document.createElement('a');
        imageContainer.className = "imageContainer";
        image.src = "nir-images/" + imageName;
        image.className = "imageItem";
        aComponent.className = "image fit";
        aComponent.appendChild(image);
        imageContainer.appendChild(aComponent);
        infra.appendChild(imageContainer);
    })

    //on image click
    $(".imageContainer").click(function() {
        var image =$(this).find(".imageItem");
        $('#modalImage').attr("src", image.attr("src"));
        var modal = $('#myModal');
        modal.removeClass("close");
        modal.addClass("open")
    })

    $("#closeDialog").click(function() {
        var modal = $('#myModal');
        modal.removeClass("open");
        modal.addClass("close")
    })



    $('#submit').click(function() {
        // var content = $("#mycontactform").serialize();
        // console.log(content)
        var name = $('#name');
        var phone = $('#phone');
        if (name.val() === ''){
            alert("נא למלא שם מלא");
            return;
        }
        if (phone.val() === ''){
            alert("נא למלא טלפון");
            return;
        }
        $.post("http://ineng.eu5.org/send.php", $("#mycontactform").serialize(), function(response) {
            // $('#success').html(response);
            //$('#success').hide('slow');
        });

        $('input').val('');
        $('#message').val('');
        alert('תודה על בקשתך, ניצור עמך קשר בהקדם');
        return false;
    });
});