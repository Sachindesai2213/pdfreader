from rest_framework.response import Response
from rest_framework.decorators import api_view
import tabula

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

        table_data = tables[0].to_json(orient='records')
        return Response(table_data)
