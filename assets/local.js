const serverUrl = 'https://nd-eng.herokuapp.com/';

$(document).ready(function () {
    console.log("ready!");
    var imageIndex
    var images = ["2.jpg", "3.jpg", "4.jpeg", "5.jpeg", "6.jpeg", "7.JPG", "8.jpeg", "9.jpeg", "10.jpeg", "11.JPG"];
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
        imageContainer.className = "imageContainer_infra";
        image.src = "nir-images/" + imageName;
        image.className = "imageItem";
        aComponent.className = "image fit";
        aComponent.appendChild(image);
        imageContainer.appendChild(aComponent);
        infra.appendChild(imageContainer);
    })

    //on image click
    $(".imageContainer").click(function () {
        var image = $(this).find(".imageItem");
        imageIndex = images.indexOf(image.attr("src").split('/')[1]);
        $('#modalImage').attr("src", image.attr("src"));
        $('#modalImage').removeClass("infra");
        var modal = $('#myModal');
        modal.removeClass("close");
        modal.addClass("open")
    });

    $(".imageContainer_infra").click(function () {
        var image = $(this).find(".imageItem");
        imageIndex = infraImages.indexOf(image.attr("src").split('/')[1]);
        $('#modalImage').attr("src", image.attr("src"));
        $('#modalImage').addClass('infra');
        var modal = $('#myModal');
        modal.removeClass("close");
        modal.addClass("open")
    });

    $("#closeDialog").click(function () {
        var modal = $('#myModal');
        modal.removeClass("open");
        modal.addClass("close")
    });

    $("#myModal").click(function () {
        var modal = $('#myModal');
        modal.removeClass("open");
        modal.addClass("close")
    });

    $("#modalImage").click(function (e) {
        e.stopPropagation();
        imageIndex++;
        if ($('#modalImage').hasClass('infra')) {
            if (infraImages[imageIndex]) {
                $('#modalImage').attr("src", "nir-images/" + infraImages[imageIndex]);
            } else {
                imageIndex = 0;
                $('#modalImage').attr("src", "nir-images/" + infraImages[imageIndex]);
            }
        } else {
            if (images[imageIndex]) {
                $('#modalImage').attr("src", "nir-images/" + images[imageIndex]);
            } else {
                imageIndex = 0;
                $('#modalImage').attr("src", "nir-images/" + images[imageIndex]);
            }
        }
    });


    $('#submit').click(function () {
        // var content = $("#mycontactform").serialize();
        // console.log(content)
        var name = $('#name');
        var phone = $('#phone');
        if (name.val() === '') {
            alert("נא למלא שם מלא");
            return;
        }
        if (phone.val() === '') {
            alert("נא למלא טלפון");
            return;
        }
        $.post(serverUrl, $("#mycontactform").serialize(), function (response) {
            // $('#success').html(response);
            //$('#success').hide('slow');
        });

        $('input').val('');
        $('#message').val('');
        alert('תודה על בקשתך, ניצור עמך קשר בהקדם');
        return false;
    });
});