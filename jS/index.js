const handleCategory = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/news/categories");

    const data = await response.json();

    const tabContainer = document.getElementById("tab-container");
    let count =0;

    data.data.news_category.slice(0,3).forEach((category) => {
        count = count + 1;
        const div = document.createElement("div");
        div.innerHTML = `
        <a class="tab">${category.category_name} ${count}</a>
        `;
        tabContainer.appendChild(div);      
    })

   



    console.log(data.data.news_category
        );
}

handleCategory();