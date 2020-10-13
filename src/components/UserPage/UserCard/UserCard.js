import React, {Fragment} from 'react'
import {Card, Image, Loader} from 'semantic-ui-react'
import useFetch from 'use-http'
import PropTypes from 'prop-types'

const UserCard = ({id}) => {
  console.log()
  const {
    loading,
    error,
    data = []
  } = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`, {}, [id])

  if (error) {
    console.log(error)
  }

  const {name, email, phone, website} = data

  return (
    <Fragment>

      {loading
        ? <Loader active inline='centered'/>
        : (
          <Card>
            <Image
              src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg'
              wrapped
              ui={false}/>
            <Card.Content>
              <Card.Header>{name}</Card.Header>
              <Card.Meta>Website: {website}</Card.Meta>
              <Card.Description>
                Email: {email}<br/>
                Phone: {phone}
              </Card.Description>
            </Card.Content>
          </Card>
        )}
    </Fragment>
  )
}

UserCard.propTypes = {
  id: PropTypes.string.isRequired
}

export default UserCard
