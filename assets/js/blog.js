const mainElement = document.querySelector("main");

const renderElement = function(type, text, parent) {
    const element = document.createElement(type);
    element.textContent = text;
    parent.appendChild(element);

    return element;

}

const handleEmpty = function () {
    const element = document.createElement("h2");
    element.textContent = "No Blogs available yet...";
    mainElement.appendChild(element);
}

const renderBlogList = function() {
    const blogs = readBlogDataFromLocalStorage();

    console.log("Blogs from local storage:", blogs);

    if(blogs.length === 0) {
        handleEmpty();
        return;
    }

    for (let index = 0; index < blogs.length; index++) {
        const article = document.createElement("article");
        const h2 = document.createElement("h2");
        const blockqoute = document.createElement("blockqoute");
        const p = document.createElement("p");

        h2.textContent = blogs[index].title;
        article.appendChild(h2);

        blockqoute.textContent = blogs[index].content;
        article.appendChild(blockqoute);

        p.textContent = `By ${blogs[index].username}`;
        article.appendChild(p);

        article.classList.add("card");

        mainElement.appendChild(article);
        
    }
}

renderBlogList();