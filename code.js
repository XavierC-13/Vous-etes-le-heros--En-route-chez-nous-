




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
         //Party
        {
          text: "Continuer de faire la fête",
          action: "goToChapter(`party`)"
        },
        //marche
        {
          text: "Longue marche d'une heure",
          action: "goToChapter(`marche`)"
        },
        //uber
        {
          text: "Appeler un uber pour se rendre",
          action: "goToChapter(`uber`)"
        },
      ]
    },


    party: {
      subtitle: "Tu as été arrêté",
      text: "tu as fêté toutes la nuit, tu as déraper et tu t'es mis a courrir dans le club tout nue. La police est ensuite venue t'arrêter.",
      img: "assets/img/Arrested.jpg",
      options: [
        {
          text: "Recommencer",
          action: "goToChapter(`mise_en_contexte`)"
        }
      ]
    },

     marche_choix_chemin: {
      subtitle: "Par où passer?",
      text: "Dans votre longue marche, deux chemins se présente à vous. Il y a un raccourci douteux vers la gauche. Puis vers la droite il y a un chemin menant à la rue principale.",
      img: "assets/img/shortcut.jpg", //"assets/img/alley.jpg", //je c pas comment en mettre 2
      options: [
        {
          text: "À gauche",
          action: "goToChapter(`shortcut`)"
        },
        {
          text: "À droite",
          action: "goToChapter(`alley`)"
        },
      ]
    },
    
    





    
  
  }