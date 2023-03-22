
export default async function handler(request, res) {

    const players = [
        {
            "name" : "Steven Stamkos",
            "imageUrl" : "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474564@2x.jpg",
            "textbox1" : "Captian",
            "menuLabel" : "More Facts",
            "textbox2" : "Cardz by Dani"
        },
        {
            "name" : "Brayden Point",
            "imageUrl" : "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8478010@2x.jpg",
            "textbox1" : "Center",
            "menuLabel" : "More Facts",
            "textbox2" : "Cardz by Dani"
        },
        {
            "name" : "Nikita Kucherov",
            "imageUrl" : "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476453@2x.jpg",
            "textbox1" : "Russian Savage",
            "menuLabel" : "Rigt Wing",
            "textbox2" : "Cardz by Dani"
        }
    ];
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(players);
  }