

const allButtonOnThePage = document.querySelectorAll('.button-all-copy')

function addTheClickEvent(item) {
    item.addEventListener("click", function (event) {
        copyCss(item, event)
    })
}

allButtonOnThePage.forEach(addTheClickEvent) 

function copyCss(item, event){
    navigator.clipboard.readText().then(

    )
}