from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from authentication import views

urlpatterns = [
    url(r'^user/$', views.UserViewSet),
    url(r'^login/$', views.LoginViewSet),

]

urlpatterns = format_suffix_patterns(urlpatterns)