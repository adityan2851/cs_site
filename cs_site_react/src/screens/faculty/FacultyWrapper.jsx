import FacultyCard from "../../components/FacultyCard";

const FacultyWrapper = () => {
  return (
      <div class="container my-5">
        <div class="row">
            <div className="col-md-4">
              <FacultyCard image="some.png" name="jenisha" education="me" designation="profesor" pdfLink="some.pdf"/>
            </div>
        </div>
      </div>
  );
};
export default FacultyWrapper;
