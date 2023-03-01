function EditButtons({ handleButtonClick }) {
  return (
    <div className="note-buttons">
      <select
        onChange={(e) => handleButtonClick('font-family', e.target.value)}
        defaultValue="default"
      >
        <option value="Arial">Arial</option>
        <option value="calibri">Calibri</option>
        <option value="Helvetica">Helvetica</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Courier New">Courier New</option>
        <option value="Verdana">Verdana</option>
        <option value="Georgia">Georgia</option>
        <option value="Garamond">Garamond</option>
        <option value="Bookman">Bookman</option>
        <option value="Comic Sans MS">Comic Sans MS</option>
        <option value="Trebuchet MS">Trebuchet MS</option>
        <option value="Impact">Impact</option>
        <option value="Wingdings">Wingdings</option>
      </select>
      <button onClick={() => handleButtonClick('bold')}>
        <b>B</b>
      </button>
      <button onClick={() => handleButtonClick('italic')}>
        <i>Ɪ</i>
      </button>
      <button onClick={() => handleButtonClick('underline')}>
        <u>U</u>
      </button>
      <button onClick={() => handleButtonClick('link')}>
        <span>🔗</span>
      </button>
      <button onClick={() => handleButtonClick('ordered-list')}>
        <span>1.</span>
      </button>
      <button onClick={() => handleButtonClick('unordered-list')}>
        <span>•</span>
      </button>
      <button onClick={() => handleButtonClick('remove-formatting')}>
        <span style={{ textDecoration: 'line-through' }}>T</span>
      </button>
    </div>
  );
}

export default EditButtons;
