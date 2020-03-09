import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ResourceList = ({ resource }) => {

  const [resources, setResources] = useState([])

  const fetchResource = async resource => {
    const response = await axios.get(`http://jsonplaceholder.typicode.com/${resource}`)
    setResources( response.data )
  }

  // (()=>{console.log('Hi)})() - define a function and immediately invoking, this is the sytanx of immediately invoking function

  // useEffect(() => {
  //   Nerds way
  //   (async resource => {
  //     const response = await axios.get(`http://jsonplaceholder.typicode.com/${resource}`)
  //     setResources( response.data )
  //   })(resource)

  // }, [resource])

  useEffect(() => {
    fetchResource(resource)
  }, [resource]) // useEffect will gets called if resource change. Put [] will result the useEffect function only gets called once

  return (
    <ul>
      { resources.map(record => (
        <li key={ record.id }>{ record.title }</li>
      )) }
    </ul>
  )

}

export default ResourceList
