// Pass props using attributes in the JSX tag of the child component.
// Access props in the child component using props or destructuring.
// You can pass any data: strings, numbers, objects, arrays, or functions.

import PropReceiving from "./PropReceiving";


//1. create a component that displays a message passed as a prop
//2. Write a component that takes a list of items as props and renders them as a bulleted list.



const PropPassing:React.FC = () => {
    const message= 'hello there this is the message passed by parent';
    const number= 50;
    const list= ['Item1', 'Item2', 'Item3', 'Item4'];
    
   
    const handleButton=(message:string): void => {
      alert(message)
    }
  return (
    <div className="flex bg-red-500">
        <p>Parent </p>
        <PropReceiving propMessage={message} propNumber={number} onButtonClick={handleButton} list={list}/>
    </div>
  )
}

export default PropPassing