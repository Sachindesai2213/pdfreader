// Grid to display data pulled and updated from PDF
const pdfDataGrid = (data) => {
    $("#pdf-table-grid").dxDataGrid({
        export: {
            enabled: true,
        },
        dataSource: data,
        paging: {
            pageSize: 20,
        },
        rowAlternationEnabled: true,
        showBorders: true,
    });
};

// Form submit event
$("#pdf-reader-form").submit((event) => {
    $("#upload-pdf-button").html("Uploading ...");
    $("#upload-pdf-button").prop("disabled", true);
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
            $("#upload-pdf-button").html("Upload");
            $("#upload-pdf-button").prop("disabled", false);
            $("#pdf-table-grid").dxDataGrid({
                dataSource: data,
            });
        },
        error: (err) => {
            $("#upload-pdf-button").html("Upload");
            $("#upload-pdf-button").prop("disabled", false);
            console.log(err);
        },
    });
});
