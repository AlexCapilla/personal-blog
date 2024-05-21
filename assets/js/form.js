const formElement = document.querySelector("form");

const redirectPage = function () {
    location.href = "./blog.html";
};

const storeBlogDataToLocalStorage = function (data) {
    const blogs = readBlogDataFromLocalStorage();

    blogs.push(data);

    const stringData = JSON.stringify(blogs);

    localStorage.setItem("blogs", stringData);
};

const handleFormSubmit = function (event) {
  event.preventDefault();
  const username = document.querySelector("#username").value.trim();
  const title = document.querySelector("#title").value.trim();
  const content = document.querySelector("#content").value.trim();

  if (!username || !title || !content) {
    const errorElement = document.querySelector("#error");
    errorElement.textContent = "Please fill in all fields";

    setTimeout(() => {
      errorElement.textContent = "";
    }, 3000);

    return;
  }

  const formData = {
    username: username,
    title: title,
    content: content,
  };

  console.log(formData);

  storeBlogDataToLocalStorage(formData);
  redirectPage();
};

formElement.addEventListener("submit", handleFormSubmit);
