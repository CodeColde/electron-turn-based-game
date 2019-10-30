import * as React from "react";

function useFetch(url: string) {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  async function fetchUrl() {
    const response = await fetch(url);
    const json = await response.json();

    setData(json);
    setLoading(false);
  }

  React.useEffect(() => {
    fetchUrl();
  });
  return [data, loading];
}

export default useFetch;
