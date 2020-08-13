import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi";
import actionTypes from "./actionTypes";

export async function saveCourse(course) {
  const savedCourse = await courseApi.saveCourse(course);
  dispatcher.dispatch({
    actionType: course.id
      ? actionTypes.UPDATE_COURSE
      : actionTypes.CREATE_COURSE,
    course: savedCourse,
  });
}

export async function loadCourses() {
  const courses = await courseApi.getCourses();
  dispatcher.dispatch({
    actionType: actionTypes.LOAD_COURSES,
    courses: courses,
  });
}

export async function deleteCourse(id) {
  await courseApi.deleteCourse(id);
  dispatcher.dispatch({
    actionType: actionTypes.DELETE_COURSE,
    id: id,
  });
}
