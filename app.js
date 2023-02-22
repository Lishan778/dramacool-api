const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors')

const app = express();
const PORT = 3000;
// Define an array of URLs to scrape data from
const baseUrl = 'https://www.dramacool9.co';
const urls = {
  '/latest-releases': 'https://www.dramacool9.co/category/latest-asian-drama-releases/',
  '/popular-dramas': 'https://www.dramacool9.co/tag/most-popular-dramas/',
  '/upcoming-dramas': 'https://www.dramacool9.co/upcoming-asian-dramas/',
  '/k-show': 'https://www.dramacool9.co/category/k-show/',
  '/kshow-releases' : 'https://www.dramacool9.co/category/latest-kshow-release/'
};

app.use(cors())
app.get('/', (req, res) => {
  res.send('Welcome to DramaCool API!');
});

app.get('/latest-releases', (req, res) => {
  const url = urls['/latest-releases'];

  axios.get(url)
    .then(response => {
      const html = response.data;
      const $ = cheerio.load(html);

      const items = $('.tab-pane.fade#drama ul.box li');

      const data = items.map((index, element) => {
        const title = $(element).find('h3').text();
        const imgSrc = $(element).find('.lazy.wp-post-image').attr('data-original');
        const episode = $(element).find('.ep.sub').text().replace('EP', '').trim();
        const time = $(element).find('.time').text();
        const dramaIdRegex = /https:\/\/www.dramacool9.co\/(.+?)\/$/;
        const dramaId = dramaUrl.match(dramaIdRegex)[1];
        return { title, imgSrc, episode, time, dramaId };
      }).get();

      console.log(data); // Display the scraped data in the console
      res.send(data); // Send the scraped data as the response to the client
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

app.get('/popular-dramas', (req, res) => {
  const url = urls['/popular-dramas'];

  axios.get(url)
    .then(response => {
      const html = response.data;
      const $ = cheerio.load(html);

      const items = $('.box li');

      const data = items.map((index, element) => {
        const title = $(element).find('h3').text();
        const imgSrc = $(element).find('.lazy.wp-post-image').attr('data-original');
        const dramaIdRegex = /https:\/\/www.dramacool9.co\/(.+?)\/$/;
        const dramaId = dramaUrl.match(dramaIdRegex)[1];
        return { title, imgSrc, dramaId };
      }).get();

      console.log(data); // Display the scraped data in the console
      res.send(data); // Send the scraped data as the response to the client
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

app.get('/upcoming-dramas', (req, res) => {
  const url = urls['/upcoming-dramas'];

  axios.get(url)
    .then(response => {
      const html = response.data;
      const $ = cheerio.load(html);

      const items = $('.box li');

      const data = items.map((index, element) => {
        const title = $(element).find('h3').text();
        const imgSrc = $(element).find('.lazy.wp-post-image').attr('data-original');
        const dramaIdRegex = /https:\/\/www.dramacool9.co\/(.+?)\/$/;
        const dramaId = dramaUrl.match(dramaIdRegex)[1];
        return { title, imgSrc, dramaId };
      }).get();

      console.log(data); // Display the scraped data in the console
      res.send(data); // Send the scraped data as the response to the client
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

app.get('/k-show', (req, res) => {
  const url = urls['/k-show'];

  axios.get(url)
    .then(response => {
      const html = response.data;
      const $ = cheerio.load(html);

      const items = $('.box li');

      const data = items.map((index, element) => {
        const title = $(element).find('h3').text();
        const imgSrc = $(element).find('.lazy.wp-post-image').attr('data-original');
        const dramaIdRegex = /https:\/\/www.dramacool9.co\/(.+?)\/$/;
        const dramaId = dramaUrl.match(dramaIdRegex)[1];
        return { title, imgSrc, dramaId };
      }).get();

      console.log(data); // Display the scraped data in the console
      res.send(data); // Send the scraped data as the response to the client
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

app.get('/kshow-releases', (req, res) => {
  const url = urls['/kshow-releases'];

  axios.get(url)
    .then(response => {
      const html = response.data;
      const $ = cheerio.load(html);

      const items = $('.tab-pane.fade#drama ul.box li');

      const data = items.map((index, element) => {
        const title = $(element).find('h3').text();
        const imgSrc = $(element).find('.lazy.wp-post-image').attr('data-original');
        const episode = $(element).find('.ep.sub').text().replace('EP', '').trim();
        const time = $(element).find('.time').text();
        const dramaIdRegex = /https:\/\/www.dramacool9.co\/(.+?)\/$/;
        const dramaId = dramaUrl.match(dramaIdRegex)[1];
        return { title, imgSrc, episode, time, dramaId };
      }).get();

      console.log(data); // Display the scraped data in the console
      res.send(data); // Send the scraped data as the response to the client
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

app.get('/streamsb/:title', (req, res) => {
  const title = req.params.title;
  const url = `${baseUrl}/${title}`;

  axios.get(url)
    .then(response => {
      const html = response.data;
      const $ = cheerio.load(html);

      const serversList = $('.serverslist.Streamsb');
      const videoUrl = serversList.attr('data-server');

      console.log(videoUrl); // Display the scraped video URL in the console
      res.setHeader('Content-Type', 'application/json');
      res.json({ dramaUrl: videoUrl }); // Send the scraped video URL as an object in JSON format to the client
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

app.get('/defultcdn/:title', (req, res) => {
  const title = req.params.title;
  const url = `${baseUrl}/${title}`;

  axios.get(url)
    .then(response => {
      const html = response.data;
      const $ = cheerio.load(html);

      const serversList = $('.serverslist.Standard.Server.active');
      const videoUrl = serversList.attr('data-server');

      console.log(videoUrl); // Display the scraped video URL in the console
      res.setHeader('Content-Type', 'application/json');
      res.json({ dramaUrl: videoUrl }); // Send the scraped video URL as an object in JSON format to the client
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});




