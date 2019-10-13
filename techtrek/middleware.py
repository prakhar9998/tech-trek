from datetime import datetime
from django.conf import settings
from django.http import HttpResponse

class TimeMiddleware(object):
    def __init__(self, get_response):
        self.get_response = get_response
    
    def __call__(self, request):
        return self.get_response(request)

    def process_view(self, request, callback, callback_args, callback_kwargs):
        # TODO: add paytm url after merging the 'payments' branch
        if request.path.startswith('/accounts/'):
            return None
        print(datetime.now(), settings.START_TIME)
        if datetime.now() < settings.START_TIME:
            return HttpResponse("hol' up")
        if datetime.now() > settings.END_TIME:
            return HttpResponse("ENDED")
        return None
