var client = contentful.createClient({
    space: '4yqo0hnakye1',
    accessToken: 'Kw9zuwqD0Zyk2uTUT0hytvtgKNYsY0tM9YSFTng-7oQ',
})

client.getEntry('2HKedTS1qnN9MypndV2OBg')
    .then((entry) => console.log(entry))
    .catch(console.error)
// Create the Contentful client.



/************************/
/**************************************************************/
/************************/
//get all itmes from contentful - call that data 'entries'
//content_type: 'name of cms collection' is used to search only in a specific cms 
client.getEntries({ content_type: 'bestBuyProductsVideogames' }).then(function (entries) {
    // log the title for all the entries that have it

    console.log(entries);

    //loop through each entry, call it 'entry   
    entries.items.forEach(function (entry) {

        var item = document.createElement("a");
        var title = document.createElement("h6");
        var price = document.createElement("p");






        console.log(entry.fields.price);
        item.classList.add("card");

        title.innerHTML = entry.fields.title;
        price.innerHTML = entry.fields.price;

        item.href = "details.html?id=" + entry.sys.id;
        item.append(title);
        item.append(price);





        if (entry.fields.mainImage) {
            console.log(entry.fields.mainImage.fields.file.url);
            var coverImage = document.createElement("img");
            coverImage.src = entry.fields.mainImage.fields.file.url;
            coverImage.classList.add('cover-image');
            item.append(coverImage);
        }

        document.getElementById("shop-now").append(item);
      
    });

});

client.getEntries({ content_type: 'bestBuyProductsVideogames' }).then(function (entries) {
    // log the title for all the entries that have it

    console.log(entries);

    //loop through each entry, call it 'entry   
    entries.items.forEach(function (entry) {

        var item = document.createElement("a");
        var title = document.createElement("h6");
        var price = document.createElement("p");






        console.log(entry.fields.price);
        item.classList.add("card");

        title.innerHTML = entry.fields.title;
        price.innerHTML = entry.fields.price;

        item.href = "details.html?id=" + entry.sys.id;
        item.append(title);
        item.append(price);





        if (entry.fields.mainImage) {
            console.log(entry.fields.mainImage.fields.file.url);
            var coverImage = document.createElement("img");
            coverImage.src = entry.fields.mainImage.fields.file.url;
            coverImage.classList.add('cover-image');
            item.append(coverImage);
        }

        document.getElementById("top-sellers").append(item);
      
    });

});

client.getEntries({ content_type: 'bestBuyProductsVideogames' }).then(function (entries) {
    // log the title for all the entries that have it

    console.log(entries);

    //loop through each entry, call it 'entry   
    entries.items.forEach(function (entry) {

        var item = document.createElement("a");
        var title = document.createElement("h6");
        var price = document.createElement("p");






        console.log(entry.fields.price);
        item.classList.add("item");

        title.innerHTML = entry.fields.title;
        price.innerHTML = entry.fields.price;

        item.href = "details.html?id=" + entry.sys.id;
        item.append(title);
        item.append(price);





        if (entry.fields.mainImage) {
            console.log(entry.fields.mainImage.fields.file.url);
            var coverImage = document.createElement("img");
            coverImage.src = entry.fields.mainImage.fields.file.url;
            coverImage.classList.add('cover-image');
            item.append(coverImage);
        }

        document.getElementById("order-history").append(item);
      
    });

});
