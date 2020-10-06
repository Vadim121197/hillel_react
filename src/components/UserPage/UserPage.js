import React from 'react'
//import library
import {useParams} from 'react-router-dom'
import useFetch from 'use-http'
import {Card, Image, Icon} from 'semantic-ui-react'

const UserPage = (props) => {
  const {id} = useParams()
  
  const {
    loading,
    error,
    data = []
  } = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`, {}, [])

  console.log(props)
  return (
    <div>
      <Card>
        <Image
          src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg'
          wrapped
          ui={false}/>
        <Card.Content>
          <Card.Header>Daniel</Card.Header>
          <Card.Meta>Joined in 2016</Card.Meta>
          <Card.Description>
            Daniel is a comedian living in Nashville.
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  )
}

export default UserPage
