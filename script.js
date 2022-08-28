let x = 0;
function pesquisar() {
    x++    
    fetch(`https://pokeapi.co/api/v2/pokemon/${x}`)
    .then(response => response.json().then(function(data){
        console.log(data)
        teste(data)
        imagens(data)
    }))
}

function imagens(dados) {

    if(dados.types[0].type.name == 'normal') {
        tela.style.backgroundImage = "url(Imagens/f2fb9db8191078f72c8b98fee93155c56e6e8674r1-673-421v2_hq.jpg)";
    }

    else if(dados.types[0].type.name == 'flying') {
        tela.style.backgroundImage = "url(Imagens/f2fb9db8191078f72c8b98fee93155c56e6e8674r1-673-421v2_hq.jpg)";
    }

    else if(dados.types[0].type.name == 'water') {
            tela.style.backgroundImage = "url(https://pm1.narvii.com/7243/46d5cfd672a1e2fca16c78d728e2b10cb57f7ce0r1-669-521v2_hq.jpg)";
    }

    else if(dados.types[0].type.name == 'fire') {
        tela.style.backgroundImage = "url(https://pm1.narvii.com/7243/8ee17e7a8790303410b30a2fbcb18183fc12166er1-623-499v2_hq.jpg)";
    }
    else if(dados.types[0].type.name == 'grass') {
        tela.style.backgroundImage = "url(https://pm1.narvii.com/7243/0b36782d158f6da0639e38ebf94af3d5c37288c2r1-668-486v2_hq.jpg)";
    }

    else if(dados.types[0].type.name == 'ghost') {
        tela.style.backgroundImage = "url(https://pm1.narvii.com/7243/1932c3243860328e1f1cd07d65e02649672380ecr1-700-444v2_hq.jpg)";
    }

    else if(dados.types[0].type.name == 'bug') {
        tela.style.backgroundImage = "url(https://pm1.narvii.com/7243/0d2736d705781ea116d08621abbfefae60a971c2r1-700-542v2_hq.jpg)";
    }

    else if(dados.types[0].type.name == 'ground') {
        tela.style.backgroundImage = "url(https://pm1.narvii.com/7243/10ed1c931a1b46035f01315731b1f3f70ec24f5er1-656-454v2_hq.jpg)";
    }

    else if(dados.types[0].type.name == 'rock') {
        tela.style.backgroundImage = "url(https://pm1.narvii.com/7243/843acea2bde21f7ae7e1f17c0da831acea46a2acr1-692-503v2_hq.jpg)";
    }

    else if(dados.types[0].type.name == 'electric') {
        tela.style.backgroundImage = "url(https://pm1.narvii.com/7243/00eaa3cfd5033ff306b23965e1c50b31577dd464r1-647-485v2_hq.jpg)";
    }

    else if(dados.types[0].type.name == 'steel') {
        tela.style.backgroundImage = "url(https://pm1.narvii.com/7243/bc538f6da74b633d36b48108ddd07b7a2410a2afr1-650-498v2_hq.jpg)";
    }

    else if(dados.types[0].type.name == 'fairy') {
        tela.style.backgroundImage = "url(https://pm1.narvii.com/7243/61770aa4b0259c06cd4b1fa490007c29e27d6683r1-663-565v2_hq.jpg)";
    }

    else if(dados.types[0].type.name == 'ice') {
        tela.style.backgroundImage = "url(https://pm1.narvii.com/7243/fc715e840930cac4f0577c69aa6721ff0b689b11r1-677-462v2_hq.jpg)";
    }
    
    else if(dados.types[0].type.name == 'psychic') {
        tela.style.backgroundImage = "url(https://pm1.narvii.com/7243/19a53b46a48f55a346f130092cb2c8d8fcf88af0r1-642-671v2_hq.jpg)";
    }
    
    else if(dados.types[0].type.name == 'dragon') {
        tela.style.backgroundImage = "url(https://pm1.narvii.com/7243/adcbbe4c769bbaf0858abef9625077294911804br1-593-534v2_hq.jpg)";
    }
    
    else if(dados.types[0].type.name == 'poison') {
        tela.style.backgroundImage = "url(https://pm1.narvii.com/7243/b0945fed2f0cc9fa340c6e7deb851c14ddf53e30r1-575-530v2_hq.jpg)";
    }
    
    else if(dados.types[0].type.name == 'dark') {
        tela.style.backgroundImage = "url(https://pm1.narvii.com/7243/0ea89cf278223e13003a6897d3091b7d99271cf6r1-688-475v2_hq.jpg)";
    }
}


function teste(dados) {
    const tela = document.getElementById('tela')
    const info = document.getElementById('info')
    tela.innerHTML = `<img src="${dados.sprites.front_default}" alt="pokemon" class="imagem">` 
    info.innerHTML = `
    <h4>Id: ${dados.id} </h4>
    <h4>Nome: ${dados.name}</h4>
    <h4>Peso: ${dados.weight} </h4>
    <h4>Tipo: ${dados.types[0].type.name}</h4>
    <h4>Habilidade: ${dados.abilities[0].ability.name}</h4>
    <h4>Experiência-Base: ${dados.base_experience}</h4>`
}   

function statu() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${x}`)
        .then(response => response.json().then(function(data){
            status(data)
        }))
    function status(dados) {
        const info = document.getElementById('info')
        
        info.innerHTML = `<h4>HP: ${dados.stats[0].base_stat}</h4>
                          <h4>Attack: ${dados.stats[1].base_stat}</h4>
                          <h4>Defense: ${dados.stats[2].base_stat}</h4>
                          <h4>Special-Attack: ${dados.stats[3].base_stat}</h4>
                          <h4>Speed: ${dados.stats[5].base_stat}</h4>
                          <h4>Special-Defense: ${dados.stats[4].base_stat}</h4>`
    }
}


function informa() {    
    fetch(`https://pokeapi.co/api/v2/pokemon/${x}`)
    .then(response => response.json().then(function(data){
        teste(data)
        
    }))
}


function testando() {
    const campo = document.getElementById('pesquisa').value
    
    x = campo

    fetch(`https://pokeapi.co/api/v2/pokemon/${campo}`)
    .then(response => response.json().then(function(data){
        console.log(data)
        teste(data)
        imagens(data)
    }))
}

