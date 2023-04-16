

function copyFileContent(htmlitem) {
    const _parseCSS = (response) => {
        return response.text()
    }

    const _clipboardCopy = (text) => {
        navigator.clipboard.writeText(text)
            .then(
                () => {
                    console.log('CSS copiado!');
                    alert('CSS copiado')
                }
            )
            .catch(
                error => {
                    console.error('Erro ao copiar CSS:', error);
                    window.alert('Erro ao copiar CSS');
                }
            )

    }

    const filepath = htmlitem.getAttribute("data-filepath")
    const hasFilepath = filepath && filepath !== ''
    if (!hasFilepath) {
        console.error('a dev sarah esqueceu de botar o data-filepath')
        return
    }

    fetch(filepath)
        .then(_parseCSS)
        .then(_clipboardCopy)
}
