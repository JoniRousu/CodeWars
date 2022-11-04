import requests
import os

url = 'https://www.codewars.com/api/v1/code-challenges/'
id = '526989a41034285187000de4' # Count IP-Adresses kata for testing
resp = requests.get(url=url+id)
data = resp.json()
kataName = data['name']
kataNameStripped = kataName.replace(" ","")
description=data['description']

os.mkdir(kataNameStripped)

with open(kataNameStripped + '/README.md', 'w') as f:
    f.write('# '+ kataName + '\n\n' + description)

open(kataNameStripped + '/' + kataNameStripped + '.js', 'x').close()