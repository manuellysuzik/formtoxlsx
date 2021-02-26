import XLSX from 'xlsx'

class Planilha{
    constructor(){
        this.wb = XLSX.utils.book_new()
    }
    montar(titulo,autor,nome){
        this.titulo = titulo
        this.autor = autor
        this.nome_planilha = nome

        this.wb.Props={
            Title:this.titulo,
            Autor:this.autor,
            CreatedDate: new Date().toLocaleString
        }

        this.wb.SheetNames.push([`${this.nome_planilha}`])

    }
    async inserir_colunas(colunas){
        
        this.colunas = colunas
        this.dados = [colunas]
    }
    inserir_linhas(linhas){

        this.linhas = linhas
        this.dados.push(linhas)
    }
    async salvar(){
        //this.dados = await this.dados.reverse()
        this.ws = await XLSX.utils.aoa_to_sheet(this.dados)
        this.wb.Sheets[`${this.nome_planilha}`] = this.ws
        await XLSX.write(this.wb,{bookType:'xlsx',type:'binary'})
        XLSX.writeFile(this.wb,`${this.nome_planilha}.xlsx`,{bookType:'xlsx',type:'base64'})
    }
}
export default new Planilha()