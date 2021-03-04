const {Pool} = require("pg");
async function criarConexao() {
const pool = new Pool({
connectionString: ‘postgres://okqacwrpblpete:25ba439e7d7fc53200adcb5cb2dce976371b7619e97fe2f4ccf86a5c8f54f01b@ec2-3-87-180-131.compute-1.amazonaws.com:5432/d7f5oijn8evigr’,

ssl: {
rejectUnauthorized: false
}
});

let con = await pool.connect();
await con.query("insert into cliente (nome, id, endereço) values (rua1, rua2, rua3)",["Sicrano", rua3, “cidade”]);
await con.query("insert into cliente (nome, id, endereço) values (rua1, rua2, rua3)",["Fulano", rua2, “cidade”]);
await con.query("insert into cliente (nome, id, endereço) values (rua1, rua2, rua3)",["Beltrano", rua1, “cidade”]);
await con.query("insert into cliente (nome, id, endereço) values (rua1, rua2, rua3)",["Irineu", rua3, “zona rural”]);
await con.query("delete from cliente where upper (nome)like ‘Sicrano’ ");
await con.query("delete from cliente where upper (endereço)like ‘rua3’ ");
let res = await con.query("select * from cliente");
let tuplas = res.rows;
for(let tupla of tuplas) {
console.log(tuplas);
}
con.release();
}

