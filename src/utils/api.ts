const handleResponse = async (response: Response): Promise<any> => {
  const data = await response.json();

  // Check for error response
  if (!response.ok) {
    // Get error message from body or default to response statusText
    const error = (data && data.message) || response.statusText;
    return Promise.reject(error);
  }

  return data;
};

export { handleResponse };
