const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Question 1:

const cat = {
    complain: function () {
        console.log("Meow!");
    }
}


// Question 2:

const heading = document.querySelector("h3");

heading.innerHTML = "Updated Heading";


// Question 3:

heading.style.fontSize = "2em";


// Question 4:

heading.classList.add("subheading");


// Question 5:

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}


// Question 6:

const resultContainer = document.querySelector(".results");

resultContainer.style.backgroundColor = "yellow";
resultContainer.innerHTML = "<p>New paragraph</p>";


// Question 7:

function listCats(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

listCats(cats);


// Question 8:

function createCats(cats) {

    let html = "";
    
    for (let i = 0; i < cats.length; i++) {
        let catAge = "Age unknown";

        if (cats[i].age) {
            catAge = cats[i].age;
        }

        html += `
            <div>
                <h5>${cats[i].name}</h5>
                <p>${catAge}</p>
            </div>`;
    }

    return html;
}

const catsContainer = document.querySelector(".cat-container");

catsContainer.innerHTML = createCats(cats);