function createAndDownloadCSVFile() {
    var csvArray = [[]];
    var titles = ['title 1', 'title 2', 'title 3'];
    var rowsDataList = [{"value_1":"","value_2":"","value_3":""},{"value_1":"","value_2":"","value_3":""}]
    //Add Titles
    for(var j=0; j<titles.length; ++j){
        csvArray[0].push(titles[j].title);
    }

    //Add Column
    for(var i=0; i<rowsDataList.length; ++i){
        var info = [];
        info.push(  rowsDataList[i].value_1 ,rowsDataList[i].value_2 ,rowsDataList[i].value_3  );

        csvArray.push(info);

    }

    //Create all rows
    var csvRows = [];
    for(var index=0; index < csvArray.length; index++){
        csvRows.push(csvArray[index].join(','));
    }


    // Create CSV File
    var csvString = csvRows.join("%0A");
    var a         = document.createElement('a');
    a.href        = "data:text/csv;charset=utf-8,%EF%BB%BF" + csvString; //if there are some special character
    a.target      = '_blank';
    a.download    = 'download' + (new Date()).getTime() + '.csv';

    document.body.appendChild(a);
    a.click();
};