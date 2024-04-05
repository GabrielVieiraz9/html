let isIndex2Loaded = false;

function toggleContent() {
    if (isIndex2Loaded) {
        loadIndex1Content();
    } else {
        loadIndex2Content();
    }
    isIndex2Loaded = !isIndex2Loaded;
}

function loadIndex1Content() {
    fetch('index.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('.content').innerHTML = data;
        changeBackgroundImage('/red_texture.jpg'); // Altera a imagem de fundo para red_texture.jpg
    })
    .catch(error => console.error('Erro ao carregar o novo conteúdo:', error));
}

function loadIndex2Content() {
    fetch('index2.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('.content').innerHTML = data;
        changeBackgroundImage('/blue_texture.jpg'); // Altera a imagem de fundo para blue_texture.jpg
    })
    .catch(error => console.error('Erro ao carregar o novo conteúdo:', error));
}

function changeBackgroundImage(imageUrl) {
    var stageContainer = document.querySelector('.stage-container');
    stageContainer.style.backgroundImage = "url('" + imageUrl + "')";
}