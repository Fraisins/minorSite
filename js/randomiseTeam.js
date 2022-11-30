function GetRandomNumberInRange(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function GetCharArray(){
    let array = []
    let checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

    for (let i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value);
    }
    return array;
}



function randomiseArray(arr){
    let randArr = [];
    let size;
    if (arr.length < 4){
        size = arr.length;
    }
    else{
        size = 4;
    }
    for(let i = 0; i < size; i++){
        let newRand = GetRandomNumberInRange(0, arr.length);
        while (randArr.includes(arr[newRand])){
            newRand = GetRandomNumberInRange(0, arr.length);
        }
        randArr[i]=arr[newRand];
    }
    return randArr;
}

function randomiseTeam(){
    teamArr = randomiseArray(GetCharArray());
    console.log(teamArr);

    if (teamArr.length > 0){
        let images = document.getElementsByClassName('team');
    

    for (var i = 0; i < images.length; i++) {

        images[i].style.display = 'none'
        let a;

        switch(teamArr[i]){
            case "Lloyd":
                a = "../img/lloyd.gif";
                break;
            case "Colette":
                a = "../img/colette.gif";
                break;
            case "Genis":
                a = "../img/genis.gif";
                break;
            case "Rayne":
                a = "../img/rayne.gif";
                break;
            case "Kratos":
                a = "../img/kratos.gif";
                break;
            case "Sheena":
                a = "../img/sheena.gif";
                break;
            case "Zelos":
                a = "../img/zelos.gif";
                break;
            case "Regal":
                a = "../img/regal.gif";
                break;
            case "Presea":
                a = "../img/presea.gif";
                break;
        }
        console.log(a);

        if (a == undefined){
            images[i].style.display = 'none'
        }
        else{
            images[i].style.display = 'block'
        }

        images[i].src = a;
        document.getElementById('team').value = teamArr;
        }
    }
    else{
        document.getElementById('team').value = teamArr;
    }

    
}
