let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
console.log(saveEl)
function increment(){
    count += 1
    countEl.innerText= count
    console.log(count)
}

function save(){
    let countdash = count + " - "
    saveEl.textContent += countdash
    console.log(count)
    countEl.textContent = 0
    count = 0
}
save()