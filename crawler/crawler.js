const axios = require("axios");
const cheerio = require("cheerio");
const log = console.log;

const getHtml = async () => {
  try {
    return await axios.get("https://www.yna.co.kr/sports/all");
  } catch (error) {
    console.error(error);
  }
};

getHtml()
  .then(html => {
    let ogDatas = {
        title : '',
        description: '',
        image: ''
    };
    const $ = cheerio.load(html.data);
    const $bodyList = $("meta");

    $bodyList.each(function(i, elem) {
        if(String($(this).attr('property')) === 'og:title') {
            ogDatas.title = String($(this).attr('content'));
        } else if(String($(this).attr('property')) === 'og:description') {
            ogDatas.description = String($(this).attr('content'));
        } else if(String($(this).attr('property')) === 'og:image') {
            ogDatas.image = String($(this).attr('content'));
        }
    });

    const data = ogDatas;
    return data;
  })
  .then(res => log(res));