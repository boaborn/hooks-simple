import { useState, useEffect } from 'react'
import axios from 'axios'

const useResources = resource => {
  const [resources, setResources] = useState([])

  const fetchResource = async resource => {
    const response = await axios.get(`http://jsonplaceholder.typicode.com/${resource}`)
    setResources( response.data )
  }

  useEffect(() => {
    fetchResource(resource)
  }, [resource]) // useEffect will gets called if resource change. Put [] will result the useEffect function only gets called once

  return resources
}

export default useResources
