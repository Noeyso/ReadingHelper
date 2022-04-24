const axios = require("axios");
require("dotenv").config();

exports.getSearchResult = async (req, res, next) => {
  try {
    const params = req.query;
    console.log(params);
    console.log(
      `https://dapi.kakao.com/v3/search/book?sort=accuracy&page=${params.page}&size=${params.size}&query=${params.query}`
    );
    const result = await axios.get(
      `https://dapi.kakao.com/v3/search/book?query=${encodeURI(
        params.query
      )}&page=${params.page}&size=${params.size}&sort=accuracy`,
      {
        headers: {
          Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_SEARCH_API_KEY}`,
        },
      }
    );
    console.log("result");
    console.log(JSON.stringify(result.data));
    res.send(JSON.stringify(result.data));
  } catch (error) {
    console.log("error");
    console.log(error);
    return res.status(500).json(error);
  }
};

exports.getEncodedUri = async (req, res, next) => {
  try {
    let image = await axios.get(req.query.url, { responseType: "arraybuffer" });
    let raw = Buffer.from(image.data).toString("base64");
    res.send("data:" + image.headers["content-type"] + ";base64," + raw);
  } catch (error) {
    console.log("error");
    return res.status(500).json(error);
  }
};
