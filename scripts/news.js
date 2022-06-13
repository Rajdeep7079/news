


var code=document.getElementById("search_box").value
const url="https://masai-mock-api.herokuapp.com/news/top-headlines?country=in"
fetch(url)
.then(function(res){
    return res.json()
})
.then(function(res){
    append(res.articles)
    console.log(res)
})
.catch(function (err){
    console.log(err)
})
// async function getData() {
//     try {
//       let res = await fetch(url);
//       let data = await res.json(); // Collect data
//       append(data.articles);
   
//       console.log(data);
//     } catch (err) {
//       console.log(err);
//     }
//   }
  
//   getData();

function append(data) {
      let container = document.getElementById("detailed_news");
      data.forEach(function (el) {
        let img = document.createElement("img");
        img.src = el.urlToImage;
    
        var p=document.createElement("p")
        p.innerHTML=el.publishedAt
        var h2 = document.createElement("h2");
        h2.innerText = el.author;
        var h2 = document.createElement("h2");
        h2.innerText = el.content;
    
        var h2 = document.createElement("h2");
        h2.innerText = el.title;

        var p = document.createElement("p");
        p.innerText = el.description

        // var p = document.createElement("p");
        // p.innerText = el.publishedAt
        let div = document.createElement("div");
        div.append(img,p, h2,h2, p);
    
        container.append(div);
      });
    }