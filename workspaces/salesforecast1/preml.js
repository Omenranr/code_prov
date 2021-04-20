let scenario = scenariomgr.getSelectedScenario(); 
let inputs = scenario.getTableRows('Sales_Get_PA');

let row = {};

let i = 0;
let j = 0;
let r1 = '';
let r2 = '';
for (let r in inputs) {
    let input = inputs[r];
    let period  = input['Period'];
	let category = input['Product Category'];
	let measure = input['Measures'];
    let value = input['value'];
	if(r1 =='' && category == 'Off-Road' && measure == 'Executed Sales' && value != 0) {
	r1 = 'm'+j;
	r2 = value;
	j++;
	}
	else { if(category == 'Off-Road' && measure == 'Executed Sales' && value != 0){
		r1= r1+ ',m'+j;
	    r2 = r2 + ','+ value;
		j++;
		}
	}
	i++;
}

let inputml = scenario.addTable('inputmlfile', 'output', [r1], {'id':'ID'});
row[r1] = r2;
scenario.addRowToTable('inputmlfile', 0, row);
