




function goToChapter(){

    console.log(chaptersObj.beginningObj.subtitle);
    console.log(chaptersObj.beginningObj.text);

    console.log(chaptersObj["beginningObj"].subtitle);
    console.log(chaptersObj["beginningObj"].text);
}


let chaptersObj = {
    mise_en_contexte : {
      subtitle: "Qu'elle heure est-il?",
      text: "Tu es à une fête, tu en as profité le plus possible, tu regarde ton téléphone et réalise qu'il est devenue tard.  Tu es vraiment saoul et tu dois rentrer chez toi. Comment vas-tu t'y prendre?",
      img: "assets/img/cell_phone_time.jpg",
      options: [
        {
          text: "",
          action: "goToChapter(``)"
        }
      ]
    },
}