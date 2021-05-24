var posts = [
    {
        id: '1',
        destination: 'China',
        createdAt: new Date(2014, -1, 1, 2, 3, 4, 567),
        author: 'ChingHang',
        tag: "summer",
        flug: 'A-730'
    },
    {
        id: '2',
        destination: 'Italien',
        createdAt: new Date(2014, -1, 1, 2, 3, 4, 567),
        author: 'PetrovPetr',
        tag: "summer",
        flug: 'A-733'
    },
    {
        id: '3',
        destination: 'Spanien',
        createdAt: new Date(2017, 0, 1, 2, 3, 4, 567),
        author: 'IvanovaKatya',
        tag: "spring",
        flug: 'A-777'
    },
    {
        id: '4',
        destination: 'Griechenland',
        createdAt: new Date(2013, 0, 1, 2, 3, 4, 567),
        author: 'ZaicevVasiliy',
        tag: "spring",
        flug: 'A-321'
    },
];
class arbeit {
    printProduct(data) {
            div_element.innerHTML = "";
            data.forEach((product, ind) => {
                div_element.innerHTML +=`
        <table>
        <tr>
        <td>
        <img src="6.jpg" width="170px" height="170px">
        </td>
        <td>
        <p class="text">${product.destination}</p>
        <br />
        <ul>
        <li>Aus Berlin</li>
        <li>${product.flug}</li>
        <li>${product.createAt}</li>
        <li>${product.author}</li>
        </td>
        </tr>
        </table>
            `
            });
            }
        getPosts(filterConfig = "Date", skip = 0, top = posts.length) {
            if (filterConfig == "Date") {
                posts.sort(function (a, b) {
                    return new Date(b.createdAt) - new Date(a.createdAt);
                });
                return this.posts.slice(skip, top + skip);
            }
            else if (filterConfig == "summer") {
                var temp = []
                posts.forEach((product, ind) => {
                    if (product.tag == "summer"){
                        temp.push(product)
                    }
                });
                return temp
            }
            else if (filterConfig == "spring") {
                var temp = []
                posts.forEach((product, ind) => {
                    if (product.tag == "spring"){
                        temp.push(product)
                    }
                });
                return temp
            }
            else {
                throw "Error. there is no such filter";
            }
        }
   getPost(id) {
        for (var i = 0; i < posts.length; i++) {
            if (posts[i].id === id) {
                return posts[i];
            }
        }
        throw "No object with " + id + " id";
    }
    validatePost(Object){
        return Object.id != null && Object.destination != null && Object.destination.length<400
            && Object.author != null && Object.createdAt != null && typeof Object.id === "string" && typeof Object.destination === "string" && typeof Object.flug === "string"
            && typeof Object.author === "string"

    }
    addAll(posts_double){
        let result=[], k=0;
        for(let i = 0; i<posts_double.length; i++){
            if(this.validatePost(posts_double[i])){
                this.addPost(posts_double[i])
            }else {
                result[k] = posts_double[i];
                k++;
            }
        }
        return result;
    }
    addPost(Object){
       if(this.validatePost(Object)){
           posts.splice(posts.length,0,Object);
           return true;
       }
       else {
           return false;
       }
    }
    clear(){
        posts.splice(0,posts.length);
    }
    editPost(id,post){
        if(this.validatePost(post)){
            this.getPost(id).destination=post.destination;
            this.getPost(id).author=post.author;
            return true;
        }else {
            return false;
        }
    }
    removePost(id){
        for (var i = 0; i < posts.length; i++) {
            if (posts[i].id === id) {
                return posts.splice(i,1);
            }
        }
        throw "No object with " + id + " id";
    }
    constructor(posts) {
    this._posts=posts;
   }
}


let a = new arbeit(posts);

let ob={
    id: '5',
    destination: 'England',
    createdAt: new Date(2018, 0, 1, 2, 3, 4, 567),
    author: 'ZaicevAnatoliy',
    hashTags:['Brest'],
    flug: 'A-737'
}

posts_true = {
        id: '1',
        destination: 'Griechenland',
        createdAt: new Date(2013, 0, 1, 2, 3, 4, 567),
        author: 'SergeevaAnna',
        flug: 'A-322'
    }
posts_false = {
        id: '12',
        destination: 'Frankreich',
        createdAt: new Date(2019, 0, 1, 2, 3, 4, 567),
        author: 'KotovaMariya',
        flug: 'A-321'
    }


console.log(a.getPosts('spring'))
console.log(a.getPosts('summer'))

console.log(a.printProduct(a.getPosts('spring', 0, 1)))

console.log("testing getPost: ")
console.log(a.getPost(3))

function printProduct() {
   posts.forEach((product, ind) => {
        document.write(`
<table>
<tr>
<td>
<img src="6.jpg" width="170px" height="170px">
</td>
<td>
<p class="text">${product.destination}</p>
<br />
<ul>
<li>Aus Berlin</li>
<li>${product.flug}</li>
<li>${product.createAt}</li>
<li>${product.author}</li>
</td>
</tr>
</table>
     `)
     });
 }


console.log("test true validatePost: ")
console.log(a.validatePost(test_true))

console.log("test false validatePost: ")
console.log(a.validatePost(test_false))


console.log("test addPost: ")
console.log(a.addPost(test_true))

console.log("test removePost: ")
console.log(a.removePost("2"))


console.log("output all posts: ")
console.log(a.getPosts("Date"))


function changeColor(newColor) {
    var element = document.getElementById("text");
    element.style.color = newColor;
}



    var kek = new Object();
    kek.color = "yellow";
    kek.shape = "round";

    kek.describe = function() {
        return "Object kek has " + this.color + "color :)";
    }

    console.log(kek.describe());



var user = {
    firstName: "Arielka",
    age: 18,
    children: ["10", "20"],
    adress: {
        street: "Plekhanova Str. 61",
        city: "Serebruklin"
    },
    Name: function() {
        return this.firstName + "  is  " + this.age + " years old";
    }
}

console.log(user.Name());


function sum (a,b) {
    return a + b
}

console.log(sum(12,4));


for(var i = 100; i >=10; i--) {
    console.log(i);
 }


var mas = ["A", "B", "C"];
for(var i = 0; i < mas.length; i++){
     console.log(mas[i]);
 }
 console.log("====");


var first = 18;
var second = 25;

var structure = [1,2,3,4];
var structure_1 = new Array (1,2,3,4,5)
structure.push("Kek")

console.log(structure[4]);


document.write("result of concat: " + first + second);
document.write("result of summing: ", first + second);



var num_1 = 22;
var num_2 = 11;

var name = prompt("What is your name?");
console.log("Your name: " + name);

