
from django.urls import path
from .views import register_user, LoginView, ProfileView

urlpatterns = [
    path('api/user/register/', register_user, name='register_user'),
    path('api/user/login/', LoginView.as_view(), name='login'),
    path('api/user/progile/', ProfileView.as_view(), name='profile'),
]


