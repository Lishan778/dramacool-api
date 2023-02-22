This API allows users to scrape data from dramacool9.co website. 
The API endpoints available are /latest-releases, /popular-dramas, /upcoming-dramas, /k-show, /kshow-releases and for video Streaming links /streamsb and /defultcdn for Mutiple Server in one :P

### Requirements
Node.js
npm or yarn
Setup
Clone this repository to your local machine.
In the root directory, run npm install or yarn install to install all dependencies.
Start the server by running node app.js or node . if you have nodemon installed.
The API will be accessible at http://localhost:3000

### Get Latest-Release

This endpoint returns a list of the latest Asian drama releases available on dramacool9.co.

Example request:

```
GET http://localhost:3000/latest-releases
```

Output >>

```
[ { "title": "D.P. Dog Day",
    "imgSrc": "https://www.dramacool9.co/wp-content/uploads/D-P.-Dog-Day-240x350.jpg",
    "episode": "12",
    "time": "2021",
    "dramaId": "d-p-dog-day" },
{...},
...
]
```

### Get Popular-dramas

This endpoint returns a list of the most popular dramas.

Example request:

```
GET http://localhost:3000/popular-dramas
```

Output >>

```
[  {    "title": "Jirisan",
        "imgSrc": "https://www.dramacool9.co/wp-content/uploads/Jirisan-240x350.jpg",
        "dramaId": "jirisan"},
{...},
...
]
```

### Get Upcoming-dramas

This endpoint returns a list of the Upcoming dramas.

Example request:

```
GET http://localhost:3000/upcoming-dramas
```

Output >>

```
[  {    "title": "Jirisan",
        "imgSrc": "https://www.dramacool9.co/wp-content/uploads/Jirisan-240x350.jpg",
        "dramaId": "jirisan"},
{...},
...
]
```

### Get k-show

This endpoint returns a list of the Upcoming dramas.

Example request:

```
GET http://localhost:3000/k-show
```

Output >>

```
[  {    "title": "Jirisan",
        "imgSrc": "https://www.dramacool9.co/wp-content/uploads/Jirisan-240x350.jpg",
        "dramaId": "jirisan"},
{...},
...
]
```

### Get Kshow-releases

This endpoint returns a list of the latest Asian drama releases available on dramacool9.co.

Example request:

```
GET http://localhost:3000/kshow-releases
```

Output >>

```
[ { "title": "D.P. Dog Day",
    "imgSrc": "https://www.dramacool9.co/wp-content/uploads/D-P.-Dog-Day-240x350.jpg",
    "episode": "12",
    "time": "2021",
    "dramaId": "d-p-dog-day" },
{...},
...
]
```

### Get Streaming URLs

| Parameter          | Description                                                                                       |
| ------------------ | ------------------------------------------------------------------------------------------------- |
| `::title` (string) | dramaId. **To verify the id of each drama, look at the dramaId which is in the every Endpoints.** |

#### Streamsb

This endpoint returns link of streamsb servers for a particular drama.

Example usage:

```
fetch('https://kdarma-scraper.herokuapp.com/streamsb/crazy-romance')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
```

Output >>

```
[  {"dramaUrl":"https://streamsss.net/e/cet7st00qtb3"} ]
```

Note: Replace "crazy-romance" with the title of the drama you want to get the streaming servers for.

#### Defultcdn

This endpoint returns link of all servers for a particular drama.

Example usage:

```
fetch('https://kdarma-scraper.herokuapp.com/defultcdn/the-heavenly-idol-2023-episode-1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
```

Output >>

```
[  {    "dramaUrl:https://asianhdplay.net/streaming.php?id=MzY5Njc0&title=The+Heavenly+Idol+%282023%29+episode+1&typesub=SUB"} ]
```

Note: This a the Defult server that DramaCool Uses.
