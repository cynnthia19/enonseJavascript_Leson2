let todoList=[];

function addTask(deskripsyon){
    todoList.push(deskripsyon);
}

function displayTasks(){
    if(todoList.length > 0){
        console.log("Men lis tach ou yo")
        for(let i=0;i<todoList.length;i++){
            
            console.log(i+1+ "- " +todoList[i]);
        }
    }
    else{
        console.log("Ou pat ajoute tach, lis tach ou a vid")
    }
    
}

function markTaskDone(index){
    if(todoList.length > 0){
        let indexItilizate = index - 1;
        if(indexItilizate >=0 && indexItilizate < todoList.length) {
            todoList.splice(indexItilizate,1);
        }
        else{
            console.log("endis ou mete a pa valid, ou pa ka retire tach sa")
        }
    }
    else{
        console.log("ou pap ka efase tach paske lis tach ou a vid")
    }
    
}
let choice;
do{
    choice = parseInt(prompt("\Meni:\n 1. Ekri 1 siw vle ajoute yon tach\n 2. ekri 2 siw vle afiche tout tach ou yo \n 3. Siw fini yon tach ekri 3\n 4. siw vle soti net nan pwogram nan ekri 4"));
    switch(choice)
    {
        case 1:
            let ajouteTach=prompt("Antre deskripsyon tach ou a")
            addTask(ajouteTach);
            break;
        case 2:
            displayTasks();
            break;
        case 3:
            let indis=parseInt(prompt("mete indis tach ou fini an"))
            markTaskDone(indis);
            break;
        case 4:
            break;
        default:
            console.log("Ou fe yon move chwa");
            break;
    }
}
while(choice !==4)
