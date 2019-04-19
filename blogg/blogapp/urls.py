from django.conf.urls import url
from . import views


app_name = 'blogapp'
urlpatterns = [
    url(r'^$', views.test, name='login'),
]
