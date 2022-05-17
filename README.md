# About

A promised based op.gg scraper for League of Legends with 'recently played 
with' section.


## Usage
```javascript
const opggDuoScraper = require('opgg-duo-scraper');

opggDuoScraper.getStats('yassuo', 'na', false).
    then(stats => console.log(stats))       
```


```javascript
// Output
{
  Name: 'yassuo',
  Level: '386',
  ProfilePic: 'https://opgg-static.akamaized.net/images/profile_icons/profileIcon1413.jpg?image=q_auto&image=q_auto,f_png,w_auto&v=1652335124059',
  RecentlyPlayedWith: [
    [ 'Summoner', 'Played', 'Win', 'Lose', 'Win Ratio' ],
    [ 'skb', '3', '2', '1', '67%' ],
    [ 'POOGERS', '3', '2', '1', '67%' ],
    [ '1083', '2', '0', '2', '0%' ],
    [ 'Chimp', '2', '2', '0', '100%' ],
    [ 'evergreenily', '2', '2', '0', '100%' ],
    [ 'Heat Waves', '2', '2', '0', '100%' ],
    [ 'Plat Players Suc', '2', '0', '2', '0%' ],
    [ 'EmbraceLife', '2', '1', '1', '50%' ],
    [ 'TwTv TheRealRTO', '2', '1', '1', '50%' ]
  ]
}
```

## Paramaters
getStats(username: string, region: string, refresh: boolean)


## Regions

na kr oce jp euw eune lan br las ru tr


