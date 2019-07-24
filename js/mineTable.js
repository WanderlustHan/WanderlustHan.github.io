jQuery.fn.dataTableExt.oSort['shortdate-asc']  = function(x,y) {
	var xi=x.indexOf("<br>");
	if(xi>-1) x = x.substr(0, xi)
	xi=x.indexOf("-");
	if(xi>-1) {
		var x1 = x.substr(0, xi);
		var x2 = x.substr(x.indexOf(","));
		x=x1+x2;
	}
	
	
	var yi=y.indexOf("<br>");
	if(yi>-1) y = y.substr(0, yi)
	yi=y.indexOf("-");
	if(yi>-1) {
		var y1 = y.substr(0, yi);
		var y2 = y.substr(y.indexOf(","));
		y=y1+y2;								
	}
	
	x=Date.parse(x);
	y=Date.parse(y);
	return ((x < y) ? -1 : ((x > y) ?  1 : 0));
};


jQuery.fn.dataTableExt.oSort['shortdate-desc']  = function(x,y) {
	var xi=x.indexOf("<br>");
	if(xi>-1) x = x.substr(0, xi)
	xi=x.indexOf("-");
	if(xi>-1) {
		var x1 = x.substr(0, xi);
		var x2 = x.substr(x.indexOf(","));
		x=x1+x2;
	}
	
	var yi=y.indexOf("<br>");
	if(yi>-1) y = y.substr(0, yi)
	yi=y.indexOf("-");
	if(yi>-1) {
		var y1 = y.substr(0, yi);
		var y2 = y.substr(y.indexOf(","));
		y=y1+y2;								
	}
			 
	x=Date.parse(x);
	y=Date.parse(y);
 
	return ((x < y) ?  1 : ((x > y) ? -1 : 0));
};


$(document).ready(function() {
    var oTable=$('#ConfTable').dataTable( {
        
        
        "lengthMenu": [ [25 ,50, 100, -1], [25 ,50, 100, "All"] ],     
         "aaSorting": [[2, 'desc']],
		 "bSort":true,
		 "bSortClasses": false,
		 "aoColumnDefs": [
		  { "sSortDataType": "shortdate", "aTargets": [ 2, 3 ] },
		  { "sType": "shortdate", "aTargets": [ 2, 3] },
		]


        } );

    oTable.css("font-size","15px");


    } );