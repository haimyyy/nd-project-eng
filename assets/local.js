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
        aComponent.className = "image fit";
        aComponent.appendChild(image);
        imageContainer.appendChild(aComponent);
        infra.appendChild(imageContainer);
    })

    //on image click
    $(".imageContainer").click(function() {
        console.log("image.clicked", this)
    })

});