from rest_framework.response import Response
from rest_framework.decorators import api_view
import tabula
import json

# Create your views here.


@api_view(['POST'])
def pdf_reader_view(request):
    if request.method == 'POST':
        file = request.data['file']
        tables = tabula.read_pdf(
            file,
            pages="all",
            lattice=True,
            multiple_tables=False
        )

        table = tables[0].rename(columns=lambda x: x.title().replace('.', ''))
        table_data = json.loads(table.to_json(orient='records'))

        tabula.convert_into(file, "media/output.csv", output_format="csv", pages="all", lattice=True)

        for index, data in enumerate(table_data):
            for key, value in data.items():
                if 'value' in key.lower() and value and '120.14' in value:
                    table_data[index][key] = 'Test'

        table_data.to_html('f.html')
        return Response(table_data)
