interface ApiResponse {
  status: number;
}

export interface SuccessApiResponse extends ApiResponse {
  data: unknown;
}

export interface ErrorApiResponse extends ApiResponse {
  message: string;
}
