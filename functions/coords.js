let crdArray = [0, 0];

exports.handler = async (event) => {
  // const x = await event.queryStringParameters.lat;
  // const y = await event.queryStringParameters.lng;

  crdArray[0] = 2;
  crdArray[1] = 3;

  console.log(JSON.stringify(crdArray));

  return {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify(crdArray),
  };
};
