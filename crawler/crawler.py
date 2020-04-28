## crawler.py
import requests
from bs4 import BeautifulSoup

req = requests.get('https://www.naver.com/')
html = req.text
soup = BeautifulSoup(html, 'html.parser')
## CSS Selector를 통해 html요소들을 찾아낸다.
my_titles = soup.select(
    'h3 > a'
    )