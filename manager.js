
let Editors = {
    1 : "future editors",
    2 : "Austin, Isabella, Ivn",
    3 : "future editors",
    4 : "future editors"
}



let url = window.location.href


function getArticleNumber() {

    article = url.substring(url.length-1)
    console.log(article)
}


getArticleNumber()

function changeTitles (){

    /**
    * 1 = Sports
    * 2 = Pop Culture
    * 3 = Student Voices
    * 4 = Current Events
    */
    let title = document.getElementById('title') 
    let genre = document.getElementById('Genre')//document.querySelector('#Genre')
    let articleTitle = document.getElementById('article-title')
    article = parseInt(article)
    console.log(genre)

    switch(article){
        case 1:
            title.textContent = 'Sports'
            genre.textContent = 'Sports'
            articleTitle.textContent = 'To be replaced'
            break;
        case 2:
            title.textContent = 'Pop Culture'
            genre.textContent = 'Pop Culture'
            articleTitle.textContent = 'Favourite holiday movies'
            break;
        case 3:
            title.textContent = 'Student Voices'
            genre.textContent = 'Student Voices'
            articleTitle.textContent = 'to be replaced'
            break
        case 4:
            title.textContent = 'Current Events'
            genre.textContent = 'Current Events'
            articleTitle.textContent = 'to be replaced'
            break;
    }

    articleTitle.style.fontSize = '25px'
    articleTitle.style.fontFamily = '"Montserrat", sans-serif'
    articleTitle.style.color = '#1D71F5'


}

function nextArticle(){

    let nextPage = url

    if (article < 4){
        article +=1
    } else if (article == 4){
        article = 1
    }

    nextPage = url.slice(0, -1) + article;

    //location.replace(nextPage)
    //window.open(nextPage, '_self');
    //window.open(nextPage)
    //window.location.href = nextPage;
    window.location.assign(nextPage);
    caches.keys().then(list => list.map(key => caches.delete(key)))
    document.location.reload(true)
}

function lastArticle(){
    let nextPage = url

    if (article > 1){
        article -=1
    } else if (article == 1){
        article = 4
    }

    nextPage = url.slice(0, -1) + article;

    //location.replace(nextPage)
    //window.open(nextPage, '_self');
    //window.open(nextPage)
    //window.location.href = nextPage;
    caches.keys().then(list => list.map(key => caches.delete(key)))
    window.location.assign(nextPage);
    document.location.reload(true)
}

function content(){

    switch(article){
        case 1:
            //image
            document.writeln('<img id="article-photo" src="images/Badminton.png" alt="a picture">');
            //main content
            document.writeln('<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus officiis nemo explicabo recusandae earum ad distinctio aperiam voluptates saepe, nesciunt accusamus quasi ex nobis expedita ipsum doloribus ratione vel possimus?</p>')
            document.writeln('<div class="spacer"></div>')
            document.writeln("<p class = 'date' >Editors: "+Editors[1]+'</p>')
            break;
        case 2:
            //image
            document.writeln('<img id="article-photo" ALIGN="left" src="images/santa.jpg" alt="a picture">');
            //main content
            document.writeln('<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus officiis nemo explicabo recusandae earum ad distinctio aperiam voluptates saepe, nesciunt accusamus quasi ex nobis expedita ipsum doloribus ratione vel possimus?</p>')
            document.writeln('<div class="spacer"></div>')
            document.writeln("<p class = 'date' >Editors: "+Editors[2]+'</p>')
            break;

    }
    document.write('')

}





