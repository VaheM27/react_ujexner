import "./Sorting.css";

const Sorting = ({fields, sordByName }) => {

  return (
    <div className="sorting_buttons">
      {
        fields.includes('name') ? <button onClick={() => sordByName("name", "asc")}>By Name</button> : null
      }

      {
        fields.includes('username') ? <button onClick={() => sordByName("username", "asc")}>By Username</button> : null
      }

      {
        fields.includes('email') ? <button onClick={() => sordByName("email", "asc")}>By Email</button> : null
      }
      {
        fields.includes('title') ? <button onClick={() => sordByName("title", "asc")}>By Title</button> : null
      }
      {
        fields.includes('body') ? <button onClick={() => sordByName("body", "asc")}>By Text</button> : null
      }
    </div>
  );
};

export default Sorting;
