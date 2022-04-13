function response(res, status, result = "") {
  let desc = "";

  switch (status) {
    case 200:
      desc = "OK";
      break;
    case 201:
      desc = "Created";
      break;
  }

  const isObject = (data) => {
    return !!data && data.constructor === Object;
  };

  const results = {
    status: status,
    description: desc,
    result: isObject(result) ? [result] : result,
  };

  res.status(status).json(results);
}

module.exports = response;
