let crdArray = [0, 0];

exports.handler = async (event) => {
  const x = await event.queryStringParameters.lat;
  const y = await event.queryStringParameters.lng;

  crdArray[0] = x;
  crdArray[1] = y;

  console.log(JSON.stringify(crdArray));

  return {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify(crdArray),
  };
};
