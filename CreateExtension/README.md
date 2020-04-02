# Een (Google) extensie maken

## **Beschrijving**
Je leert hoe je een simpele Google Chrome extensie kunt maken. Componenten zijn background scripts, content scripts, een opties pagina en UI elementen.
Technieken die hier bij horen zijn HTML, CSS, Javascript & JSON.
Een officiële, uitgebreide stap voor stap tutorial gemaakt door Google zelf is [hier](https://developer.chrome.com/extensions/getstarted) te vinden.

&nbsp;

## **Waarom?**
Het maken van een extensie helpt ons inschatten of het mogelijk is een extensie te ontwikkelen die advertenties kan detecteren op websites en deze vervolgens kan aanpassen en/of overlappen.
Er wordt gekozen een Google Chrome extensie te maken aangezien dit de populairste browser is.

&nbsp;

## **Wat is een Google Chrome extensie?**
Een extensie binnen Google Chrome is een klein software programma dat de Chrome browser kan aanpassen/verbeteren qua functionaliteit en uiterlijk.

&nbsp;

## **Stappen**
Begin met een nieuw directory aan te maken om daar de extension files in te stoppen.
&nbsp;

### Manifest.json
Maak een ```manifest.json``` bestand aan en zet hem in de directory.
```
{
    "name": "Mijn eerste Chrome extensie",
    "version": "1.0",
    "description": "Maak een extensie!",
    "manifest_version": 2
  }
  ```
Dit JSON bestand bevat alle informatie over de extensie en is dus belangrijk bij het maken van een extensie.

&nbsp;

Ga vervolgens naar je [extensiebeheer](chrome://extensions) en zorg ervoor dat 'Developer mode' is ingeschakeld.

Klik op 'LOAD UNPACKED' en selecteer de directory van de extensie.

![alt text](https://developer.chrome.com/static/images/get_started/load_extension.png "Klik op LOAD UNPACKED")

De extensie is nu geïnstalleerd!

&nbsp;

### Instructies toevoegen
Maak nu een background.js file aan. Ga terug naar je manifest.json en registreer background.js hierin.

```  {
    "name": "Mijn eerste extensie",
    "version": "1.0",
    "description": "Maak je eigen extensie!",
    "permissions": ["storage"],
    "background": {
      "scripts": ["background.js"],
      "persistent": false
    },
    "manifest_version": 2
  }
  ```

Geef toestemming om de storage API te gebruiken.
  ```
  {
    "name": "Mijn eerste extensie",
  ...
    "permissions": ["storage"],
    "background": {
      "scripts": ["background.js"],
      "persistent": false
    },
  ...
  }
  ```
### Een User Interface maken
Maak een popup.html file aan. Voeg alvast een script tag toe.
```
  <!DOCTYPE html>
  <html>
    <head>
      <style>
        button {
          height: 30px;
          width: 30px;
          outline: none;
        }
      </style>
    </head>
    <body>
      <button id="changeColor"></button>
      <script src="popup.js"></script>
    </body>
  </html>
```
Dit maakt een button aan waarmee later de achtergrondkleur veranderd kan worden. De HTML file moet net als de background script eerst nog worden geregistreerd in de manifest.json file.
```
    ...,
    "background": {
      "scripts": ["background.js"],
      "persistent": false
    },
    "page_action": {
      "default_popup": "popup.html"
    },
    "manifest_version": 2
  }
```
Als je een eigen icon wilt toevoegen aan de extensie kun je het onderstaande toevoegen.
```
...
"page_action": {
      "default_popup": "popup.html",
      "default_icon": {
        "16": "images/get_started16.png",
        "32": "images/get_started32.png",
        "48": "images/get_started48.png",
        "128": "images/get_started128.png"
      }
    },
    "manifest_version": 2
```
Voeg vervolgens een event listener toe voor `runtime.onInstalled` in de background script. Met een console.log kun je testen of alles klopt. Met behulp van de `storage API` kunnen de extensie componenten toegang krijgen tot de waarde en deze updaten.
```
  chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log('The color is green.');
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'developer.chrome.com'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });
```
Geef nu toestemming aan de `declarativeContent` API.
```
 {
    "name": "Mijn eerste extensie",
  ...
    "permissions": ["declarativeContent", "storage"],
  ...
  }
```
Nu moet de button nog kleur krijgen.
Maak een popup.js file aan.
```
 let changeColor = document.getElementById('changeColor');

  chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
  });
```
Hier vraagt de code om de kleur van de button en past deze kleur toe op de achtergrond.

&nbsp;

Klik nu op de reload link.

![alt text](https://developer.chrome.com/static/images/get_started/view_background.png "Klik op de Reload link")


![alt text](https://developer.chrome.com/static/images/get_started/popup_grey.png "Klik op de button om de achtergrondkleur te veranderen")

Je kunt nu de achtergrondkleur van de webpagina veranderen met de extensie door op de button te klikken. 
&nbsp;

#### De extensie is klaar!
&nbsp;

## **Hoe nu verder?**
Nu we een Chrome extensie kunnen maken die een webpagina's DOM kan aanpassen, gaan we onderzoeken hoe we advertenties binnen de browser kunnen detecteren zodat we ze vervolgens kunnen aanpassen (of eventueel overlappen). Adblockers kunnen dit al dus het is zeker mogelijk!

&nbsp;

## Bronnen
https://developer.chrome.com/extensions/getstarted
