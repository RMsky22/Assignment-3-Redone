var textInURL = window.location.search;

var parametersInURL = new URLSearchParams(textInURL);

var id = parametersInURL.get('id');

var client = contentful.createClient({
    space: '4yqo0hnakye1',
    accessToken: 'Kw9zuwqD0Zyk2uTUT0hytvtgKNYsY0tM9YSFTng-7oQ',

});
client.getEntry(id).then(function (entry) {
    console.log(entry);


    var item = document.createElement("div");

    var gallery = document.createElement("div");
    gallery.classList.add("gallery")
    var title = document.createElement("h4");
    var price = document.createElement("p");
    var customerrating = document.createElement("p");
    var description = document.createElement("p");
    var about = document.createElement("p");
    var reviews = document.createElement("p");



    //  console.log(entry.fields.mainImage.fields.file.url);
    var coverImage = document.createElement("img");
    coverImage.src = entry.fields.mainImage.fields.file.url;
    coverImage.classList.add('cover-image');
    gallery.append(coverImage);




if (entry.fields.multiImage>0) {
    entry.fields.multiImage.forEach(function (multi) {
        var multiimage = document.createElement("img");
        console.log(multiimage)
        multiimage.src = multi.fields.file.url;
        gallery.append(multiimage);
    });
}
    console.log(gallery)


    title.innerHTML = entry.fields.title;
    price.innerHTML = entry.fields.price;
    description.innerHTML = entry.fields.description;
    about.innerHTML = entry.fields.about;
    customerrating = "Current Rating " + entry.fields.customerReviews + " stars."
    reviews.innerHTML = entry.fields.reviews;

    item.append(title);
    item.append(price);
    item.append(customerrating);

   

    document.getElementById("left-side").append(gallery);
    document.getElementById("right-side").append(item);
    document.getElementById("description").append(description);
    document.getElementById("about").append(about);
    document.getElementById("reviews").append(reviews);

});