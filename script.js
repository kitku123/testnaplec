var lista = ["7KPotrzebuje stałego potwierdzenia, że jestem kochanx ","2MWolę rzadki i długi wypoczynek niż krótki częsty wypoczynek ","8MW powstaniu pobudzenia ważną rolę uczestniczą wrażenie wizualno-cielesne ","1MPragę podziwu i uznania ","8MPo osiągnięciu orgazmu, mogę zasnąć lub zajać się innymi sprawami ","7MW związku czułość i delikatność nie jest dla mnie ważna ","5MMam mało subtelny wzrok i słuch ","4KJestem serdecznx ","7MUważam, ze jak już raz komuś wyznam miłość, to wystarczy ","8MMiłość i popęd seksualny nie są u mnie zintegrowane ","1MMoja wartość jest uzależniona od mojej sprawności umysłowej ","7KCzekam na kogoś, kto bedzie mnie kochał ","3MTrudno mi się domyślić potrzeb drugiej osoby ","7KPragnę zainteresowania ze strony parnera ","4KJestem łagodnx ","2KNa pierwszym miejscu przeżywam sprawy mi najbliższe ","7MPragnę chronić swojego partnera ","3MRozwiązuje problemy do końca ","8MOd kiedy pamiętam, łatwo osiągało mi się orgazm ","4KPotrzebuje odmiany w codziennym życiu ","2KCierpię, gdy jestem odepchniętx w mych staraniach ","3KMyślę intuicyjnie ","5MTrudno mi rozróżnić zmianę tonu ","2MWciąga mnie samo dzieło i proces tworzenia ","8KW powstaniu pobudzenia ważną rolę uczestniczą wrażenie psychiczno-erotyczne ","3KPotrafię zatroszczyć się o wiele spraw ","8MNie potrzebuję być wprowadzony w nastrój podczas seksu ","2MW centrium mojego przeżywania znajdują się sprawy świata ","8KOrgazmu musiałxm się nauczyć ","5KDoobrze słyszę ","3MMyślę kategoriami konkretnymi ","7MPragnę zdobyć swojego parnera ","6MChcę wybrać zawód, gdzie będę mieć konktakt z rzeczami ","3KJestem empatycznx ","1KMoja wartość jest uzależniona od mojego moralnego postępowania ","6KChcę wybrać zawód, gdzie będę mieć bezpośredni konktakt z ludźmi ","8MPotrafię stosunkowo szybko osiągnąć orgazm ","5KCharakteryzuje się dobym powodnieniem ","4MJestem twardyx ","8KŻeby poczuć satysfkację seksem potrzebuję serdeczności, czułości i przyjaznej atmosfery ","5KJestem wysoce wrażliwx dotykowo ","2KPotrafię być \"na dyżurze\" dzień i noc ","3KJestem zmiennx w nastrojach ","4MJestem dynamicznx ","6MPrzeżywam konktakt z innymi na zasadzie niezależności i samodzielności ","3MKiedy nad czymś pracuje, zapominam o wszystkim ","6MMoje rozmowy częściej dotyczą świata rzeczy niż świata ludzi ","4MJestem agresywnx ","6KKonktakt z innymi osobami jest dla mnie ważny ","1KMoja wartość jest uzależniona od mojego wyglądu ","3MJestem stablinx emocjonalnie ","5KWidzę barwnie i szeroko ","3KPotrafię robić kilka rzeczy na raz ","8KGdy byłxm młoda, moje życie uczuciowe było rozbudzone ","8MMoje pożądanie powstaje szybko i szybko może zostać zaspokojone ","4KJestem wrażliwx ","3KCzęsto reaguje emocjonalnie ","5MJestem mało wrażliwx na dotyk ","8KPragnę bliskości ","6KDużo mówię ","2KNajchętniej pracuje wtedy, gdy mój wysiłek jest adresowany do konkretnego odbiorcy ","1MMoja wartość jest uzależniona od mojej siły fizycznej ","2MMogę podjąć znaczny wysiłek ","4MJestem silnx fizycznie ","8KGdy byłxm młoda, moja seksualność była uśpiona ","7KChcę, żeby parner dawał mi poczucie bezpieczeństwa ","5MMam słaby zmysł powonienia ","3MUmiem odzielić emocje od myślenia ","8KMoje pobudzenie seksualne wolno narasta i wolno wygasa","1KNakazy i zakazy mają duży wpływ na moje zachowanie"]

var punkty = [0,0,0,0,0,0,0,0]
var pytań = [0,0,0,0,0,0,0,0]
/*
for (i=0; i < lista.length; i++){
	document.getElementById("pytania").innerHTML += lista[i].slice(2, lista[i].length)+"<br>";

	mniam = "";

	mniam += "<input type=\"range\" min=\"1\" max=\"5\" value=\"3\" class=\"slider\" id=\"id" + i.toString() + "\">"




	document.getElementById("pytania").innerHTML += mniam + "<br><br>";

	

	
}
*/

for (i=0; i < lista.length; i++){

	for(j = 0; j< 5;j++){

		id = i.toString() + j.toString();
		el = document.getElementById(id);


		el.onmousedown = function() {
			el.classList.add("ay");
			el.innerHTML = "??"
			alert("gowno")

		}

	}




	
}


function elko(){

	punkty = [0,0,0,0,0,0,0,0]
	pytań = [0,0,0,0,0,0,0,0]

	for (i=0; i < lista.length; i++){

		yo = "id"+i.toString();
		liczba = document.getElementById(yo).value;
		liczba = ~~liczba

		nr = lista[i].slice(0,1);
		nr = ~~nr
		nr = nr - 1


		if (lista[i].slice(1,2) == "K"){
			punkty[nr]+=liczba;
		} else {
			punkty[nr]-=liczba;
		}

		pytań[nr]++;





		


	}

	hejka = "";
	ogl = 0;

	listaa = ["poczucie własnej wartości","podejmowania wysiłków, działanie","sposób myślenia","inne cechy psychiki","zmysły","funkcjonowanie w społeczeństwie",
	"miłość","seksualność"]

	for(miau = 0; miau < 8; miau++){
		punkty[miau] += pytań[miau]*5/2;
		procent = punkty[miau] / (pytań[miau]*5) * 100;

		ogl += procent;

		hejka += "<br>"+listaa[miau] +":⠀⠀⠀";

		procent = Math.round(procent)



		x = procent.toString() + "%"
		y = (100 - procent).toString() + "%"

		
		if (procent > 50) {
			x = "<b>[" + x + "]</b>"
		} 
		if (100-procent > 50){
			y = "<b>[" + y + "]</b>"
		}
		

		//hejka +=  Math.round(procent).toString() + "<br>";

		//hejka += "<br><progress id=\"file\" max=\"100\" value=\""+procent+"\"></progress>"
		hejka += "<span id = \"smoll\">";
		hejka += y+" </span><progress class = \"ayo\" id=\"file\" max=\"100\" value=\""+(100-procent)+"\"></progress><span id = \"smoll\">" + x + "<br></span>";
		hejka += "                 ";
		//hejka += "<div id = \"help\"> elo </div>"

		
	}

	document.getElementById("wyniki").innerHTML = hejka + "<br><br>";

	hejka = "<br>ogólnie:⠀⠀⠀";

	ogl/=8;

	ogl = Math.round(ogl)


	x = ogl.toString() + "%"

	y = (100 - ogl).toString() + "%"


	if (ogl > 50) {
			x = "<b>[" + x + "]</b>"
		} 
		if (100-ogl > 50){
			y = "<b>[" + y + "]</b>"
		}

		//hejka +=  Math.round(procent).toString() + "<br>";

		//hejka += "<br><progress id=\"file\" max=\"100\" value=\""+procent+"\"></progress>"
		hejka += "<span id = \"smoll\">";
		hejka += y+" </span><progress class = \"ayo\" id=\"file\" max=\"100\" value=\""+(100-procent)+"\"></progress><span id = \"smoll\">" + x + "<br>";
		hejka += "</span> ";

	//hejka += Math.round(ogl);
	

	document.getElementById("wyniki").innerHTML = hejka + document.getElementById("wyniki").innerHTML;



}





