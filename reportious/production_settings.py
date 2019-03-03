from reportious.settings import *

ALLOWED_HOSTS = ['.herokuapp.com']
DEBUG = True

SECRET_KEY = os.getenv('SECRET_KEY')
