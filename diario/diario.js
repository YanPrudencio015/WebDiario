module.exports = {

    diario:[{
        data:00/0/00,
        titulo:"Diário, primeiro dia",
        texto:"Como foi o meu dia",
        ensinamento:"O que as situações do dia me ensinou ?"
    }],

    todosDias(){
        return this.diario
    },

    NovoDia(data, titulo,texto, ensinamento){
      this.diario.push({data,titulo,texto,ensinamento})  
    }
}