


function removePADimension(category,dimension) {
        delete config.pa.mapping[category].dimensions[dimension];
        saveConfig();
        showMapping()
}
function addPADimension(category) {
        let dimension = document.getElementById('PA_DIMENSIONS').options[document.getElementById('PA_DIMENSIONS').selectedIndex].innerText;
        config.pa.mapping[category].dimensions[dimension] = {name:dimension};
        saveConfig();
        showMapping()
}

function usePADimensionVersion() {
        let dimension = document.getElementById('PA_DIMENSIONS').options[document.getElementById('PA_DIMENSIONS').selectedIndex].innerText;
        config.pa.mapping.versionDimensionName = dimension;
        saveConfig();
        showMapping()
}

function setPAVersion(category) {
        let version = document.getElementById('PA_VERSIONS').options[document.getElementById('PA_VERSIONS').selectedIndex].innerText;
        config.pa.mapping[category].version = version;
        saveConfig();
        showMapping()
}

function changeVersion(category) {
        let input = document.getElementById('PA_VERSION_'+category);
        config.pa.mapping[category].version = input.value;
        saveConfig();
 }

function removePACube(category,cube) {
        delete config.pa.mapping[category].cubes[cube];
        saveConfig();
        showMapping()
}
function addPACube(category) {
        let cube = document.getElementById('PA_CUBES').options[document.getElementById('PA_CUBES').selectedIndex].innerText;
        config.pa.mapping[category].cubes[cube] = {name:cube};
        saveConfig();
        showMapping()
}
function addPATable(category) {
        let cube = document.getElementById('PA_TABLES').options[document.getElementById('PA_TABLES').selectedIndex].innerText;
        config.pa.mapping[category].cubes[cube] = {name:cube};
        saveConfig();
        showMapping()
}
function switchReadVersion(category,cube) {
        if (!('readVersion' in config.pa.mapping[category].cubes[cube]))
                config.pa.mapping[category].cubes[cube].readVersion = false;
        else
                config.pa.mapping[category].cubes[cube].readVersion = ! config.pa.mapping[category].cubes[cube].readVersion;
        saveConfig();
        showMapping()
}
function switchPropertyDimension(category,cube) {
        if (!('propertyDimensionName' in config.pa.mapping[category].cubes[cube])) {
                config.pa.mapping[category].cubes[cube].propertyDimensionName = cube + 'Properties';
                config.pa.mapping[category].cubes[cube].propertyDimensionType = 'String';
        } else {
                delete config.pa.mapping[category].cubes[cube].propertyDimensionName
                delete config.pa.mapping[category].cubes[cube].propertyDimensionType
        }
        saveConfig();
        showMapping()
}

function switchPropertyDimensionType(category,cube) {
        if (!('propertyDimensionName' in config.pa.mapping[category].cubes[cube])) {
                config.pa.mapping[category].cubes[cube].propertyDimensionName = cube + 'Properties';
                config.pa.mapping[category].cubes[cube].propertyDimensionType = 'String';
        } else {
                delete config.pa.mapping[category].cubes[cube].propertyDimensionName
                delete config.pa.mapping[category].cubes[cube].propertyDimensionType
        }
        saveConfig();
        showMapping()
}


function changePropertyDimensionName(category, cube) {
       let input = document.getElementById('PA_CUBE_PROPERTY_DIMENSION_'+cube);
       config.pa.mapping[category].cubes[cube].propertyDimensionName = input.value;
       saveConfig();
}

function changePropertyDimensionType(category, cube) {
        let type = document.getElementById('PA_CUBE_PROPERTY_DIMENSION_TYPE_'+cube).value;
        if (type == 'Numeric') {
                if ('propertyDimensionType' in config.pa.mapping[category].cubes[cube])
                        delete config.pa.mapping[category].cubes[cube]['propertyDimensionType'];
        } 
        else
                config.pa.mapping[category].cubes[cube].propertyDimensionType = type;
        saveConfig();
 }

 
function changeDimensionName(category, dimension) {
        let newDimension = document.getElementById('PA_DIMENSION_NAME_'+dimension);
        config.pa.mapping[category].dimensions[newDimension.value] = config.pa.mapping[category].dimensions[dimension];
        delete config.pa.mapping[category].dimensions[dimension]
        saveConfig();
        showMapping();
}

function changeDimensionTableName(category, dimension) {
        let newTableName = document.getElementById('PA_DIMENSION_TABLE_NAME_'+dimension).value;
        config.pa.mapping[category].dimensions[dimension].name = newTableName;
        saveConfig();
        showMapping();
}


function showDimension(dimension) {
        let dimensionDiv =  document.getElementById("DIV_DIMENSION_"+dimension);
        dimensionDiv.style.display = "block";
}
function hideDimension(dimension) {
        let dimensionDiv =  document.getElementById("DIV_DIMENSION_"+dimension);
        dimensionDiv.style.display = "none";
}

function htmlDimension(category, i) {
        let html = '';
        let dimension = config.pa.mapping[category].dimensions[i];
        html += '<div style="border-style: solid; margin: 5px 5px 5px 5px; border-width: 1px;" onmouseenter="showDimension(\''+i+'\')" onmouseleave="hideDimension(\''+i+'\')">';
        html += '<b>&nbsp'+i+'</b>';
        html += '<div id="DIV_DIMENSION_'+i+'" style="display:none; padding:5px">';
        html += '<button type="button" id="PA_REMOVE_INPUT_DIMENSION_'+i+'" class="btn btn-outline-danger btn-sm" onclick="removePADimension(\'input\',\''+i+'\')">REMOVE</button>';
        html += '<br>';
        html += 'Dimension name: ' + '<input type="TEXT" id="PA_DIMENSION_NAME_'+i+'" value="'+i+'" onChange="changeDimensionName(\''+category+'\',\''+i+'\')"></input><br>';
        html += 'Table name: ' + '<input type="TEXT" id="PA_DIMENSION_TABLE_NAME_'+i+'" value="'+dimension.name+'" onChange="changeDimensionTableName(\''+category+'\',\''+i+'\')"></input><br>';
        html += '</div>';
        html += '</div>';
        return html;
}

function changeCubeName(category, cube) {
        let newCube = document.getElementById('PA_CUBE_NAME_'+cube);
        config.pa.mapping[category].cubes[newCube.value] = config.pa.mapping[category].cubes[cube];
        delete config.pa.mapping[category].cubes[cube]
        saveConfig();
        showMapping();
}

function changeCubeTableName(category, cube) {
        let newTableName = document.getElementById('PA_CUBE_TABLE_NAME_'+cube).value;
        config.pa.mapping[category].cubes[cube].name = newTableName;
        saveConfig();
        showMapping();
}


function showCube(cube) {
        let cubeDiv =  document.getElementById("DIV_CUBE_"+cube);
        cubeDiv.style.display = "block";
}
function hideCube(cube) {
        let cubeDiv =  document.getElementById("DIV_CUBE_"+cube);
        cubeDiv.style.display = "none";
}

function htmlCube(category, i) {
        let html = '';
        let cube = config.pa.mapping[category].cubes[i];
        html += '<div style="border-style: solid; margin: 5px 5px 5px 5px; border-width: 1px;" onmouseenter="showCube(\''+i+'\')" onmouseleave="hideCube(\''+i+'\')">';
        html += '<b>&nbsp'+i+'</b> ';
        html += '<div id="DIV_CUBE_'+i+'" style="display:none; padding:5px">';
        html += '<button type="button" id="PA_REMOVE_CUBE_'+i+'" class="btn btn-outline-danger btn-sm" onclick="removePACube(\''+category+'\',\''+i+'\')">REMOVE</button>';
        html += '<br>';
        html += 'Cube name: ' + '<input type="TEXT" id="PA_CUBE_NAME_'+i+'" value="'+i+'" onChange="changeCubeName(\''+category+'\',\''+i+'\')"></input><br>';
        html += 'Table name: ' + '<input type="TEXT" id="PA_CUBE_TABLE_NAME_'+i+'" value="'+cube.name+'" onChange="changeCubeTableName(\''+category+'\',\''+i+'\')"></input><br>';
        if (!('readVersion' in cube))
                cube.readVersion = true;
        if (cube.readVersion)
                html += 'Read version';
        else
                html += 'Don\'t read version';     
        html += ' <button type="button" id="PA_SWITCH_READ_VERSION_'+i+'" class="btn btn-light btn-sm" onclick="switchReadVersion(\''+category+'\',\''+i+'\')">SWITCH</button>';                        
        html += '<br>';                                   
        if ('propertyDimensionName' in cube) {
                html += 'Property dimension is: <input type="TEXT" id="PA_CUBE_PROPERTY_DIMENSION_'+i+'" value="'+cube.propertyDimensionName+'" onChange="changePropertyDimensionName(\''+category+'\',\''+i+'\')">';
                html += ' with type <select id="PA_CUBE_PROPERTY_DIMENSION_TYPE_'+i+'" class="selectpicker" onChange="changePropertyDimensionType(\''+category+'\',\''+i+'\')">';
                let types = ['Numeric', 'String' ]; //Consolidated : 3
                for (let t in types) {
                        let type = types[t]; 
                        let selected = '';
                        if ('propertyDimensionType' in cube && cube.propertyDimensionType==type)
                                selected = ' selected ';
                        html += '<option value="'+type+'" '+selected+'>'+type+'</option>';
                }
                html += '</select>';
                '<select  type="TEXT" id="PA_CUBE_PROPERTY_DIMENSION_'+i+'" value="'+cube.propertyDimensionName+'" onChange="changePropertyDimensionName(\''+category+'\',\''+i+'\')">';
        } else
                html += 'Don\'t use property dimension';     
        html += ' <button type="button" id="PA_SWITCH_PROPERTY_DIMENSION'+i+'" class="btn btn-light btn-sm" onclick="switchPropertyDimension(\''+category+'\',\''+i+'\')">SWITCH</button>';                        
        html += '<br>';    
        html += '</div>';
        html += '</div>';
        return html;
}
function showMapping(mappingDivId=undefined) {
        if (mappingDivId == undefined)
                mappingDivId = 'mapping_content_div';

        let mappingDiv = document.getElementById(mappingDivId);

        let html = '';

        html += '<h3>Cubes, dimensions and Tables</h3>'
        html += '<b>Dimensions:</b> <select id="PA_DIMENSIONS"> \
            </select>';
        html += ' <button type="button" id="PA_ADD_INPUT_DIMENSION" class="btn btn-light btn-sm" onclick="addPADimension(\'input\')">ADD INPUT</button>';
        html += ' <button type="button" id="PA_USE_VERSION_DIMENSION" class="btn btn-light btn-sm" onclick="usePADimensionVersion()">USE AS VERSION</button>';
        html += '<br>';

        if ("versionDimensionName" in config.pa.mapping) {
                html += '<b>Versions:</b> <select id="PA_VERSIONS"> \
                        </select>';
                html += ' <button type="button" id="PA_SET_INPUT_VERSION" class="btn btn-light btn-sm" onclick="setPAVersion(\'input\')">SET INPUT VERSION</button>';
                html += ' <button type="button" id="PA_SET_OUTPUT_VERSION" class="btn btn-light btn-sm" onclick="setPAVersion(\'output\')">SET OUTPUT VERSION</button>';
                html += '<br>';
        }        
        html += '<b>Cubes:</b> <select id="PA_CUBES"> \
            </select>';
        html += ' <button type="button" id="PA_ADD_INPUT" class="btn btn-light btn-sm" onclick="addPACube(\'input\')">ADD INPUT</button>';
        html += ' <button type="button" id="PA_ADD_OUTPUT" class="btn btn-light btn-sm" onclick="addPACube(\'output\')">ADD OUTPUT</button>';
        html += '<br>';
        
        html += '<b>Tables:</b> <select id="PA_TABLES"> \
            </select>';
        html += ' <button type="button" id="PA_ADD_INPUT_TABLE" class="btn btn-light btn-sm" onclick="addPATable(\'input\')">ADD INPUT</button>';
        html += ' <button type="button" id="PA_ADD_OUTPUT_TABLE" class="btn btn-light btn-sm" onclick="addPATable(\'output\')">ADD OUTPUT</button>';
        html += '<br>';

 
        html += '<h3>Mapping</h3>'
        if ("versionDimensionName" in config.pa.mapping)
                html += "Version dimension: " +  config.pa.mapping.versionDimensionName;
        html += '<br>';
        
        html += '<table width="100%"><tr><td width="50%" valign="top">'
        html += '<h4>Inputs</h4>'
        if ('version' in config.pa.mapping.input)
                html += 'Version: ' + config.pa.mapping.input.version;
        html += '<br>'

        html += '<h5>Dimensions</h5>'
        for (let i in config.pa.mapping.input.dimensions) {
                html += htmlDimension('input', i)
        }
        html += '<br>';
        html += '<h5>Cubes</h5>'
        for (let i in config.pa.mapping.input.cubes)
                html += htmlCube('input', i)                                 
        html += '<br>';

        html += '</td><td width="50%" valign="top">'
        
        html += '<h4>Outputs</h4>'
        if ('version' in config.pa.mapping.output)
                html += 'Version: <input type="TEXT" id="PA_VERSION_output" value="'+config.pa.mapping.output.version+'" onChange="changeVersion(\'output\')">';
        html += '<br>'
        
        html += '<h5>Cubes</h5>'
        for (let i in config.pa.mapping.output.cubes) 
                html += htmlCube('output', i)    
        html += '<br>';
        html += '</td></tr></table>'

        mappingDiv.innerHTML = html;


        axios({
                method:'get',
                url:'/api/pa/cubes' + '?workspace=' + workspace,
                responseType:'json'
            })
            .then(function (response) {
                
                let select = document.getElementById("PA_CUBES");
                while (select.options.length > 0) {
                   select.remove(select.options.length - 1);
               }
        
                // Create items array
                var cubes = Object.keys(response.data).map(function(key) {
                   return [key, response.data[key]];
               });
               
               // Sort the array based on the second element
               cubes.sort(function(first, second) {
                   if(first[1].toLowerCase() < second[1].toLowerCase()) { return -1; }
                   if(first[1].toLowerCase() > second[1].toLowerCase()) { return 1; }
                   return 0;
               });
        
                for (let p in cubes) {
                    let element = document.createElement("option");
                    element.innerText = cubes[p][1];
                    select.append(element);
                }                                
            })

        axios({
                method:'get',
                url:'/api/pa/dimensions' + '?workspace=' + workspace,
                responseType:'json'
            })
            .then(function (response) {
                
                let select = document.getElementById("PA_DIMENSIONS");
                while (select.options.length > 0) {
                   select.remove(select.options.length - 1);
               }
        
                // Create items array
                var dimensions = Object.keys(response.data).map(function(key) {
                   return [key, response.data[key]];
               });
               
               // Sort the array based on the second element
               dimensions.sort(function(first, second) {
                   if(first[1].toLowerCase() < second[1].toLowerCase()) { return -1; }
                   if(first[1].toLowerCase() > second[1].toLowerCase()) { return 1; }
                   return 0;
               });
        
                for (let p in dimensions) {
                    let element = document.createElement("option");
                    element.innerText = dimensions[p][1];
                    select.append(element);
                }                                
            })

            if ("versionDimensionName" in config.pa.mapping)
                axios({
                        method:'get',
                        url:'/api/pa/dimension/' + config.pa.mapping.versionDimensionName + '?workspace=' + workspace,
                        responseType:'json'
                })
                .then(function (response) {
                        
                        let select = document.getElementById("PA_VERSIONS");
                        while (select.options.length > 0) {
                                select.remove(select.options.length - 1);
                        }
                
                        // Create items array
                        var versions = Object.keys(response.data).map(function(key) {
                                return [key, response.data[key]];
                        });
                        
                        // Sort the array based on the second element
                        versions.sort(function(first, second) {
                                if(first[1].name.toLowerCase() < second[1].name.toLowerCase()) { return -1; }
                                if(first[1].name.toLowerCase() > second[1].name.toLowerCase()) { return 1; }
                                return 0;
                        });
                        
                                for (let p in versions) {
                                let element = document.createElement("option");
                                element.innerText = versions[p][1].name;
                                select.append(element);
                                }                                
                        })   

        let select = document.getElementById("PA_TABLES");
        // Create items array
        let scenario = scenariomgr.getSelectedScenario();
        var tables = Object.keys(scenario.tables).map(function(key) {
                return [key, scenario.tables[key]];
        });
        
        // Sort the array based on the second element
        tables.sort(function(first, second) {
        if(first[0].toLowerCase() < second[0].toLowerCase()) { return -1; }
        if(first[0].toLowerCase() > second[0].toLowerCase()) { return 1; }
        return 0;
        });

        for (let p in tables) {
                let element = document.createElement("option");
                element.innerText = tables[p][0];
                select.append(element);
        }                                
}

function paredraw() {
        let scenario = scenariomgr.getSelectedScenario();
        showAsGoogleTables(scenario, 'inputs_tables_div', 'input', undefined, undefined, true);
        showAsGoogleTables(scenario, 'outputs_tables_div', 'output', undefined, undefined, true);
}
function updateConfig(fieldId, configId, push = true) {
    let value = document.getElementById(fieldId).value;
    
    var schema = config;  // a moving reference to internal objects within obj
    var pList = configId.split('.');
    var len = pList.length;
    for(var i = 0; i < len-1; i++) {
            var elem = pList[i];
            if( !schema[elem] ) schema[elem] = {}
            schema = schema[elem];
    }

    schema[pList[len-1]] = value;

    if (push)
            axios({
                    method: 'put',
                    url: './api/config?workspace='+scenariomgr.workspace,
                    data: config,
                    responseType:'json'
            }).then(function(response) {
                    console.log('Updated config');
                    console.log(response);
            })
            // .catch(showHttpError);
}


function hideButton(WHAT) {
    document.getElementById(WHAT).style.display = 'none';
}

function disableButton(WHAT) {
    document.getElementById(WHAT).disabled = true;
}

function enableButton(WHAT) {
    document.getElementById(WHAT).disabled = false;
}


function clearScenario(category) {
    let scenarioName = config.pa.mapping.input.version;
    if (!(scenarioName in scenariomgr.getScenarios()))
            return;
    let scenario = scenariomgr.getScenarios()[scenarioName];
    for (let t in scenario.tables)
        if (scenario.tables[t].category == category)
                delete scenario.tables[t];
    showAsGoogleTables(scenario, 'inputs_tables_div', 'input', undefined, undefined, true);
    showAsGoogleTables(scenario, 'outputs_tables_div', 'output', undefined, undefined, true);
    scenariomgr.saveScenario(scenario);
}


function initPA(btn_id, cb) {
    
    let scenarioName = config.pa.mapping.input.version;
    if (!(scenarioName in scenariomgr.getScenarios()))
            scenariomgr.newScenario(scenarioName);
    let scenario = scenariomgr.getScenarios()[scenarioName];

    let btn = document.getElementById(btn_id);
    let btn_txt = btn.innerHTML;
    scenario.initPA(function (status) {
                    btn.disabled = true;
                    btn.innerHTML = status
            }, 
            function (){
                    btn.disabled = false;
                    btn.innerHTML = btn_txt;
                    
                    if (cb != undefined)
                            cb();
            });
}


function deletePA(btn_id, cb) {
    
        let scenarioName = config.pa.mapping.input.version;
        if (!(scenarioName in scenariomgr.getScenarios()))
                scenariomgr.newScenario(scenarioName);
        let scenario = scenariomgr.getScenarios()[scenarioName];
    
        let btn = document.getElementById(btn_id);
        let btn_txt = btn.innerHTML;
        scenario.deletePA(function (status) {
                        btn.disabled = true;
                        btn.innerHTML = status
                }, 
                function (){
                        btn.disabled = false;
                        btn.innerHTML = btn_txt;
                        
                        if (cb != undefined)
                                cb();
                });
    }

function getFromPA(btn_id, cb) {

    let scenarioName = config.pa.mapping.input.version;
    if (!(scenarioName in scenariomgr.getScenarios()))
            scenariomgr.newScenario(scenarioName);
    let scenario = scenariomgr.getScenarios()[scenarioName];

    let btn = document.getElementById(btn_id);
    let btn_txt = btn.innerHTML;

    // Run pre process
    if ('preprocess' in config.pa.mapping.input) {
        btn.innerHTML = 'PREPROCESS';
        axios({
            method:'get',
            url:'/api/pa/preprocess' + '?workspace=' + workspace+'&version='+config.pa.mapping.input.version,
            responseType:'json'
        })
        .then(function (response) {

                scenario.importFromPA(function (status) {
                                btn.disabled = true;
                                btn.innerHTML = status
                        }, 
                        function (){
                                btn.disabled = false;
                                btn.innerHTML = btn_txt;
                                scenariomgr.setSelectedScenario(scenarioName);
                                showAsGoogleTables(scenario, 'inputs_tables_div', 'input', undefined, undefined, true);
                                scenariomgr.saveScenario(scenario);
                                if (cb != undefined)
                                        cb();
                        });
                })
    } else {

        scenario.importFromPA(function (status) {
                btn.disabled = true;
                btn.innerHTML = status
        }, 
        function (){
                btn.disabled = false;
                btn.innerHTML = btn_txt;
                scenariomgr.setSelectedScenario(scenarioName);
                showAsGoogleTables(scenario, 'inputs_tables_div', 'input', undefined, undefined, true);
                scenariomgr.saveScenario(scenario);
                if (cb != undefined)
                        cb();
        });
        
    }
}

function createProjectIfNecessary(cb = undefined) {
    axios({
            method: 'get',
            url: './api/ws/projects?workspace='+scenariomgr.workspace,
            responseType:'json'
    }).then(function(response) {
            console.log('Read WS project list');
            let projects = response.data;
            let found = false;
            for (p in projects) {
                    let project = projects[p];
                    if (project.name == config.ws.projectName) {
                            found = true;
                            break;
                    }
            }

            if (!found)
                    axios({
                            method: 'put',
                            url: './api/ws/project/' + config.ws.projectName+'?workspace='+scenariomgr.workspace,
                            responseType:'json'
                    }).then(function(response) {
                            console.log('Created WS project');

                            if (cb != undefined)
                                    cb();

                    })
                    // .catch(showHttpError);
            else
                    if (cb != undefined)
                            cb();
    })
    // .catch(showHttpError);
}
 

function pushToWS(btn_id) {

    disableButton(btn_id);
    let scenarioName = config.pa.mapping.input.version;
    let projectName = config.ws.projectName;
    let scenario = scenariomgr.getScenarios()[scenarioName];
    
    let tableIds = scenario.getInputTables()
    let n = tableIds.length;
    let nTotal = n;

    let btn = document.getElementById(btn_id);
    let btn_txt = btn.innerHTML;
    btn.innerHTML = 'PUSHING (' + (nTotal-n) + '/' + nTotal +')';

    for (t in tableIds)  {
            let tableId = tableIds[t];
            
            var data = new FormData();
            var csv = scenario.getTableAsCSV(tableId);
            data.append(tableId+".csv", csv);

            axios({
                    method: 'post',
                    url: './api/ws/project/'+projectName+'/dataset/'+tableId+'?workspace='+scenariomgr.workspace,
                    data: data,
                    responseType:'json'
            }).then(function(response) {
                    console.log('Created dataset ' + tableId );
                    n--;
                    btn.innerHTML = 'PUSHING (' + (nTotal-n) + '/' + nTotal +')';

                    if (n==0) {
                        btn.innerHTML = btn_txt;
                        enableButton('PUSHTOWS');
                    }        
            })
            // .catch(showHttpError);

    }
}

function createProjectAndPushToWS(btn_id) {        
    disableButton(btn_id);
    createProjectIfNecessary(function () {pushToWS(btn_id)});        
}

function openWS() {
    let url = config.ws.url + '#/projects/'  + config.ws.projectName;
    if ('projectId' in config.ws)
            url = config.ws.url + '/projects/'  + config.ws.projectId + '/overview';
    var win = window.open(url, '_blank');
    win.focus();
}

function mysolve(dokey, btn_id, cb) {

    if (scenariomgr.getSelectedScenario() == undefined) {
            alert('No Scenario. Call import first.')
            return;
    }
    let scenario = scenariomgr.getSelectedScenario();

    let btn = document.getElementById(btn_id);
    let btn_txt = btn.innerHTML;

    scenario.solve(dokey, function (status) {
                    btn.disabled=true;
                    btn.innerHTML = status;
            }, function () {
                    btn.disabled=false;
                    btn.innerHTML = btn_txt;

                    showAsGoogleTables(scenario, 'inputs_tables_div', 'input', undefined, undefined, true);
                    showAsGoogleTables(scenario, 'outputs_tables_div', 'output', undefined, undefined, true);
                    scenariomgr.saveScenario(scenario);
    
                    if (cb != undefined)
                            cb();

            });

}


function justflow(flowkey, btn_id, cb) {

        if (scenariomgr.getSelectedScenario() == undefined) {
                alert('No Scenario. Call import first.')
                return;
        }
        let scenario = scenariomgr.getSelectedScenario();
    
        let btn = document.getElementById(btn_id);
        let btn_txt = btn.innerHTML;
    
        scenario.flow(flowkey, function (status) {
                        btn.disabled=true;
                        btn.innerHTML = status;
                }, function () {
                        btn.disabled=false;
                        btn.innerHTML = btn_txt;
    
                        showAsGoogleTables(scenario, 'inputs_tables_div', 'input', undefined, undefined, true);
                        showAsGoogleTables(scenario, 'outputs_tables_div', 'output', undefined, undefined, true);
                        scenariomgr.saveScenario(scenario);
        
                        if (cb != undefined)
                                cb();
    
                });
    
    }
    

function myflow(flowkey, btn_id, cb) {
        getFromPA(btn_id, function(){
                justflow(flowkey, btn_id, function() {
                        pushToPA(btn_id);
                });
        } );
}

function mydevscore(mlkey, btn_id, cb) {

    if (scenariomgr.getSelectedScenario() == undefined) {
            alert('No Scenario. Call import first.')
            return;
    }
    let scenario = scenariomgr.getSelectedScenario();

    let btn = document.getElementById(btn_id);
    let btn_txt = btn.innerHTML;

    scenario.score(mlkey, function (status) {
                    btn.disabled=true;
                    btn.innerHTML = status;
            }, function () {
                    btn.disabled=false;
                    btn.innerHTML = btn_txt;
                    
                    showAsGoogleTables(scenario, 'inputs_tables_div', 'input', undefined, undefined, true);
                    showAsGoogleTables(scenario, 'outputs_tables_div', 'output', undefined, undefined, true);
                    scenariomgr.saveScenario(scenario);
                    
                    if (cb != undefined)
                            cb();
            });
}

function pushToPA(btn_id, cb) {

    if (scenariomgr.getSelectedScenario() == undefined) {
            alert('No Scenario. Call import and solve/score first.')
            return;
    }
    let scenario = scenariomgr.getSelectedScenario();

    let btn = document.getElementById(btn_id);
    let btn_txt = btn.innerHTML;

    scenario.exportToPA(function (status) {
                    btn.disabled = true;
                    btn.innerHTML = status;
            }, function () {

                    // Run post process
                    if ('postprocess' in config.pa.mapping.output) {
                            btn.innerHTML = 'POSTPROCESS';
                            axios({
                                method:'get',
                                url:'/api/pa/postprocess' + '?workspace=' + workspace+'&version='+config.pa.mapping.output.version,
                                responseType:'json'
                            })
                            .then(function (response) {
                                btn.disabled = false;
                                btn.innerHTML = btn_txt;
                                if (cb != undefined)
                                        cb();   
                        })                             
                    } else {
                        btn.disabled = false;
                        btn.innerHTML = btn_txt;
                        if (cb != undefined)
                                cb();   
                    }
            });

}


function myoptimize(dokey, btn_id) {
    getFromPA(btn_id, function(){
            mysolve(dokey, btn_id, function() {
                    pushToPA(btn_id);
            });
    } );
    
    
}

function mydeployscore(mlkey, btn_id) {
    getFromPA(btn_id, function(){
            mydevscore(mlkey,btn_id, function() {
                    pushToPA(btn_id);
            });
    } );
    
    
}

function toggleDevConfig() {
    let configDiv =  document.getElementById("dev_config_div");
    let inputsDiv =  document.getElementById("inputs_div");
    let mappingDiv =  document.getElementById("mapping_div");
    let modelDiv =  document.getElementById("model_dev_div");
    let outputsDiv =  document.getElementById("outputs_div");        
    if (configDiv.style.display === "none") {
            configDiv.style.display = "block";
            inputsDiv.style.display = "none";
            mappingDiv.style.display = "none";
            modelDiv.style.display = "none";
            outputsDiv.style.display = "none";

            showAsConfig('CONFIG_EDITOR', config)

    } else {
            configDiv.style.display = "none";
    }
}

function toggleDeployConfig() {
    let configDiv =  document.getElementById("deploy_config_div");

    if (configDiv.style.display === "none") {
            configDiv.style.display = "block";
    } else {
            configDiv.style.display = "none";
    }
}

function toggleInputs() {
    let configDiv =  document.getElementById("dev_config_div");
    let inputsDiv =  document.getElementById("inputs_div");
    let mappingDiv =  document.getElementById("mapping_div");
    let modelDiv =  document.getElementById("model_dev_div");
    let outputsDiv =  document.getElementById("outputs_div");
    if (inputsDiv.style.display === "none") {      
            configDiv.style.display = "none";          
            inputsDiv.style.display = "block";
            mappingDiv.style.display = "none";
            modelDiv.style.display = "none";
            outputsDiv.style.display = "none";
    } else {
            inputsDiv.style.display = "none";
    }
}

function toggleOutputs() {
    let configDiv =  document.getElementById("dev_config_div");
    let inputsDiv =  document.getElementById("inputs_div");
    let mappingDiv =  document.getElementById("mapping_div");
    let modelDiv =  document.getElementById("model_dev_div");
    let outputsDiv =  document.getElementById("outputs_div");
    if (outputsDiv.style.display === "none") {   
            configDiv.style.display = "none";  
            inputsDiv.style.display = "none";    
            mappingDiv.style.display = "none";
            modelDiv.style.display = "none"; 
            outputsDiv.style.display = "block";
    } else {
            outputsDiv.style.display = "none";
    }
}

function toggleMapping() {
        let configDiv =  document.getElementById("dev_config_div");
        let inputsDiv =  document.getElementById("inputs_div");
        let mappingDiv =  document.getElementById("mapping_div");
        let modelDiv =  document.getElementById("model_dev_div");
        let outputsDiv =  document.getElementById("outputs_div");
        if (mappingDiv.style.display === "none") {   
                configDiv.style.display = "none";  
                inputsDiv.style.display = "none"; 
                mappingDiv.style.display = "block";   
                modelDiv.style.display = "none"; 
                outputsDiv.style.display = "none";

                showMapping();
        } else {
                mappingDiv.style.display = "none";
        }
    }


function toggleModel() {
    let configDiv =  document.getElementById("dev_config_div");
    let inputsDiv =  document.getElementById("inputs_div");
    let mappingDiv =  document.getElementById("mapping_div");
    let modelDiv =  document.getElementById("model_dev_div");
    let outputsDiv =  document.getElementById("outputs_div");
    if (modelDiv.style.display === "none") {   
            configDiv.style.display = "none";  
            inputsDiv.style.display = "none";    
            mappingDiv.style.display = "none";
            modelDiv.style.display = "block"; 
            outputsDiv.style.display = "none";

            showWML();
    } else {
            modelDiv.style.display = "none";
    }
}

