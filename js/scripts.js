drawTree(1);
drawTree(2);
drawTree(10);
function drawTree(liczba){
	
	for (var i=1; i<=liczba; i++){
			

		var star = '';
			spacja = '';

		
		for (var j=1; j<=i; j++){
			
			if (j==1){
				star += '*';
			}

			else {
				star += '**';
			}
			

		}

		var licznik = liczba - i;

		for (var k=licznik; k>0; k--){
			spacja += ' ';
		}
		
		console.log(spacja + star);
	}

}

