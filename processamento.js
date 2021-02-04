
var wb = XLSX.utils.book_new();
wb.SheetNames.push("Data");
var db = [
    ["Paciente", "Mun. Residência", "Idade", "Área", "Ocupação", "Exame", "Dt. Liberação", "Resultado"]
]


function enviar() {
    var nome = document.getElementById("nome").value;
    var residencia = document.getElementById("residencia").value;
    var idade = document.getElementById("idade").value;
    var area = document.getElementById("area").value;
    var ocupacao = document.getElementById("ocupacao").value;
    var exame = document.getElementById("exame").value;
    var data = document.getElementById("data").value;
    var resultado = document.getElementById("resultado").value;
    var cedula = [nome, residencia, idade, area, ocupacao, exame, data, resultado]
    db.push(cedula)

    var ws = XLSX.utils.aoa_to_sheet(db);
    wb.Sheets["Data"] = ws
    alert("Seus dados foram salvos com sucesso!!")
    console.log(ws)
}

var ws = XLSX.utils.aoa_to_sheet(db);
wb.Sheets["Data"] = ws



function s2ab(s) {
    var buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
    var view = new Uint8Array(buf); //create uint8array as viewer
    for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF; //convert to octet
    return buf;
}

function criarTabela() {
    alert("Sua planilha foi criada...! \n aguarde o download...!")
    var wbout = XLSX.writeFile(wb, 'planilhacriada.xlsx');
    saveAs(new Blob([s2ab(wbout)]), );
}
