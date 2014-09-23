app.service('mainService', function(){
	var quoteList = [{quote: "foo!", author: "Aaron Rumery"},
	{quote: "Bar Foo", author: "Aaron Rumery"},
	{quote: "Foo bar", author: "Aaron Rumery"},
	{quote: "cheese", author: "Aaron Rumery"},
	];
	this.getQuoteList = function(){
		return quoteList;
	}
	this.addQuote = function(item){
		quoteList.push(item);
	}
	this.removeQuote = function(item){
		for (var i = 0; i < quoteList.length; i++) {
			if(quoteList[i].quote === item){
				quoteList.splice(i, 1);
			}
		}
	}

});