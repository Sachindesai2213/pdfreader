const pdfDataGrid = (data) => {
    $("#pdf-table-grid").dxDataGrid({
        dataSource: data,
        paging: {
            pageSize: 10,
        },
        rowAlternationEnabled: true,
        showBorders: true,
    });
};

$("#pdf-reader-form").submit((event) => {
    event.preventDefault();
    var formData = new FormData();
    formData.append("file", $("#file")[0].files[0]);
    $.ajax({
        url: "/api/pdf-reader/",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success: (data) => {
            console.log(JSON.parse(data));
            $("#pdf-table-grid").dxDataGrid({
                dataSource: JSON.parse(data),
            })
        },
        error: (err) => {
            console.log(err);
        },
    });
});
