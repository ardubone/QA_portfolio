async function load(){
    console.log('Начало загрузки');
    progress();
    console.log('Загрузка окончена');
}

async function progress(){
    await emulation(100000000); 
    console.log('Загружено');
}

function emulation(n){
    for(let i = 0; i < n; i++){
    }
}

load();