import React from 'react'

export default function Blog() {
    const {title, description} = props;
  return (
    <div>Blog
        <h1>{title}</h1>
        <p>{description}</p>
        <Link to={id}></Link>
    </div>
  )
}
