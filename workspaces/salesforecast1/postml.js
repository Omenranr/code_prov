let scenario = scenariomgr.getSelectedScenario(); 
let outcomes = scenario.getTableRows('Outcome');
let outcomes2 = scenario.addTable('Outcome_Push_PA', 'output', ['Period','Product Category','Measures','value'], {'id':'Period'});
let cat = 'Off-Road';
M1 = 'Statistical Base Forecast';
M2 = 'Ecart type WML';
M3 = 'Min Trust 95%';
M4 = 'Max Trust 95%';

let i = 0;
for (let r in outcomes) {
    let outcome = outcomes[r];
    let sales  = outcome['inputmlfile'];
    let values = outcome['value'].split(',');
    for (let v in values) {
        let row = {};
		if (i == 0) {
        row['Period'] = 'Jul 2020';
		row['Product Category'] = cat;
		row['Measures'] = M1;
        row['value'] = values[v];
        scenario.addRowToTable('Outcome_Push_PA', i, row);
		}
		if (i == 1) {
        row['Period'] = 'Aug 2020';
		row['Product Category'] = cat;
		row['Measures'] = M1;
        row['value'] = values[v];
        scenario.addRowToTable('Outcome_Push_PA', i, row);
		}
		if (i == 2) {
        row['Period'] = 'Sep 2020';
		row['Product Category'] = cat;
		row['Measures'] = M1;
        row['value'] = values[v];
        scenario.addRowToTable('Outcome_Push_PA', i, row);
		}
		if (i == 3) {
        row['Period'] = 'Oct 2020';
		row['Product Category'] = cat;
		row['Measures'] = M1;
        row['value'] = values[v];
        scenario.addRowToTable('Outcome_Push_PA', i, row);
		}
		if (i == 4) {
        row['Period'] = 'Nov 2020';
		row['Product Category'] = cat;
		row['Measures'] = M1;
        row['value'] = values[v];
        scenario.addRowToTable('Outcome_Push_PA', i, row);
		}
		if (i == 5) {
        row['Period'] = 'Dec 2020';
		row['Product Category'] = cat;
		row['Measures'] = M1;
        row['value'] = values[v];
        scenario.addRowToTable('Outcome_Push_PA', i, row);
		}
		if (i == 6) {
        row['Period'] = 'Jul 2020';
		row['Product Category'] = cat;
		row['Measures'] = M2;
        row['value'] = values[v];
        scenario.addRowToTable('Outcome_Push_PA', i, row);
		}
		if (i == 7) {
        row['Period'] = 'Aug 2020';
		row['Product Category'] = cat;
		row['Measures'] = M2;
        row['value'] = values[v];
        scenario.addRowToTable('Outcome_Push_PA', i, row);
		}
		if (i == 8) {
        row['Period'] = 'Sep 2020';
		row['Product Category'] = cat;
		row['Measures'] = M2;
        row['value'] = values[v];
        scenario.addRowToTable('Outcome_Push_PA', i, row);
		}
		if (i == 9) {
        row['Period'] = 'Oct 2020';
		row['Product Category'] = cat;
		row['Measures'] = M2;
        row['value'] = values[v];
        scenario.addRowToTable('Outcome_Push_PA', i, row);
		}
		if (i == 10) {
        row['Period'] = 'Nov 2020';
		row['Product Category'] = cat;
		row['Measures'] = M2;
        row['value'] = values[v];
        scenario.addRowToTable('Outcome_Push_PA', i, row);
		}
		if (i == 11) {
        row['Period'] = 'Dec 2020';
		row['Product Category'] = cat;
		row['Measures'] = M2;
        row['value'] = values[v];
        scenario.addRowToTable('Outcome_Push_PA', i, row);
		}
	    if (i == 12) {
        row['Period'] = 'Jul 2020';
		row['Product Category'] = cat;
		row['Measures'] = M3;
        row['value'] = values[v];
        scenario.addRowToTable('Outcome_Push_PA', i, row);
		}
		if (i == 13) {
        row['Period'] = 'Jul 2020';
		row['Product Category'] = cat;
		row['Measures'] = M4;
        row['value'] = values[v];
        scenario.addRowToTable('Outcome_Push_PA', i, row);
		}
	    if (i == 14) {
        row['Period'] = 'Aug 2020';
		row['Product Category'] = cat;
		row['Measures'] = M3;
        row['value'] = values[v];
        scenario.addRowToTable('Outcome_Push_PA', i, row);
		}
		if (i == 15) {
        row['Period'] = 'Aug 2020';
		row['Product Category'] = cat;
		row['Measures'] = M4;
        row['value'] = values[v];
        scenario.addRowToTable('Outcome_Push_PA', i, row);
		}
	    if (i == 16) {
        row['Period'] = 'Sep 2020';
		row['Product Category'] = cat;
		row['Measures'] = M3;
        row['value'] = values[v];
        scenario.addRowToTable('Outcome_Push_PA', i, row);
		}
		if (i == 17) {
        row['Period'] = 'Sep 2020';
		row['Product Category'] = cat;
		row['Measures'] = M4;
        row['value'] = values[v];
        scenario.addRowToTable('Outcome_Push_PA', i, row);
		}
		if (i == 18) {
        row['Period'] = 'Oct 2020';
		row['Product Category'] = cat;
		row['Measures'] = M3;
        row['value'] = values[v];
        scenario.addRowToTable('Outcome_Push_PA', i, row);
		}
		if (i == 19) {
        row['Period'] = 'Oct 2020';
		row['Product Category'] = cat;
		row['Measures'] = M4;
        row['value'] = values[v];
        scenario.addRowToTable('Outcome_Push_PA', i, row);
		}
		if (i == 20) {
        row['Period'] = 'Nov 2020';
		row['Product Category'] = cat;
		row['Measures'] = M3;
        row['value'] = values[v];
        scenario.addRowToTable('Outcome_Push_PA', i, row);
		}
		if (i == 21) {
        row['Period'] = 'Nov 2020';
		row['Product Category'] = cat;
		row['Measures'] = M4;
        row['value'] = values[v];
        scenario.addRowToTable('Outcome_Push_PA', i, row);
		}
		if (i == 22) {
        row['Period'] = 'Dec 2020';
		row['Product Category'] = cat;
		row['Measures'] = M3;
        row['value'] = values[v];
        scenario.addRowToTable('Outcome_Push_PA', i, row);
		}
		if (i == 23) {
        row['Period'] = 'Dec 2020';
		row['Product Category'] = cat;
		row['Measures'] = M4;
        row['value'] = values[v];
        scenario.addRowToTable('Outcome_Push_PA', i, row);
		}
        i++;
    }
}