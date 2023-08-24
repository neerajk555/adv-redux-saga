//excersie1 

async function fetchDataFromURL(url) {
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  const apiUrl = "https://jsonplaceholder.typicode.com/posts";
  fetchDataFromURL(apiUrl);

  
//exercise2



//excersie2 

async function fetchDataFromURL(url, transformFunction) {
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      const transformedData = transformFunction(data);
      console.log(transformedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  // Example transform function: sanitize and mock transform
  function sanitizeAndTransform(data) {
    const sanitizedData = data.map(item => ({
      id: item.id,
      title: item.title.trim(),
      body: "Mock Transformed: " + item.body
    }));
    return sanitizedData;
  }
  
  const apiUrl2 = "https://jsonplaceholder.typicode.com/posts";
  fetchDataFromURL(apiUrl, sanitizeAndTransform);
  

//exercise3 

async function fetchDataFromURL(url, transformFunction) {
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
  
      try {
        const transformedData = transformFunction(data);
        console.log(transformedData);
      } catch (transformError) {
        console.error("Error during transformation:", transformError);
      }
    } catch (fetchError) {
      console.error("Error fetching data:", fetchError);
    }
  }
  
  // Example transform function: sanitize and mock transform
  function sanitizeAndTransform(data) {
    const sanitizedData = data.map(item => ({
      id: item.id,
      title: item.title.trim(),
      body: "Mock Transformed: " + item.body
    }));
    return sanitizedData;
  }
  
  const apiUrl3 = "https://jsonplaceholder.typicode.com/posts";
  fetchDataFromURL(apiUrl, sanitizeAndTransform);
  

//exercise4 

async function fetchDataFromURL(url, transformFunction) {
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
  
      try {
        const transformedData = transformFunction(data);
        return transformedData;
      } catch (transformError) {
        console.error("Error during transformation:", transformError);
        return null;
      }
    } catch (fetchError) {
      console.error("Error fetching data:", fetchError);
      return null;
    }
  }
  
  // Example transform function: sanitize and mock transform
  function sanitizeAndTransform(data) {
    const sanitizedData = data.map(item => ({
      id: item.id,
      title: item.title.trim(),
      body: "Mock Transformed: " + item.body
    }));
    return sanitizedData;
  }
  
  const apiUrl4 = "https://jsonplaceholder.typicode.com/posts";
  const transformedData = await fetchDataFromURL(apiUrl, sanitizeAndTransform);
  if (transformedData !== null) {
    console.log(transformedData);
  }
  
