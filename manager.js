
let reloaded = false

function refresh(){
    if (!reloaded){
    location.reload()
    }
    
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
    document.location.reload()
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
    window.location.assign(nextPage);
    document.location.reload()
}







