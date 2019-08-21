from django.urls import include, path

urlpatterns = [
    # accounts/ shows all users
    path('accounts/', include('accounts.urls')),
    # rest-auth/user/ shows current logged in user
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
]
