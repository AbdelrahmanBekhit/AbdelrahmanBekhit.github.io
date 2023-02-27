
function NoteList(){
  return (
    <div className='notebar'>
      <div className='list-top'>
        <h2>Notes</h2>
        <button className="add">+</button>
      </div>
      <div className='list-notes'>
        <div className='list-note'>
          <div className='note-title'>
            <strong>Title</strong><br></br>
            <small> modified on</small>
          </div>
          <p>Preview</p>
        </div>
      </div>
    </div>
  );
}

export default NoteList;