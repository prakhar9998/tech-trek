from django.urls import path
from payments.views import home, payment, response

urlpatterns = [
    path('', home, name='home'),
    path('payment/', payment, name='payment'),
    # path('payment/', Payment.as_view(), name='payment'),
    path('response/', response, name='response'),
]