let crdArray = [0, 0];

exports.handler = async (event) => {
  const x = event.queryStringParameters.lat || crdArray[0];
  const y = event.queryStringParameters.lng || crdArray[1];

  console.log(`x is ${x}; y is ${y}`);

  crdArray[0] = x;
  crdArray[1] = y;

  console.log(JSON.stringify(crdArray));

  return {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify(crdArray),
  };
};
