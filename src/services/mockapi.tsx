import { isEmpty } from "@utils/function";
import {
  faculties,
  programmes,
  faculty_details,
  course_quicklinks,
  nav_admissions,
  nav_programmes,
  nav_campus_life,
  facilities,
  accommodation,
  nav_about,
  about,
  admissions,
} from "@data/lazyjson";

const filterFacultyByCategory = (data: any, query: any) => {
  try {
    let total = 0;
    const res = data.map((item: any) => ({
      ...item,
      courses: item?.courses.filter((child: any) =>
        child?.category.includes(query)
      ),
    }));

    res.map((item: any) => (total = total + item?.courses.length));

    let result = { total: total, faculties: res };
    return result;
  } catch (e) {
    console.log("Failed to filter categories");
  }
};

const filterFacultyByType = (data: any, query: any) => {
  try {
    let total = 0;
    const res = data.filter((item: any) => item?.link.includes(query));

    res.map((item: any) => (total = total + item?.courses.length));

    let result = { total: total, faculties: res };
    return result;
  } catch (e) {
    console.log("Failed to filter faculty type");
  }
};

const filterFacultyByName = (data: any, query: any, prog: any) => {
  try {
    const temp = data.filter((item: any) => item?.link.includes(query));

    let res = null;

    if (temp.length === 1) {
      res = temp[0]?.label;

      return res;
    } else {
      console.log("Facultyname: an error occurred.");
    }
  } catch (e) {
    console.log("Failed to filter faculty name");
  }
};

const filterFacultyByTypeAndCategory = (data: any, query: any, prog: any) => {
  try {
    let total = 0;
    let temp = data.filter((item: any) => item?.link.includes(query));

    const res = temp.map((item: any) => ({
      ...item,
      courses: item?.courses.filter((child: any) =>
        child?.category.includes(prog)
      ),
    }));

    res.map((item: any) => (total = total + item?.courses.length));

    let result = { total: total, faculties: res };
    return result;
  } catch (e) {
    console.log("Failed to filter faculty name");
  }
};

const filterFacultyDetails = (data: any, query: any) => {
  try {
    const res = data.filter((item: any) => item?.code.includes(query));

    return res;
  } catch (e) {
    console.log("Failed to fetch faculty details");
  }
};

const filterCourse = (data: any, query: any) => {
  try {
    let res = data.map((item: any) => ({
      ...item,
      courses: item?.courses.filter((child: any) => child?.id.includes(query)),
    }));

    res = res.filter((item: any) => item?.courses.length !== 0);
    const result = res[0]?.courses[0];

    return result;
  } catch (e) {
    console.log("Failed to fetch details");
  }
};

const filterCampusLife = (data: any, query: any) => {
  try {
    const res = data.filter((item: any) => item?.link.includes(query));
    const result = res[0];

    return result;
  } catch (e) {
    console.log("Failed to fetch campus life data");
  }
};

const filterAbout = (data: any, query: any) => {
  try {
    const res = data.filter((item: any) => item?.link.includes(query));
    const result = res[0];

    return result;
  } catch (e) {
    console.log("Failed to fetch about data");
  }
};

const filterAdmissions = (data: any, query: any) => {
  try {
    const res = data.filter((item: any) => item?.link.includes(query));
    const result = res[0];

    return result;
  } catch (e) {
    console.log("Failed to fetch admission data");
  }
};

export const fetchFaculties = (str: any, isType: boolean) => {
  if (isEmpty(str)) return faculties;

  if (!isEmpty(str) && isType) {
    return filterFacultyByType(faculties, str);
  } else {
    return filterFacultyByCategory(faculties, str);
  }
};

export const fetchFacultiesWithProgramme = (str: any, prog: any) => {
  return filterFacultyByTypeAndCategory(faculties, str, prog);
};

export const fetchProgrammes = (str: string) => {
  try {
    switch (str) {
      case "foundation":
        return programmes[0];
      case "undergrad":
        return programmes[1];
      case "postgrad":
        return programmes[2];
      default:
        return programmes;
    }
  } catch (e) {
    console.log("Failed to fetch programmes");
  }
};

export const fetchCurrentFaculty = (str: any, prog: any) => {
  return filterFacultyByName(faculties, str, prog);
};

export const fetchFacultyDetails = (str: any) => {
  return filterFacultyDetails(faculty_details, str);
};

export const fetchCourse = (str: any) => {
  return filterCourse(faculties, str);
};

export const fetchQuickLinks = (str: any) => {
  try {
    switch (str) {
      case "courses":
      case "programmes":
        return course_quicklinks.admissions;
      case "facilities":
        return facilities;
      case "accommodation":
        return accommodation;
      case "about":
        return about;
      case "admissions":
        return admissions;
    }
  } catch (e) {
    console.log("Failed to fetch quick links");
  }
};

export const fetchNavigation = (str: any) => {
  try {
    switch (str) {
      case "admissions":
        return nav_admissions;
      case "programmes":
        return nav_programmes;
      case "campus_life":
        return nav_campus_life;
      case "about":
        return nav_about;
    }
  } catch (e) {
    console.log("Failed to fetch navigation links");
  }
};

export const fetchFacility = (str: any) => {
  if (isEmpty(str)) return facilities;
  else {
    return filterCampusLife(facilities, str);
  }
};

export const fetchAccommodation = (str: any) => {
  if (isEmpty(str)) return accommodation;
  else {
    return filterCampusLife(accommodation, str);
  }
};

export const fetchAbout = (str: any) => {
  if (isEmpty(str)) return filterAbout(about, "");
  else {
    return filterAbout(about, str);
  }
};

export const fetchAdmissions = (str: any) => {
  if (isEmpty(str)) return admissions;
  else {
    return filterAdmissions(admissions, str);
  }
};
