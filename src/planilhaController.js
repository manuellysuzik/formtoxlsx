import Planilha from './planilha.js'
const jsxls = require('json2xls')

class planilhaController {
    async store(req, res) {
        var { autor, titulo, nome, linhas, colunas } = await req.body
        Planilha.montar(titulo,autor,nome)
        Planilha.inserir_colunas(colunas)
        Planilha.inserir_linhas(linhas)
        Planilha.salvar()
        return res.json({text:"Concluído"})


    }
    view(req,res){
        return res.download(`${Planilha.nome_planilha}.xlsx`)
    }

}

export default new planilhaController()