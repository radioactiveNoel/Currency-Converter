 let currency = [36.58, 0.92]
 
function cordoba() {
			// Get the search input element
			let cash = document.getElementById("cash")

			// Get the search query
			let query = cash.value;
            let result = document.getElementById("currency")
            result.textContent = "Currency: " + currency[0] * query
            
            
}
