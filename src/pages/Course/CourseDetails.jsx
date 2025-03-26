import { useLoaderData } from 'react-router-dom';
import Container from '../../components/Container';
import React from 'react';
const CourseDetails = () => {


      const details = useLoaderData()
      console.log('details', details)
      return (
            <div>
                  <Container>
                        <img src={details?.image} alt="img" />
                        <h1>{details?.title}</h1>
                  </Container>
            </div>
      );
};

export default CourseDetails;
