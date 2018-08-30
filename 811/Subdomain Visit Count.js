/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
	var result = {};
	var result1 = [];
    for (var k = 0; k < cpdomains.length; k++) {
    	var domainVisit = cpdomains[k].split(' ');
    	var count = domainVisit[0];
    	var domainVisit = domainVisit[1];
    	var domain = domainVisit.split('.');
    	for (var i = 0; i < domain.length; i++) {
    		var j = i+1;
    		var domainAll = domain[i];
    		while(j<domain.length){
    			domainAll = domainAll + '.'+domain[j];
    			j++;
    		}
    		result[domainAll] = Number(count) + Number(result[domainAll]||0); 
    	}
    }
    for (var dom in result) {
    	result1.push(result[dom]+" "+dom);
    }
    return result1;
};

console.log(subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]));
// ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]


var subdomainVisits = function(cpdomains) {
    var count = {};
    for(var i=0; i<cpdomains.length; i++) {
        var parts = cpdomains[i].split(' ',2);
        var d = parts[1];
        var c = parseInt(parts[0]);
        count[d] = (count[d] || 0) + c;
        
        for(var newD=d.replace(/^[^\.]*\./,''); true; newD=newD.replace(/^[^\.]*\./,'')) {
            count[newD] = (count[newD]||0) + c;
            if(newD.indexOf('.')<0)
                break;
        }
    }
    
    var domains = Object.keys(count);
    var r = [];
    for(var i=0; i<domains.length; i++) {
        r.push(count[domains[i]]+' '+domains[i]);
    }
    
    return r;
};