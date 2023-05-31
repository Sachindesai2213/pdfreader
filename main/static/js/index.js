const pdfDataGrid = (data) => {
    $("#pdf-table-grid").dxDataGrid({
        dataSource: data,
        paging: {
            pageSize: 20,
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
            $("#pdf-table-grid").dxDataGrid({
                dataSource: data,
            })
        },
        error: (err) => {
            console.log(err);
        },
    });
});
