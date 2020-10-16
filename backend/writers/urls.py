from django.conf.urls import url
from writers import views

urlpatterns = [
    url(r'^api/writers$', views.writer_list),
    url(r'^api/writers/(?P<pk>[0-9]+)$', views.writer_detail),
]
