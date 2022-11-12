import Navbar from "@components/nav/Navbar";
import Footer from "@components/footer/Footer";
import Faculty from "@pages/admission/Faculty";
import SpecificFaculty from "@pages/admission/SpecificFaculty";
import Programmes from "@pages/programmes/Programmes";
import About from "@pages/About";
import Home from "@pages/Home";
import PageNotFound from "@pages/PageNotFound";
import { Route, Routes } from "react-router-dom";
import Facilities from "@pages/campuslife/Facility";
import Accommodation from "@pages/campuslife/Accommodation";
import Transportation from "@pages/campuslife/Transportation";
import Admissions from "@pages/admission/Admissions";
import Scholarships from "@pages/admission/Scholarships";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* admissions */}
        <Route path="faculties">
          <Route index element={<Faculty />}></Route>
          <Route path=":facultyId" element={<SpecificFaculty />}></Route>
        </Route>
        <Route path="admissions">
          <Route path=":admissionId" element={<Admissions />} />
          <Route path="aid" element={<Scholarships />} />
        </Route>

        {/* programmes */}
        <Route path="/programmes">
          <Route path=":programmeType" element={<Programmes />}>
            <Route path=":programmeId" element={<></>} />
          </Route>
        </Route>

        {/* campus life */}
        <Route path="/campus-life">
          <Route path="facilities" element={<Facilities />}>
            <Route path=":facilityId" element={<></>} />
          </Route>
          <Route path="accommodation" element={<Accommodation />}>
            <Route path=":accommodationId" element={<></>} />
          </Route>
          <Route path="transportation" element={<Transportation />} />
        </Route>

        {/* about */}
        <Route path="about" element={<About />}>
          <Route path=":aboutId" element={<></>} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
