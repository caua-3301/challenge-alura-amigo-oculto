export default class Database {
    //array que representa um banco de dados
    static database = [];

    //adiciona um dado
    static addData = (data) => {
        this.database.push(data.trim());
    }

    //recuperaOsDados
    static getData = () => {
        return this.database;
    }

    //limpa o banco
    static resetData = () => {
        this.database = [];
    }
}
