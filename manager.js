/**
 * 1 = Sports
 * 2 = Pop Culture
 * 3 = Student Voices
 * 4 = Current Events
 */

let url= window.location.href

function getArticleNumber() {

    url = url.substring(url.length-1)
    console.log(url)

}

function changeTitles (){

    switch(url){
        case 1:
            break;
        case 2:
            break;
        case 3:
            break
        case 4:
            break;
    }

}


getArticleNumber()
changeTitles()



