import React from 'react'

const Review = (props) => {

    return (
    <div>
      <h3> Reviews: </h3>
      <button> Add Review </button>
      <form onSubmit={props.handleSubmit}>

      <label htmlFor='rating'> Rating:  </label>
          <input type ='text' name='rating' onChange={props.handleChange} value={props.state.rating}/>
          <label htmlFor='text'> Review Title:  </label>
          <input type ='text' name='title' onChange={props.handleChange} value={props.state.text}/>
          <label htmlFor='text'> Review:  </label>
          <input type ='text' name='text' onChange={props.handleChange} value={props.state.title}/>
          <button type="submit"> Submit Review</button>
      </form>
      {props.reviews.map(review => (
          <div key={review.id}>
            <p> {review.rating}</p>
            <p> {review.title}</p>
            <p> {review.text} </p>
          </div>
      ))}
    </div>
    )
  }



export default Review;
