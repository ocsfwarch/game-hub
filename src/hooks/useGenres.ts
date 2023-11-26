import { useState, useEffect } from "react"
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
    description: string;
}

interface FetchGenreResponse {
    count: number;
    results: Genre[];
  }
  

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController()
        setIsLoading(true)
        apiClient
          .get<FetchGenreResponse>("/genres", { signal: controller.signal})
          .then((res) => setGenres(res.data.results))
          .catch((err) => {
              if (err instanceof CanceledError) return
              setError(err.message)
          })
          .finally(() => {
              setIsLoading(false)
          });
  
          return () => controller.abort()
      }, []);
  
      return { genres, error, isLoading }  
}

export default useGenres

