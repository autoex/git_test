const getPosts =async()=> {
    const req = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
    const posts = await req.json()

    return posts;

}
const section = document.querySelector('section')

const getArticle = ({title, body}) =>  `<article><h2>${title}</h2>${body}</article>`

setTimeout(()=> getPosts().then(data=> section.innerHTML = data.map(post=>getArticle(post)).join('') ),2000)

[1,1,1].fo



