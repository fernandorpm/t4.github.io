const office = document.getElementById("office");
const development = document.getElementById("development");
const design = document.getElementById("design");
const server = document.getElementById("server");

office.style.display = "none";
development.style.display = "none";
design.style.display = "none";
server.style.display = "none";

document.getElementById("btnOffice").onclick = function(){
    if (office.style.display === "none") {
        office.style.display = "block";
        development.style.display = "none";
        design.style.display = "none";
        server.style.display = "none";
    } 
};

document.getElementById("btnDevelopment").onclick = function(){
    if (development.style.display === "none") {
        office.style.display = "none";
        development.style.display = "block";
        design.style.display = "none";
        server.style.display = "none";
    } 
};

document.getElementById("btnDesign").onclick = function(){
    if (design.style.display === "none") {
        office.style.display = "none";
        development.style.display = "none";
        design.style.display = "block";
        server.style.display = "none";
    } 
};

document.getElementById("btnServer").onclick = function(){
    if (server.style.display === "none") {
        office.style.display = "none";
        development.style.display = "none";
        design.style.display = "none";
        server.style.display = "block";
    } 
};

//_____________________________________OFFICE________________________________________
document.getElementById("btnOff").onclick = function(){
    var dcOffice = document.getElementById("dcOffice");
    var dcProc = document.getElementById("dcProc");
    var dcMae = document.getElementById("dcMae");
    var dcHD = document.getElementById("dcHD");
    var dcGab = document.getElementById("dcGab");

    var dcTotal = document.getElementById("dcTotal");
    var valorTotal = document.getElementById("valorTotal");

    const qtPc = document.getElementById("iptOff").value;
    const a = Math.trunc(qtPc*1.0 + 30);
    const b = Math.trunc(qtPc*0.8 + 30);
    const c = Math.trunc(qtPc*0.3 + 20);
    const d = Math.trunc(qtPc*0.4 + 16);
    const e = Math.trunc(qtPc*0.6 + 18);
    dcOffice.innerHTML = a + ",00";
    dcProc.innerHTML = b + ",00";
    dcMae.innerHTML = c + ",00";
    dcHD.innerHTML = d + ",00";
    dcGab.innerHTML = e + ",00";

    dcTotal.innerHTML = a+b+c+d+e + ",00";
    valorTotal.innerHTML = 1400 - (a+b+c+d+e) + ",00";

    $('html, body').animate({
        scrollTop: $('#office').offset().top
    }, 500);
};

//___________________________________DEVELOPMENT_____________________________________
document.getElementById("btnDev").onclick = function(){
    var dcOffice = document.getElementById("dcDevelopment");
    var dcProc = document.getElementById("dcProcD");
    var dcMae = document.getElementById("dcMaeD");
    var dcHD = document.getElementById("dcHDD");
    var dcVid = document.getElementById("dcVidD");
    var dcGab = document.getElementById("dcGabD");

    var dcTotal = document.getElementById("dcTotalD");
    var valorTotal = document.getElementById("valorTotalD");

    const qtPc = document.getElementById("iptDev").value;
    const a = Math.trunc(qtPc*0.8 + 22);
    const b = Math.trunc(qtPc*1.4 + 55);
    const c = Math.trunc(qtPc*0.5 + 20);
    const d = Math.trunc(qtPc*0.7 + 26);
    const e = Math.trunc(qtPc*0.6 + 28);
    const f = Math.trunc(qtPc*1.1 + 40);
    dcOffice.innerHTML = a + ",00";
    dcProc.innerHTML = b + ",00";
    dcMae.innerHTML = c + ",00";
    dcHD.innerHTML = d + ",00";
    dcGab.innerHTML = e + ",00";
    dcVid.innerHTML = f + ",00";

    dcTotal.innerHTML = a+b+c+d+e+f + ",00";
    valorTotal.innerHTML = 2600 - (a+b+c+d+e+f) + ",00";
};

//_____________________________________DESIGN________________________________________
document.getElementById("btnDes").onclick = function(){
    var dcOffice = document.getElementById("dcDesign");
    var dcProc = document.getElementById("dcProcE");
    var dcMae = document.getElementById("dcMaeE");
    var dcHD = document.getElementById("dcHDE");
    var dcGab = document.getElementById("dcGabE");
    var dcVid = document.getElementById("dcVidE");

    var dcTotal = document.getElementById("dcTotalE");
    var valorTotal = document.getElementById("valorTotalE");

    const qtPc = document.getElementById("iptDes").value;
    const a = Math.trunc(qtPc*1.6 + 30);
    const b = Math.trunc(qtPc*1.4 + 55);
    const c = Math.trunc(qtPc*0.5 + 20);
    const d = Math.trunc(qtPc*0.4 + 16);
    const e = Math.trunc(qtPc*0.6 + 28);
    const f = Math.trunc(qtPc*1.8 + 65);
    dcOffice.innerHTML = a + ",00";
    dcProc.innerHTML = b + ",00";
    dcMae.innerHTML = c + ",00";
    dcHD.innerHTML = d + ",00";
    dcGab.innerHTML = e + ",00";
    dcVid.innerHTML = f + ",00";
    

    dcTotal.innerHTML = a+b+c+d+e+f + ",00";
    valorTotal.innerHTML = 3100 - (a+b+c+d+e+f) + ",00";
};

//_____________________________________SERVER________________________________________
document.getElementById("btnSer").onclick = function(){
    var dcOffice = document.getElementById("dcServer");
    var dcProc = document.getElementById("dcProcS");
    var dcMae = document.getElementById("dcMaeS");
    var dcHD = document.getElementById("dcHDS");
    var dcGab = document.getElementById("dcGabS");

    var dcTotal = document.getElementById("dcTotalS");
    var valorTotal = document.getElementById("valorTotalS");

    const qtPc = document.getElementById("iptSer").value;
    const a = Math.trunc(qtPc*1.0 + 30);
    const b = Math.trunc(qtPc*0.8 + 30);
    const c = Math.trunc(qtPc*0.3 + 20);
    const d = Math.trunc(qtPc*0.4 + 16);
    const e = Math.trunc(qtPc*0.6 + 18);
    dcOffice.innerHTML = a + ",00";
    dcProc.innerHTML = b + ",00";
    dcMae.innerHTML = c + ",00";
    dcHD.innerHTML = d + ",00";
    dcGab.innerHTML = e + ",00";

    dcTotal.innerHTML = a+b+c+d+e + ",00";
    valorTotal.innerHTML = 1400 - (a+b+c+d+e) + ",00";
};

