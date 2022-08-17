// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});


    var imageList = [
        "images/212/plastic_bag.jpg",
        "images/212/plastic_bags.jpg",
        "images/212/plastic_flying.jpg",
        "images/212/plastic_in_ocean.jpg",
        "images/212/plastic_in_river.jpg",
        "images/212/plastic_p1.jpg",
        "images/212/plastic_p2.jpg",
        "images/212/plastic_p3.jpg",
        "images/212/trash_bin.jpg",
        "images/212/garbage_truck.jpg",
        "images/212/landfill.jpg",
        "images/114/plastic_bag.jpg",
        "images/114/plastic_bags.jpg",
        "images/114/plastic_flying.jpg",
        "images/114/plastic_in_ocean.jpg",
        "images/114/plastic_in_river.jpg",
        "images/114/plastic_p1.jpg",
        "images/114/plastic_p2.jpg",
        "images/114/plastic_p3.jpg",
        "images/114/trash_bin.jpg",
        "images/114/garbage_truck.jpg",
        "images/114/landfill.jpg",
    ];
    for(var i = 0; i < imageList.length; i++ )
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
    }
