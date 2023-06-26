    
    let eleves = [
        {
            prenom:"luna",
            point:73,
            note:"",
        },
        {
            prenom:"joe",
            point:80,
            note:"",
        },
        {
            prenom:"thomas",
            point:79,
            note:"",
        },
        {
            prenom:"raman",
            point:45,
            note:"",
        },
        {
            prenom:"alexandra",
            point:92,
            note:"",
        },
        {
            prenom:"Jeanne",
            point:42,
            note:"",
        },
        
    ]
    
    
    
    
    let topEleve = 0;
    let nomTopEleve = "";
    
    for (let i = 0; i < eleves.length; i++) {
        
        
        if (eleves[i].point > topEleve) {
            topEleve = eleves[i].point;
            nomTopEleve = eleves[i].prenom;
        
        }
        
        
    }

console.log(`le scor de mon eleve le plus balaise est ${nomTopEleve} avec un scoor de ${topEleve} point, bravau a toi !!!!`);

