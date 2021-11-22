import { connect } from "react-redux";   //import connect for connecting redux store with components
import Thumbnail from "./Thumbnail";
import React from "react";

const Results = ({ results, search }) => {
  return (
    <div id="Results" className="px-5 my-10 grid gap-4 md:gap-6 grid-cols-3 md:grid-cols-4">
      {/* passing only those movie namesto thumbnail component which matches with user input */}
      {results.map(
        (result) =>
          result.name.toLowerCase().includes(search.toLowerCase()) && (
            <div>
              <Thumbnail image_name={result} />
            </div>
          )
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    search: state.search,
  };
};

export default connect(mapStateToProps)(Results);
