import requests

url = 'https://www.codewars.com/api/v1/code-challenges/'
id = '526989a41034285187000de4' # Count IP-Adresses kata for testing
resp = requests.get(url=url+id)
data = resp.json()
kataName= data['name']
description=data['description']
print(kataName)
print(description)
