
// ====================================
// ====================================
// ==============VARIABLES=============
// ====================================
// ====================================
// ====================================

var operator = document.getElementsByClassName("operator"); // SELECT ALL OPERATORS (+, *, -, /)
var figures = document.getElementsByClassName("figures"); // SELECT ALL FIGURE (1, 2, 3....)
var result = document.getElementById("affiche"); // DIV AFFICHE TO DISPLAY THE RESULT



// ====================================
// ====================================
// ====================================
// ==============FUNCTIONS=============
// ====================================
// ====================================
// ====================================

for (let i=0; i < figures.length; i++) {
	figures[i].addEventListener("click", function (){
		result.innerHTML += figures[i].innerHTML;
	});
}

for (let j=0; j < operator.length; j++) {
	operator[j].addEventListener("click", function (){
		result.innerHTML += operator[j].innerHTML;
	});
}

document.getElementById('egal').addEventListener("click", function (){
		parseInt(result.innerHTML);
		var view = eval(result.innerHTML);
		result.innerHTML = view;
});

document.getElementById('AC').addEventListener("click", function (){
result.innerHTML = "";
});

// ====================================
// ====================================
// ====================================
// ==============SCRIPT================
// ====================================
// ====================================
// ====================================




// 1- LORSQUE L'UTILISATEUR CLIQUE SUR UNE TOUCHE, ELLE S'AFFICHE SUR L'ÉCRAN NOIR
// 2- RENDRE LES OPERATEURS FONCTIONNELS
// 3- LORSQUE QUE L'USER UTILISE UN NOUVEAU NOMBRE, L'ANCIEN S'EFFACE ET LE RESULTAT EST SAUVEGARDÉ
// 4- AFFICHER LE RESULTAT A CHAQUE OPERATION
// 5- AFFICHER LE RESULTAT FINAL LORSQUE L'USER APPUIE SUR LA TOOUCHE "="
