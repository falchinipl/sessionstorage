
$(document).ready(function(){

	//var STORE = localstorage;
	var STORE = sessionStorage;
		
		mostraDati()

		$('#add').click(function(){
				var key = $("#key").val();
				var value = $("#value").val();
				STORE.setItem(key, value);
				console.log(value);
				mostraDati()
			})
		$('#clear').click(function(){
				STORE.clear();
				mostraDati()
			})
			
		$('#remove').click(function(){
				var key = $("#key").val();
				STORE.removeItem(key);
				mostraDati()
			})
			
	
		function mostraDati() {
			var table = $("#tabella");
			table.html('');
			var quantiDati = STORE.length;
			console.log(quantiDati)
			$("#count").html(quantiDati);
			for (var i = 0; i < quantiDati; i++) {
				var chiave = STORE.key(i);
				var valore = STORE[chiave];
				table.append("<tr><th>" + chiave + ":</th><td>"
				+ valore + "</td></tr>");
			}
		}

/*
		$("#add").on("click",function(){
			$("#tabella").addClass("block").removeClass("none");
		})
		$("#clear").on("click",function(){
			$("#tabella").removeClass("block").addClass("none");
		})
		*/
})