import EditButtons from "./EditButtons";
import { useRef } from "react";

function Typing(props) {
  const textRef = useRef(null);

  function handleButtonClick(formatting, value) {
    switch (formatting) {
      case 'font-family':
        document.execCommand('fontName', false, value);
        break;
      case 'bold':
        document.execCommand('bold', false, null);
        break;
      case 'italic':
        document.execCommand('italic', false, null);
        break;
      case 'underline':
        document.execCommand('underline', false, null);
        break;
      case 'link':
        const link = prompt('Enter the link:');
        document.execCommand('createLink', false, link);
        break;
      case 'ordered-list':
        document.execCommand('insertOrderedList', false, null);
        break;
      case 'unordered-list':
        document.execCommand('insertUnorderedList', false, null);
        break;
      case 'remove-formatting':
        document.execCommand('removeFormat', false, null);
        break;
      default:
        break;
    }
    textRef.current.focus();
  }  

  return (
    <div>
      <EditButtons handleButtonClick={handleButtonClick} />
      <div 
        contentEditable
        ref={textRef}
        style={{padding: '10px', border: 'none', outline: 'transparent', 
        minWidth: '90%', minHeight: '99%'}}
        placeholder="Start typing..."
      ></div>
    </div>
  );
}

export default Typing;
