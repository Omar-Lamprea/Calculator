let operandoA;
let operandoB;
let operacion;

window.addEventListener('load', init);
function init(){

	const screen = document.getElementById('screen');
	const btn0 = document.getElementById('btn0');
	const btn1 = document.getElementById('btn1');
	const btn2 = document.getElementById('btn2');
	const btn3 = document.getElementById('btn3');
	const btn4 = document.getElementById('btn4');
	const btn5 = document.getElementById('btn5');
	const btn6 = document.getElementById('btn6');
	const btn7 = document.getElementById('btn7');
	const btn8 = document.getElementById('btn8');
	const btn9 = document.getElementById('btn9');
	const btnPt = document.getElementById('btnPt');
	const btnResult = document.getElementById('btnResult');
	const btnSum = document.getElementById('btnSum');
	const btnSubtrac = document.getElementById('btnSubtrac');
	const btnMultiply = document.getElementById('btnMultiply');
	const btnDiv = document.getElementById('btnDiv');
	const btnDelate = document.getElementById('btnDelate');


	//eventos
	btn0.onclick = function(e){
		screen.textContent = screen.textContent + 0
	}
	btn1.onclick = function(e){
		screen.textContent = screen.textContent + 1
	}
	btn2.onclick = function(e){
		screen.textContent = screen.textContent + 2
	}
	btn3.onclick = function(e){
		screen.textContent = screen.textContent + 3
	}
	btn4.onclick = function(e){
		screen.textContent = screen.textContent + 4
	}
	btn5.onclick = function(e){
		screen.textContent = screen.textContent + 5
	}
	btn6.onclick = function(e){
		screen.textContent = screen.textContent + 6
	}
	btn7.onclick = function(e){
		screen.textContent = screen.textContent + 7
	}
	btn8.onclick = function(e){
		screen.textContent = screen.textContent + 8
	}
	btn9.onclick = function(e){
		screen.textContent = screen.textContent + 9
	}
	/*characters*/
	btnPt.onclick = function(e){
		screen.textContent = screen.textContent + '.'
	}
	btnDelate.onclick = function(e){
		screen.textContent = ''
	}
	
	/*operaciones*/
	btnSum.onclick = function(e){
		operandoA = screen.textContent;
		operacion = '+';
		clean();
	}
	btnSubtrac.onclick = function(e){
		operandoA = screen.textContent;
		operacion = '-';
		clean();
	}
	btnMultiply.onclick = function(e){
		operandoA = screen.textContent;
		operacion = '*';
		clean();
	}
	btnDiv.onclick = function(e){
		operandoA = screen.textContent;
		operacion = '/';
		clean();
	}
	btnResult.onclick = function(e){
		operandoB = screen.textContent;
		resolver();
	}

	function clean(){
		screen.textContent = '';
	}
	function resetear(){
		screen.textContent = '';
		operandoA = 0;
		operandoB = 0;
		operacion = '';
	}

	function resolver(){
		let res;
		switch(operacion){
			case '+':
				res =  parseFloat(operandoA) + parseFloat(operandoB);
				break;
			case '-':
				res = parseFloat(operandoA) - parseFloat(operandoB);
				break;
			case '*':
				res = parseFloat(operandoA) * parseFloat(operandoB);
				break;
			case '/':
				res = parseFloat(operandoA) / parseFloat(operandoB);
				break;
		}
		resetear()
		screen.textContent = res;
	}

}


/*const question = parseInt(prompt('qué quieres hacer?\n sumar = 1 \n multiplicar = 2'));



	if(question === 1){
		const a = parseInt(prompt('numero 1'));
		const b = parseInt(prompt('numero 2'));
		document.write(a + b)		
	}
	else if(question === 2){
		const a = parseInt(prompt('numero 1'));
		const b = parseInt(prompt('numero 2'));
		document.write(a * b)
	}
	else{
		document.write('WTF!')
	}*/