// benih = (pengali * benih + inkrement) % modulus;

document.addEventListener("readystatechange",()=>{
    const results = document.getElementsByClassName("result")[0];
    document.getElementById("calculate").addEventListener("click",calculate);
    document.getElementsByClassName("reset")[0].addEventListener("click",()=>{
        results.classList.add("hidden");
    })
})

function createRowTable(val1,val2){
    return `<tr>
                <td>${val1}</td>
                <td>${val2}</td>
            </tr>`;
}

function calculate(){
    const results = document.getElementsByClassName("result")[0];
    const bodyResult = document.getElementsByTagName("tbody")[0];
   
    const m = document.getElementById("m").value;
    const c = document.getElementById("c").value;
    const a = document.getElementById("a").value;
    const x0 = document.getElementById("x0").value;
    const n = document.getElementById("n").value;
    let benih = x0;
    let result = "";

    for (let index = 0; index < n; index++) {
        benih = (Number(a) * Number(benih) + Number(c)) % Number(m);
        result += createRowTable(index + 1,benih);
    }

    bodyResult.innerHTML = result;
    results.classList.remove("hidden");
}