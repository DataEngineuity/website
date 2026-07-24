from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(["GET"])
def health(request):
    return Response({"status": "ok", "service": "data-engineuity-website-api"})


@api_view(["GET"])
def api_placeholder(request):
    return Response({
        "message": "Future website API",
        "planned_endpoints": [
            "/api/enquiries/",
            "/api/quote-requests/",
            "/api/meeting-requests/",
            "/api/portfolio/",
            "/api/clients/",
            "/api/partners/",
        ],
    })
