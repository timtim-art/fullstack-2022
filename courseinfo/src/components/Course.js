import React from 'react';

const Course = ( {course} ) => {

    return (
      <div>
        <Header header = {course.name} />
        <Content content = {course.parts} />
      </div>
    )
  }
  
  const Header = ({ header }) => {
  
    return (
      <h2>{header}</h2>
    )
  }
  
  const Total = ({ sum }) => {

    return(
      <p><b>total of {sum.reduce((a,b) => (a+b))} exercieses</b></p>
    ) 
  }
  
  const Part = ( {part} ) => {
  
    return (
      <p>
        {part.name} {part.exercises}
      </p>    
    )
  }
  
  const Content = ( {content} ) => {
  


    return ( //map creates new array, arrowfunction in map is used for mapping, function gets part object (from components) as parameter. it returns Part component which is given part.id and part from components through props part
      <div>
          {content.map(part => {

          return(
          <Part key = {part.id} part = {part}/>
          )}
          )}
          <Total sum = {content.map(sum => sum.exercises)} />
      </div>
    )
  }

  export default Course