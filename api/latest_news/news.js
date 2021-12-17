import apollo from "../../lib/apollo.js";

async function GetNewsYamaha(token="", start = 0) {
	var res = await apollo.query(
      `
        query($start: Int!) {
          latestNews(limit:6,start:$start)
          {
            id
            title
            description
            img{
              url
            }
            published_at
          }
        }
      `,
		token,
    {
      start: start,
    }
	);
	return res;
}

async function GetOtherNewsYamaha(token="", start = 0) {
	var res = await apollo.query(
      `
        query($start: Int!) {
          latestNews(limit:3,start:$start)
          {
            id
            title
            description
            img{
              url
            }
            published_at
          }
        }
      `,
		token,
    {
      start: start,
    }
	);
	return res;
}

async function GetNewsSuzuki(token="", start = 0) {
	var res = await apollo.query(
      `
        query{
          latestNews(where: { business_partner: "2" })
          {
            id
            title
            description
            img{
              url
            }
            published_at
          }
        }
      `,
		token,
    {
      start: start,
    }
	);
	return res;
}

async function GetOtherNewsSuzuki(token="", start = 0) {
	var res = await apollo.query(
      `
        query{
          latestNews(where: { business_partner: "2" })
          {
            id
            title
            description
            img{
              url
            }
            published_at
          }
        }
      `,
		token,
    {
      start: start,
    }
	);
	return res;
}

async function GetNewsHonda(token="", start = 0) {
	var res = await apollo.query(
      `
        query{
          latestNews(where: { business_partner: "3" })
          {
            id
            title
            description
            img{
              url
            }
            published_at
          }
        }
      `,
		token,
    {
      start: start,
    }
	);
	return res;
}

async function GetOtherNewsHonda(token="", start = 0) {
	var res = await apollo.query(
      `
        query{
          latestNews(where: { business_partner: "3" })
          {
            id
            title
            description
            img{
              url
            }
            published_at
          }
        }
      `,
		token,
    {
      start: start,
    }
	);
	return res;
}

async function GetNewsHino(token="", start = 0) {
	var res = await apollo.query(
      `
        query{
          latestNews(where: { business_partner: "4" })
          {
            id
            title
            description
            img{
              url
            }
            published_at
          }
        }
      `,
		token,
    {
      start: start,
    }
	);
	return res;
}

async function GetOtherNewsHino(token="", start = 0) {
	var res = await apollo.query(
      `
        query{
          latestNews(where: { business_partner: "4" })
          {
            id
            title
            description
            img{
              url
            }
            published_at
          }
        }
      `,
		token,
    {
      start: start,
    }
	);
	return res;
}

async function GetDetailNews(id, token="") {
	var res = await apollo.query(
      `
        query($input: ID!) {
          latestNews(where:{id:$input})
          {
            id
            title
            description
            img{
              url
            }
            published_at
          }
        }
      `,
      token, 
      {	
        "input": id
      }
	);
	return res;
}

module.exports = {
	GetNewsYamaha: GetNewsYamaha,
  GetOtherNewsYamaha:GetOtherNewsYamaha,
  GetNewsSuzuki:GetNewsSuzuki,
  GetOtherNewsSuzuki:GetOtherNewsSuzuki,
  GetNewsHonda:GetNewsHonda,
  GetOtherNewsHonda:GetOtherNewsHonda,
  GetNewsHino:GetNewsHino,
  GetOtherNewsHino:GetOtherNewsHino,
  GetDetailNews: GetDetailNews,
};