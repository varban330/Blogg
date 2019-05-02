from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import View
from rest_framework.views import APIView
from .models import APIkey
import json
from .functions import valid_keys, sentiment_analyser,textclassifier,generatekey

categories = ['adventure','belles_lettres','editorial','fiction','government','hobbies','humor','learned','lore','mystery','news','religion','reviews','romance','science_fiction']
# Create your views here.
class IndexView(View):
    template_name = "blogapp/Project.html"
    def get(self,request):
        return render(request, self.template_name)

def test(request):
    return(HttpResponse("<h1>hello</h1>"))

class SAView(APIView):
    def get(self,request):
        dict = {'message':["Positive", "Neutral", "Negative"]}
        return HttpResponse(json.dumps(dict), status=200)

    def post(self,request):
        try:
            api_keys = valid_keys()
            if request.META["HTTP_OCP_APIM_SUBSCRIPTION_KEY"] in api_keys:
                text = request.data['text']
                result = sentiment_analyser(text)
                dict = {'message': result.title()}
                return HttpResponse(json.dumps(dict), status=200)
            else:
                dict = {'message': 'Invalid API Key Provided'}
                return HttpResponse(json.dumps(dict), status=401)
        except:
            dict = {'message': 'No API Key Provided'}
            return HttpResponse(json.dumps(dict), status=401)


class TCView(APIView):

    def get(self,request):
        dict = {'message':[c.title for c in categories]}
        return HttpResponse(json.dumps(dict), status=200)

    def post(self,request):
        try:
            api_keys = valid_keys()
            if request.META["HTTP_OCP_APIM_SUBSCRIPTION_KEY"] in api_keys:
                text = request.data['text']
                result = textclassifier(text)
                dict = {'message': result.title()}
                return HttpResponse(json.dumps(dict), status=200)
            else:
                dict = {'message': 'Invalid API Key Provided'}
                return HttpResponse(json.dumps(dict), status=401)
        except:
            dict = {'message': 'No API Key Provided'}
            return HttpResponse(json.dumps(dict), status=401)


class RegisterView(APIView):
    def get(self,request):
        dict = {'message':"Hello, this is your developer Varun"}
        return HttpResponse(json.dumps(dict), status=200)

    def post(self,request):
        try:
            fname = request.data['fname']
            lname = request.data['lname']
            email = request.data['email']
            api_key = generatekey()
            x = APIkey()
            x.fname = fname
            x.lname = lname
            x.email = email
            x.key = api_key
            x.save()
            dict = {'message': api_key}
            return HttpResponse(json.dumps(dict), status=200)
        except:
            dict = {'message': 'No API Key Provided'}
            return HttpResponse(json.dumps(dict), status=401)
