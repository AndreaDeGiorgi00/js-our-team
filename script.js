/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.


MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede e rendere la pagina gradevole (potete usare lo screen in allegato come spunto*/

let arrayGlobale = [
    {
        name : "Wayne Barnett" ,
        role : "Founder & CEO",
        immagine : "wayne-barnett-founder-ceo.jpg" 
    } ,

    {
        name : "Angela Caroll" ,
        role : "Chief Editor",
        immagine : "angela-caroll-chief-editor.jpg" 
    } ,
    
    {
        name : "walter Gordon" ,
        role : "Office Manager ",
        immagine : "walter-gordon-office-manager.jpg" 
    } ,

    {
        name : "walter Gordon" ,
        role : "Office Manager ",
        immagine : "walter-gordon-office-manager.jpg" 
    },

    {
        name : "Angela Loper" ,
        role : "Social Media Manager",
        immagine : "angela-lopez-social-media-manager.jpg" 
    },

    {
        name : "Scott Estrada" ,
        role : "Developer",
        immagine : "scott-estrada-developer.jpg" 
    },

    {
        name : "Barbara Ramos " ,
        role : "Graphic Designer",
        immagine : "barbara-ramos-graphic-designer.jpg" 
    },


];
function allconsolelog (bigData){
    for (let y=0 ; y < bigData.length; y++){

        console.log("--------------------");
        
        for (let x in bigData[y]){

            let Name = x.name;

            console.log(bigData[y][`${x}`]);
            
        }
    }
    
    console.log(bigData[1].name)
}
allconsolelog(arrayGlobale);