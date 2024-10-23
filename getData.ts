import axios, { AxiosResponse } from 'axios';

interface ApiResponse {
  openapi: string;
  info: {
    title: string;
    description: string;
    version: string;
  };
  paths: Record<string, any>;
  components: Record<string, any>;
}

async function fetchSwaggerData(): Promise<void> {
  try {
    const response: AxiosResponse<ApiResponse> = await axios.get('https://petstore.swagger.io/v2/swagger.json');
    const data = response.data;

    console.log('Title:', data.info.title);
    console.log('Description:', data.info.description);
    console.log('Version:', data.info.version);
    console.log('Paths:', data.paths);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchSwaggerData();
