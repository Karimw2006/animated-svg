const logo = document.querySelectorAll('#logo path');

for(let i = 0; i<logo.length; i++){
    console.log(`the length of letter ${i} is ${logo[i].getTotalLength()}`)
}