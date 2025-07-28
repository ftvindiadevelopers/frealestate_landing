 useEffect(() => {
    fetch("https://geoapi.ftvassets.in:4001/api/getaccesstoken", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "api-token":
          "j9EF8D8eDp_H5D40m01kiK9E7JnY7s8Yd8bkFkzIUs945wrtSCMTl94WJ7BW0Mbznh4",
        "user-email": "satejchauhan01@gmail.com",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAuthToken(data.auth_token);
        getState(data.auth_token);
      })
      .catch((error) => console.error(error));
  }, []);

  const getState = (token) => {
    fetch(`https://geoapi.ftvassets.in:4001/api/states/India`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setStates(data);
      })
      .catch((error) => console.error(error));
  };

  const getCity = () => {
    fetch(`https://geoapi.ftvassets.in:4001/api/cities/${selectedState}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCities(data);
      })
      .catch((error) => console.error(error));
  };

