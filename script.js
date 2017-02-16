var BeerReviewApp = function() {

    var beers = [];

    var addBeer = function(beerName, beerCategory, beerRating) {
        var newBeer = {
            name: beerName,
            category: beerCategory,
            rating: beerRating
        }
        beers.push(newBeer);
    };

    var updateBeers = function() {
        $('.beers-list').empty();
        for (var i = 0; i < beers.length; i++) {
            var beerHTML = "<li>" + beers[i].name + " - " + beers[i].category + " - " + beers[i].rating + "/5." + '</li>';
            $('.beers-list').append(beerHTML);
        }
    };

    return {
        addBeer: addBeer,
        updateBeers: updateBeers
    }
}

var app = BeerReviewApp();


$(".post-beer").on("click", function() {
    var name = $('.beer-input').val();
    var category = $('.category-input').val();
    var rating = $(".rating-input").val();
    app.addBeer(name, category, rating);
    app.updateBeers();
});


$('.sort-beers').on("click", function() {
    function compare(a, b) {
        if (a.rating < b.rating) {
            return -1;
        }
        if (a.rating > b.rating) {
            return 1;
        }
        return 0;
    }

    beers.sort(compare);
    alert("done");
});
