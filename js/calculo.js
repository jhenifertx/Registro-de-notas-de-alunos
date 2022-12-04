// criar um array para ser essa lista GLOBAL
var Tabela_alunos = [];
var media = 0;

// função para adicionar os arrays
function Calcular() {
	// variaveis dos valores de campos input
	var nome = document.getElementById('nome_aluno').value;
	var turma = document.getElementById('turma_aluno').value;
	var disciplina = document.getElementById('disciplina_aluno').value;
	var n1 = parseFloat(document.getElementById('n1').value);
	var n2 =  parseFloat(document.getElementById('n2').value);
	var n3 = parseFloat(document.getElementById('n3').value);
	// condição para cadastrar/inserir os valores dentro do array
	if(nome !== '' && turma !== '' && disciplina !== '' && n1 !== '' && n2 !== '' && n3 !== ''){
	// condição verdadeira
	
		// criar um array LOCAL
		var alunos = {
			id_aluno:'',
			nome_aluno:'',
			turma_aluno: '',
			disc_aluno: '',
			n1: '',
			n2: '',
			n3: '',
		};  // objeto alunos

		var id = 1;
		
		for (var row = 0; row < Tabela_alunos.length; row++) {
			id = 1 + id;
		}

		// adiciona elementos ao final de um array e retorna um novo comprimento deste array.
		alunos.id_aluno = id;
		alunos.nome_aluno = nome;
		alunos.turma_aluno = turma;
		alunos.disc_aluno = disciplina;
		alunos.n1 = n1;
		alunos.n2 = n2;
		alunos.n3 = n3;
		console.log(alunos);

		Tabela_alunos.push(alunos);
		
		// limpa as msg de erro
		document.getElementById('msg_erro_nome').innerHTML = '';
		document.getElementById('msg_erro_turma').innerHTML = '';
		document.getElementById('msg_erro_disciplina').innerHTML = '';
		document.getElementById('msg_erro_n1').innerHTML = '';
		document.getElementById('msg_erro_n2').innerHTML = '';
		document.getElementById('msg_erro_n3').innerHTML = '';
		

		// limpa os valores dos inputs que foram cadastrados
		document.getElementById('nome_aluno').innerHTML = '';
		document.getElementById('turma_aluno').innerHTML = '';
		document.getElementById('disciplina_aluno').innerHTML = '';
		document.getElementById('n1').innerHTML = '';
		document.getElementById('n2').innerHTML = '';
		document.getElementById('n3').innerHTML = '';

		// aparecer mensagem caso o cadastro seja realizado com sucesso
		swal({
            title: "Cadastro realizado com sucesso",
            text: "você cadastrou um novo aluno",
            icon: "success",
            button: "OK",
        });

		listar();

	} else{

		if (nome == '' ){
		// condição falsa

		// validando os campos caso não possuem dados ou campos que sejam numéricos
		
			var erro_nome = document.getElementById('msg_erro_nome');
			console.log('Sem o campo nome');

			erro_nome.innerHTML = 'Por favor, preencha o campo nome!';
			
		} else{ document.getElementById('msg_erro_nome').innerHTML = ''; }

		if (turma == ''){

			var erro_turma = document.getElementById('msg_erro_turma');
			console.log('Sem o campo turma');

			erro_turma.innerHTML = 'Por favor, preencha o campo com a turma!';
			
		} else{ document.getElementById('msg_erro_turma').innerHTML = ''; }


		if (disciplina == ''){

			var erro_disciplina = document.getElementById('msg_erro_disciplina');
			console.log('Sem o campo disciplina');

			erro_disciplina.innerHTML = 'Por favor, preencha o campo com a disciplina!';
			
		} else{ document.getElementById('msg_erro_disciplina').innerHTML = ''; }


		if (n1 == 0){

			var erro_n1 = document.getElementById('msg_erro_n1');
			console.log('Sem a 1 nota');

			erro_n1.innerHTML = 'Por favor, preencha o campo com a 1 nota!';
			
		} else{ document.getElementById('msg_erro_n1').innerHTML = ''; }


		if (n2 == 0){

			var erro_n2 = document.getElementById('msg_erro_n2');
			console.log('Sem a 2 nota');

			erro_n2.innerHTML = 'Por favor, preencha o campo com a 2 nota!';
			
		} else{ document.getElementById('msg_erro_n2').innerHTML = ''; }


		if (n3 == 0){

			var erro_n3 = document.getElementById('msg_erro_n3');
			console.log('Sem a 3 nota');

			erro_n3.innerHTML = 'Por favor, preencha o campo com a 3 nota!';
			
		} else{ document.getElementById('msg_erro_n3').innerHTML = ''; }



		//validando se o valor é ou não numérico

		if(isNaN(n1)){
			var erro_1 = document.getElementById('erro_num_n1');
			console.log('Não numérico');
			erro_1.innerHTML = 'Por favor, preencha o campo com um valor numérico!';
		  }else{ document.getElementById('erro_num_n1').innerHTML = ''; }

		  if(isNaN(n2)){
			var erro_2 = document.getElementById('erro_num_n2');
			console.log('Não numérico');
			erro_2.innerHTML = 'Por favor, preencha o campo com um valor numérico!';
		  }else{ document.getElementById('erro_num_n2').innerHTML = '';}

		  if(isNaN(n3)){
			var erro_3 = document.getElementById('erro_num_n3');
			console.log('Não numérico');
			erro_3.innerHTML = 'Por favor, preencha o campo com um valor numérico!';
		  }else{ document.getElementById('erro_num_n3').innerHTML = '';}


		  //validando se as notas são maiores que 10
		  if (n1 > 10){
			var erro_numeros1 = document.getElementById('erro_vn1');
			console.log('Não esta entre os numeros 0 e 10');

			erro_numeros1.innerHTML = 'As notas devem serem menores ou iguais a 10';

		  }else{ document.getElementById('erro_vn1').innerHTML = ''; }



		  if (n2 > 10){
			var erro_numeros2 = document.getElementById('erro_vn2');
			console.log('Não esta entre os numeros 0 e 10');

			erro_numeros2.innerHTML = 'As notas devem serem menores ou iguais a 10';

		  }else{ document.getElementById('erro_vn2').innerHTML = ''; }



		  if (n3 > 10){
			var erro_numeros3 = document.getElementById('erro_vn3');
			console.log('Não esta entre os numeros 0 e 10');

			erro_numeros3.innerHTML = 'As notas devem serem menores ou iguais a 10';

		  }else{ document.getElementById('erro_vn3').innerHTML = ''; }



		  //validando se as notas são menores que 0
		  if (n1 < 0){
			var erro_numeros12 = document.getElementById('erro_vn12');
			console.log('Não esta entre os numeros 0 e 10');

			erro_numeros12.innerHTML = 'As notas devem ser maiores que 0!';

		  }else{ document.getElementById('erro_vn12').innerHTML = ''; }



		  if (n2 < 0){
			var erro_numeros22 = document.getElementById('erro_vn22');
			console.log('Não esta entre os numeros 0 e 10');

			erro_numeros22.innerHTML = 'As notas devem ser maiores que 0!';

		  }else{ document.getElementById('erro_vn22').innerHTML = ''; }



		  if (n3 < 0){
			var erro_numeros32 = document.getElementById('erro_vn32');
			console.log('Não esta entre os numeros 0 e 10');

			erro_numeros32.innerHTML = 'As notas devem ser maiores que 0!';

		  }else{ document.getElementById('erro_vn32').innerHTML = ''; }

		swal({
            title: "Verifique os campos!",
            text: "Você precisa preencher todos os campos",
            icon: "error",
            button: "OK",
        });
	}

} // função add ()


function listar() { 

if (Tabela_alunos == '') {
	swal({
		title: "Sem nenhum cadastro!",
		text: "cadastre um aluno",
		icon: "warning",
		button: "OK",
	});
	document.getElementById('mostrar').innerHTML = '<h4 class="form-title" style="margin="10px">Nenhum resultado foi encontrado!</h4> <br>';
}else{
	// teste com o map
	let exibeInformacoes = Tabela_alunos.map(
		dados => ' Aluno: ' + `${dados.nome_aluno}` + ' ; ' + ' Turma: ' + `${dados.turma_aluno}`
	); 
	console.log( exibeInformacoes )

	// variavel listaHTML irá listar os dados dentro do documento html em tabela
	var TabelaHTML = '<h4 class="form-title">Tabela de notas e médias</h4> <br>';
	TabelaHTML += '<table class="table"><thead>';
	TabelaHTML += '<tr><th scope="col">ID</th>';
	TabelaHTML += ' <th scope="col">NOME ALUNO</th>';
	TabelaHTML += ' <th scope="col">TURMA</th>';
	TabelaHTML += '<th scope="col">DISCIPLINA</th>';
	TabelaHTML += '<th scope="col">1 NOTA</th>';
	TabelaHTML += '<th scope="col">2 NOTA</th>';
	TabelaHTML += '<th scope="col">3 NOTA</th>';
	TabelaHTML += '<th scope="col">MÉDIA</th>';
	TabelaHTML += '<th scope="col">SITUAÇÃO</th></tr>';
	TabelaHTML += ' </thead>';


	Tabela_alunos.forEach(function(alunosCadastrados, posicao){
	console.log('Objeto array dos alunos listados:');
	console.log(alunosCadastrados);
	
	// utilizei o reduce para me retornar a media de cada aluno
	var notas = [alunosCadastrados.n1, alunosCadastrados.n2, alunosCadastrados.n3]
	media_aluno = notas.reduce(function (notas_calc, item, indice, array) {
	notas_calc = notas_calc + item;
	if(indice == array.length - 1) {
		return parseFloat(notas_calc / array.length).toFixed(2); // o length consegue trazer a quantidade de dados cadastrados dentro do array, sendo assim este numero é o divisor para o calculo da media
	}
	return notas_calc;

	});
	console.log(media_aluno); // ok

	// outro método para calcular a media
	//media = parseFloat(( alunosCadastrados.n1 + alunosCadastrados.n2 + alunosCadastrados.n3) /3).toFixed(2); 
	//console.log(media);

	var situacao='';

	if (media_aluno >= 5){
		situacao = 'Aprovado';
	} else {
		situacao = 'Exame';
	}

	TabelaHTML +=
    '<tbody><td>' +
	alunosCadastrados.id_aluno  +
    ' </td> <td>' +
    alunosCadastrados.nome_aluno +
    ' </td> <td>' +
    alunosCadastrados.turma_aluno +
    ' </td> <td> ' +
    alunosCadastrados.disc_aluno +
    ' </td> <td> ' +
    alunosCadastrados.n1 +
    ' </td> <td> ' +
	alunosCadastrados.n2 +
    ' </td> <td> ' +
    alunosCadastrados.n3 +
    ' </td> <td>' +
	media_aluno + '</td> <td>' +
	situacao + '</td> <td> </tbody>';

	});
	

	document.getElementById('mostrar').innerHTML = TabelaHTML;
	
	} // função list()
}

function remove() {

	// remove o último elemento de uma matriz e retorna aquele elemento.
	Tabela_alunos.pop();
	listar();

}

function limpar() {

	// apaga todos os dados cadastrados
	Tabela_alunos = [];
	TabelaHTML = '';
	tot = [];

	//retira os dados listados da div "mostrar" e "tot"
	document.getElementById('mostrar').innerHTML = TabelaHTML;

	listar();

}
