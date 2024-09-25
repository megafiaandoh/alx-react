import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes"

export const selectCourse = (index) => {
	return {
		type: SELECT_COURSE,
		index // i.e. index: index
	}
}

export const unSelectCourse = (index) => {
	return {
		type: UNSELECT_COURSE,
		index // i.e. index: index
	}
}

/*  bound the action creators
	bounding essentially means creating functions that call
	the action creators and immediately dispatch its result to a specific store instance...
*/

export const boundingSelectCourse = (index) => dispatchEvent(selectCourse(index))
export const boundingUnselectCourse = (index) => dispatchEvent(unSelectCourse(index))
