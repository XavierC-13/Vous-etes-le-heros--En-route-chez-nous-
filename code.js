




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
      img2:"none",
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
      img2:"none",
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
      img: "assets/img/shortcut.jpg",  
      img2:"assets/img/alley.jpg",
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
    
    uber: {
      subtitle: "Uber Driver?",
      text: "Le chauffeur du Uber à l'aire un peu suspect, préfères-tu marcher ou sa vaux pas la peine?",
      img: "img/uber_driver.jpg",
      img2:"none",
      options: [
        {
          text: "Marcher 1h de trajet",
          action: "goToChapter(`marche_choix_chemin`)"
        },
        {
          text: "ignorer les stéréotypes",
          action: "goToChapter(`maison`)"
        },
      ]
    },
 
       prison: {
        subtitle: "Tu as été arrêté",
        text: "Honnêtement tu le mérites. Qui se met à s'enfuir de la police??? C'est comme demmander de se faire arrêter.",
        img: "assets/img/Arrested.jpg",
        img2:"none",
        options: [
          {
            text: "Recommencer",
            action: "goToChapter(`mise_en_contexte`)"
          },
         
        ]
      },

      prisonh: {
        subtitle: "Est-ce que sa en vallait la peine?",
        text: "Tu as au moins obtenue tes clés de maisons. L'homme t'as expliqué qu'il l'ai avait trouver dans cette ruelle et qu'il attendait le propriétaire.  Malheureusement, la police te voit parler au monsieur suspect et pense que des activités illicites ont lieu, donc ils vous arrêtent les deux.",
        img: "assets/img/police_arrest.jpg",
        img2:"none",
        options: [
          {
            text: "Recommencer",
            action: "goToChapter(`mise_en_contexte`)"
          },
        ]
      },

      prisonr: {
        subtitle: "Tu as été arrêté",
        text: " Honnêtement tu le mérites. Qui va voir la police demande s'ils ont un problème pour ensuite partir en courant. Peut-être que tu veux aller en prison?",
        img: "assets/img/police_arrest.jpg",
        img2:"none",
        options: [
          {
            text: "Recommencer",
            action: "goToChapter(`mise_en_contexte`)"
          },
        ]
      },

      homme_mysterieux: {
        subtitle: "Un homme mystérieux apparait",
        text: "Tu vois un homme debout qui regarde le ciel sans rien faire. Une fois rendu près de lui, il t'adresse la parole que fais-tu? ",
        img: "assets/img/man_in_alley.jpg",
        img2:"none",
        options: [
          {
            text: "l'ignorer et continuer",
            action: "goToChapter(`punition`)"
          },
          {
            text: "Voir se qu'il a à dire",
            action: "goToChapter(`prisonh`)"
          },
        ]
      },

      punition: {
        subtitle: "Tu as été punis",
        text: "Puisque tu as ignorer l'homme mystérieux, il t'a kidnappé, il t'explique qu'il n'aime pas les gens impolis et que c'est service pour le reste du monde de s'en débarrasser",
        img: "assets/img/punishment.jpg",
        img2:"none",
        options: [
          {
            text: "Recommencer",
            action: "goToChapter(`mise_en_contexte`)"
          },
        ]
      },

      fin: {
        subtitle: "Félicition t'a réussi à te rendre chez toi!!!",
        text: "Tu as enfin fini cette adventure ultra réaliste et immersive. Merci d'avoir participer!",
        img: "",
        img2:"none",
        options: [
          {
            text: "assets/img/Congratulations.jpg",
            action: "goToChapter(`mise_en_contexte`)"
          },
        ]
      },

  }