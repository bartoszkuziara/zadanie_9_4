drawTree(15);
function drawTree(liczba){
	
	for (var i=0; i<=liczba; i++){
			

		var star = '';
			spacja = '';

		
		for (var j=0; j<=i; j++){
			
			if (j==0){
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

