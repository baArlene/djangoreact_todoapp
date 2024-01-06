from django.urls import path
from .views import *

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('todo', TodoViewSet, basename='todo')



urlpatterns = router.urls
