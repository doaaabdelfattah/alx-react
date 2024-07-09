import CourseListRow from "./CourseListRow";
import "./CourseList.css";
import React from "react";
import propTypes from 'prop-types'
import CourseShape from "./CourseShape";


function CourseList({ listCourses }) {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow textFirstCell="Available courses" textSecondCell={null} isHeader />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader />
      </thead>
      <tbody>
        {(listCourses.length === 0) ?
          (<CourseListRow textFirstCell="No course available yet" isHeader={false} />)
          : (
            listCourses.map(course => (
              <CourseListRow
                key={course.id}
                textFirstCell={course.name}
                textSecondCell={String(course.credit)}
                isHeader={false}
              />
            ))
          )}
      </tbody>

    </table>
  )
}

CourseList.propTypes = {
  listCourses: propTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;