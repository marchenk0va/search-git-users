import * as React from "react"
import axios from "axios"

export const API = {
    users: ( username: string ) => `https://api.github.com/users/${username}`
}

export const getUsers = async (url: string) => 
    await axios.get(url)

export const useDebounce = (value: string, delay: number): string => {
	const [debouncedValue, setDebouncedValue] = React.useState(value)

	React.useEffect(() => {
		const callback = setTimeout(() => setDebouncedValue(value), delay)
		return () => clearTimeout(callback)
	}, [value, delay])

	return debouncedValue
}

export const useFetch = (url: string) => {
    const [response, setResponse] = React.useState([])
    const [isLoading, setLoading] = React.useState(true)
    const [isError, setError] = React.useState([])
  
    async function fetchData(): Promise<any> {
      const res = await fetch(url)
      setLoading(false)
      res
        .json()
        .then(data => setResponse(data.results))
        .catch(err => setError(err))
    }
  
    React.useEffect((): void => {
      fetchData()
    }, [])
  
    return { response, isLoading, isError }
  }