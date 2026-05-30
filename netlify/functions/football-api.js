exports.handler = async function(event) {
  const API_KEY = '2f9dc7f15fa14392936dd80ba44ccc75';
  const url = 'https://api.football-data.org/v4/competitions/WC/matches';
  try {
    const response = await fetch(url, {
      headers: { 'X-Auth-Token': API_KEY }
    });
    const data = await response.json();
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
  } catch(e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: e.message })
    };
  }
};
