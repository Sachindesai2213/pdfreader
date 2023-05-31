import json

import pdfkit as pdf
import tabula
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.


@api_view(['POST'])
def pdf_reader_view(request):
    if request.method == 'POST':
        file = request.data['file']
        tables = tabula.read_pdf(
            file,
            pages="all",
            lattice=True,  # Format based on table borders
            multiple_tables=False  # To get table data continued on next line
        )

        # Select first table
        table = tables[0]

        # Select row with Description required to update
        index_to_update = table[table['Description'] == 'Type of Tender'].index.to_list()[0]

        # To update data in DataFrame. Will update data in last column against Type of Tender Description
        table.at[index_to_update, table.columns[-1]] = 'new value'

        # To rename columns and convert DF to JSON for FrontEnd display
        table_data = table.rename(columns=lambda x: x.title().replace('.', ''))
        table_data = json.loads(table_data.to_json(orient='records'))

        # Convert DataFrame to HTML
        table.to_html('media/output.html', index=False)

        # Convert HTML to PDF (https://wkhtmltopdf.org/downloads.html - Additional Support)
        pdf.from_file('media/output.html', 'media/output.pdf')
        return Response(table_data)
