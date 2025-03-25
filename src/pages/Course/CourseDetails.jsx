import Container from '../../components/Container';
import React from 'react';
import useCourse from '../../hocks/useCourse';
import { useParams } from 'react-router-dom';
const CourseDetails = () => {


      const [course] = useCourse()
      const { id } = useParams()
      console.log('course,id', course, id)

      return (
            <div>
                  <Container>
                        <h1>uikuyhikuk</h1>
                  </Container>
            </div>
      );
};

export default CourseDetails;
