var qoutes = [


    {qoute : "Don't judge a book by its cover", author: "George Eliot (Mary Ann Evans)",img:"https://img.youm7.com/images/NewsPics/gallery/pics/1220152766403991.jpg"},
    {qoute : "Practice makes perfect", author: "Vince Lombardi",img:"https://img.youm7.com/images/NewsPics/gallery/pics/1220152766403991.jpg"},
{qoute : "All that glitters is not gold.", author: "William Shakespeare",img:"https://img.youm7.com/images/NewsPics/gallery/pics/1220152766403991.jpg"
},
{qoute : "When in Rome, do as the Romans do", author: "St. Ambrose",img:"https://img.youm7.com/images/NewsPics/gallery/pics/1220152766403991.jpg"},
{qoute : "The early bird catches the worm", author: "William Camden",img:"https://img.youm7.com/images/NewsPics/gallery/pics/1220152766403991.jpg"},
{qoute : "Don't judge a book by its cover", author: "George Eliot (Mary Ann Evans)",img:"https://img.youm7.com/images/NewsPics/gallery/pics/1220152766403991.jpg"},
{qoute : "Resentment is like drinking poison and waiting for your enemies to die.", author: "--Nelson Mandela",img:"https://img.youm7.com/images/NewsPics/gallery/pics/1220152766403991.jpg"},


];









var newIndex;
var lastIndex;
var displayQuotes=[];






function getQoute(){

    if (displayQuotes.length==qoutes.length){
        displayQuotes=[];
        
    }








do{
    var newIndex =Math.floor(Math.random() * qoutes.length) ;

}
while(newIndex==lastIndex||displayQuotes.includes[newIndex]);






newIndex == lastIndex;


displayQuotes.push(newIndex);





console.log(newIndex);

document.getElementById("quote").innerHTML = qoutes[newIndex].qoute;

document.getElementById("author").innerHTML = qoutes[newIndex].author;





}