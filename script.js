let a=0
function change(){
    let ball=document.querySelector(".ball")
    let color=['white','black','grey','#26273A']
    let box=["yellow",'green','blue','purple']
    let y=color.length
    document.body.style.color=color[a]
    document.body.style.backgroundColor=color[y-a]
    ball.style.backgroundColor=box[a]
    a+=1
    if (a==y) {
        a=0
    }
    console.log("a="+a)
}
// let audioElement = document.getElementById('song')
// let title=audioElement.getAttribute("title")
// document.write("<p> Now playing"+title+"</p>")

