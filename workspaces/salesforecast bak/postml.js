let scenario = scenariomgr.getSelectedScenario(); 
let outcomes = scenario.getTableRows('Outcome');
let outcomes2 = scenario.addTable('Outcome2', 'output', ['ID', 'value'], {'id':'ID'});
let i = 0;
for (let r in outcomes) {
    let outcome = outcomes[r];
    let sales  = outcome['Sales'];
    let values = outcome['value'].split(',')
    let j = 0
    for (let v in values) {
        let row = {}
        row['ID'] = sales +'-'+j;
        row['value'] = values[v];
        j++;
        scenario.addRowToTable('Outcome2', i, row);
        i++;
    }
}