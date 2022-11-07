import requests
import os
import sys

if (len(sys.argv) != 2):
    print('Missing kata ID!')
    print('Usage: kata ID as argument.')
    exit(1)

url = 'https://www.codewars.com/api/v1/code-challenges/'
kataUrl = 'https://www.codewars.com/kata/'
id = sys.argv[1]
resp = requests.get(url=url+id)

if (resp.status_code != 200):
    print('The kata ID is invalid or there was an other problem.')
    exit(1)

data = resp.json()
kataName = data['name'].title()
kataNameStripped = kataName.replace(" ","")
invalid = '<>:"/\|?*. '
for char in invalid:
	kataNameStripped = kataNameStripped.replace(char, '')
description=data['description']

os.mkdir(kataNameStripped)

with open(kataNameStripped + '/README.md', 'w') as f:
    f.write('# '+ kataName + '\n\n' + description + '\n\n***\n\n[Link to Kata](' + kataUrl + id + '/javascript)')

open(kataNameStripped + '/' + kataNameStripped + '.js', 'x').close()

print('Sucessfully initialized kata ' + kataName)
print('Have fun!')

exit(0)