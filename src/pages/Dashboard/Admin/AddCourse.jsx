import React from 'react';

const AddCourse = () => {

      const handleSubmit = (event) => {
            event.preventDefault();
            const form = event.target;

      }

      return (
            <div>
                  <form onSubmit={handleSubmit}>



                  </form>
            </div>
      );
};

export default AddCourse;